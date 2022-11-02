<template>
  <div>

    <ul v-for="(todo, index) in todos" :key="index">
      <TodoListItem :todo="todo"/>
    </ul>

  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: {  //등록
    TodoListItem, 
  },
  props:{
    todos: Array,
  },
}
</script>

<style>

</style>