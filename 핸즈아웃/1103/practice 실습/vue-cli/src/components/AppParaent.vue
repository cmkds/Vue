<template>
  <div>
    <h2>AppParent</h2>
    <input 
      type="text"
      v-model="parent"
      @change="parentChange"
    >
    <p>appData: {{appToParent}}</p>
    <p>childData: {{child}}</p>


    <app-child @child-to-parent="parentGetEventFromChild"
    :app-to-child="appToParent"
    :parent-to-child="parent"
    />

  </div>
</template>


<script>
import AppChild from '@/components/AppChild.vue'

export default {
  name : "AppParent",
  components:{
    AppChild,
  },
  props:{
    appToParent: String,
  },

  data: function(){
    return{
      child : null,
      parent : null,
    }
  },

  methods:{
    parentGetEventFromChild: function(childData){
      this.child = childData
      this.$emit('child-to-parent-to-app', childData)
    },
    parentChange:function(){
      this.$emit('parent-to-app',this.parent)
    }
  },
}
</script>

<style>

</style>