<template>
  <div id="app">
    <h2>App</h2>
    <input type="text"
    v-model="app"
   

    >
    <p>parentData: {{parent}}</p>
    <p>childData: {{child}}</p>


    <app-parent @child-to-parent-to-app="appGetEventFromChild"
    @parent-to-app="appGetEventFromParent"
    :app-to-parent="app"
    />
  </div>
</template>

<script>
import AppParent from '@/components/AppParaent.vue'

export default {
  name: 'App',
  components: {
    AppParent,
  },
  data: function(){
    return{
      child: null,
      parent: null,
      app: null,
    }
  },

  methods:{
    appGetEventFromChild:function(childData){
      this.child = childData
    },
    appGetEventFromParent:function(parentData){
      this.parent= parentData
    },
    // appChange:function(){
    //   this.app = app
    // },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
