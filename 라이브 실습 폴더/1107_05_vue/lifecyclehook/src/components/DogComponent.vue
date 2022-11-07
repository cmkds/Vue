<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods:{
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'
      
      axios({
        method: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  //버튼을 눌렀을때 호출하는 메소드를
  //created 시점에도 호출되도록 코드 작성.
  created(){
    this.getDogImage()
    console.log('Child created!')
  },
  
  //mounted의 시점은 인스턴스가 생성되고 dom이랑 연결된
  //이후의 시점이기 때문에 DOM을 바꿀 수 있다.
  //DOM에 대한 조작이 가능하다.
  mounted() {
    const button = document.querySelector('button')
    button.innerText = '멍멍!'
    console.log('Child mouted!')
  },

  //DOM이 새로 그려지는 시점.
  updated() {
    console.log('새로운 멍멍이!')
    console.log('Child updated!')
  }

}
</script>

<style>

</style>
