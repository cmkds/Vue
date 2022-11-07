<template>
  <div>
    <span 
      @click="updateTodoStatus"
      :class=" { 'is-completed': todo.isCompleted } "
    >
    <!-- v-bind에서 사용하는 객체의 스타일 바인딩 -->

      {{ todo.title }}
    </span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      // console.log('삭제 메서드 호출!!')
      this.$store.dispatch('deleteTodo', this.todo)
      // this.todo 는 여러가지 todo items 중에 선택된 todo
      
      //액션으로 보내지 않고 바로 commit을써서 mutation으로 보내도 된다.
      // this.$store.commit('DELETE_TODO', this.todo)


    },
    updateTodoStatus() {
      this.$store.dispatch('updateTodoStatus', this.todo)
    },
  }
}
</script>

<style>
  .is-completed {
    text-decoration : line-through;
  }

</style>