<template>
  <li>
    {{ todo.title }}

    <button @click="deleteTodo">X</button>

  </li>
</template>

<script>
export default {
  name:'TodoListItem',
  props:{
    todo: Object,
  },
  methods: {
    deleteTodo: function() {
      this.$emit('delete-todo', this.todo) // 반복문 안에서 돌고 있는 todo를 보내줘야 걔를 정확하게 삭제 할 수 있음
    }
  }
}
</script>

<style>

</style>