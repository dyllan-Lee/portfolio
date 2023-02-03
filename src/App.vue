<template>
  <!-- <headerc /> -->
  <intro />
  <about />
  <!-- <project /> -->
  <project />

  <cloning />
  <toy-project />
  <contact />
  <div></div>
</template>

<script>
  import headerc from './components/header.vue'
  import intro from './components/intro.vue'
  import about from './components/about.vue'
  // import project from './components/project.vue'
  import cloning from './components/cloning.vue'
  import contact from './components/contact.vue'
  import project from './components/ProjectSec.vue'
  import ToyProject from './components/toyProject.vue'
  import "@/assets/reset1.css" 

  export default {
    name: 'App',
    components: {
      headerc,
      intro,
      about,
      project,
      cloning,
      contact,
      ToyProject,
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
    /* margin-top: 60px; */
  }
</style>