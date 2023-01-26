<template>
  <h1 id='intro'>intro page</h1>
  <button @click="arco =!arco">click</button> 
  <transition name='fadeA'>
    <h2 v-if='arco' class="h2">show me</h2>
  </transition>
  <div></div>
</template>

<script>
export default {
  data(){
    return{
      arco : false,
    }
  },
}

</script>

<style scoped>
div{
  width: 100%;
  height: 800px;
  background-color:pink;
}
.fadeA-enter-from{ 
  opacity: 0;
}
.fadeA-enter-active{
  transition: opacity 1s ease-in-out;
}
.fadeA-enter-to{
  opacity: 1;
}
.fadeA-leave-to{
  opacity: 0;
}
.fadeA-leave-active{
  transition: opacity 1s ease-in-out;
}
h2{
  width: 100%;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  position: fixed;
}
</style>