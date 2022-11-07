import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
    createPersistedState(),
  ],
  state: {
    todos: [

    ]
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedTodosCount(state){
      // 1. 완료된 투두만 모아놓은 새로운 배열을 생성
      const completedTodos = state.todos.filter((todo) => {
        return todo.isCompleted === true
      })
      // 2. 그 새로운 배열의 길이를 반환
      return completedTodos.length
    },
    unCompletedTodosCount(state, getters) {
      return getters.allTodosCount - getters.completedTodosCount
    },
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem){
      const index = state.todos.indexOf(todoItem)
      //index로 요소 찾기
      state.todos.splice(index,1)
      //이거를 뺀 나머지를 새로운 배열로 할당하기.
    },
    UPDATE_TODO_STATUS(state, todoItem) {

      //방법 1
      // todos 배열에서 선택된 todo의 is_completed 값만 토글한 후
      // 업데이트 된 todos 배열로 되어야 함
      //반복을 돌면서 그 결과가 다시 todos에 할당 되야함.
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })

      //방법 2
      // 인덱스 값으로 인덱스를 바꾸겠다.
      // const index = state.todos.indexOf(todoItem)
      // state.todos[index].isCompleted = !state.todos[index].isCompleted

    },
    LOAD_TODOS(state) {
      //로컬스토리지에 있는 todos를 가져와서 변수에 넣어준다.
      const localStorageTodos = localStorage.getItem('todos')
      // 현재 로컬은 배열이 아니라 문자열이라 역으로 파싱해야함.
      const parsedTodos = JSON.parse(localStorageTodos)
      console.log(parsedTodos)
      state.todos = parsedTodos
    },
  },
  actions: {
    createTodo(context, todoTitle){
      // Todo 객체 만들기
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      // console.log(todoItem)
      context.commit('CREATE_TODO', todoItem)
      //context.dispatch('saveTodosToLocalStorage') //
    },
    deleteTodo(context, todoItem) {
      //이렇게 간단한 코드만 동작하는 경우는 여기서 actions를 생략하고 원래코드에서 바로 commit을 호출해도 된다.
      context.commit('DELETE_TODO', todoItem)
      //context.dispatch('saveTodosToLocalStorage') //


    },
    updateTodoStatus(context, todoItem){
      context.commit('UPDATE_TODO_STATUS', todoItem)
      //context.dispatch('saveTodosToLocalStorage') //

    },

    //Todos를 local에 저장하는 과정
    // 라이브러리 선언후에는 필요 없다.
    // saveTodosToLocalStorage(context){
    //   // 위의 todos를 문자열로 바꿔주는 변환이 필요하다.
    //   const jsonTodos = JSON.stringify(context.state.todos)
    //   // window.localStorage.setItem(키, 값)
    //   localStorage.setItem('todos', jsonTodos)
    // },

    //불러오는 것도 자동이라 필요없다.
    // loadTodos(context) {
    //   context.commit('LOAD_TODOS')
    // },
  },
  modules: {
  }
})
