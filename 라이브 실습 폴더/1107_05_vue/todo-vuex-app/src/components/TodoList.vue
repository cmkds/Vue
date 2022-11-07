<template>
  <div>

      <!-- {{ $store.state.todos }} -->
    <!-- 바로 store에서 가져오는 방법, 권장하지 않음. -->

    <TodoListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
    <!-- :todo="todo" 는 반복을 돌려서 나오는 todo를 todoListItem에게 내려주는 props -->
    <!-- :key="index" 는 index값을 key값으로해서 반복을 돌려준다는 것 -->

    <!-- key가 없으면 Vue Cli 에서 v-for가 실행되지 않음 key필수로 작성해야 하고 지금은 index값으로 사용하는데 실제로 프로젝트할때는 각키의 식별자 역할하는 것으로 넣어주는게 좋다 예를 들면 생성시각같은것.-->



  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name:'TodoList',
  components:{
    TodoListItem,
  },
  

  //재계산을 최대한 조금하는 방법 computed
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>