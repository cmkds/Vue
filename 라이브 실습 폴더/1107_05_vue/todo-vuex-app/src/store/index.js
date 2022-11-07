import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    },
    deleteTodo(context, todoItem) {
      //이렇게 간단한 코드만 동작하는 경우는 여기서 actions를 생략하고 원래코드에서 바로 commit을 호출해도 된다.
      context.commit('DELETE_TODO', todoItem)

    },
    updateTodoStatus(context, todoItem){
      context.commit('UPDATE_TODO_STATUS', todoItem)
    },
    saveTodosToLocalStorage(context){
      const jsonTodos = JSON.stringify()
    }
  },
  modules: {
  }
})
