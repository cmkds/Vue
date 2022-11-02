<template>
  <div>
    <input 
      type="text"
      v-model="todoTitle"
    >

  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function () {
    return {
      todoTitle: null, //이 변수를 v-model에 연결시켜준다.

    }
  }
}
</script>

<style>

</style>