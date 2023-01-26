<template>
  <nav>
    <ul>
      <li v-on:click='gosection' data-target="intro" class="gotosec">Intro</li>
      <li v-on:click='gosection' data-target="About" class="gotosec">About</li>
      <li v-on:click='gosection' data-target="Project" class="gotosec">Project</li>
      <li v-on:click='gosection' data-target="Cloning" class="gotosec">Cloning</li>
      <li v-on:click='gosection' data-target="Contact" class="gotosec">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods:{
    gosection(e){
      if(!e.target.matches('.gotosec')) return;
      e.preventDefault();
      const sec = document.querySelector('#' + e.target.dataset.target);
      if(sec){
        sec.scrollIntoView({ behavior : "smooth"})
      }
    },
    //   goAbout(){
    //   const about = document.querySelector('#About');
    //   if(about){
    //     about.scrollIntoView({ behavior : "smooth"})
    //   }
    // },
    //   goProject(){
    //   const project = document.querySelector('#Project');
    //   if(project){
    //     project.scrollIntoView({ behavior : "smooth"})
    //   }
    // },
    //   goCloning(){
    //   const cloning = document.querySelector('#Cloning');
    //   if(cloning){
    //     cloning.scrollIntoView({ behavior : "smooth"})
    //   }
    // },
    //   goContact(){
    //   const contact = document.querySelector('#Contact');
    //   if(contact){
    //     contact.scrollIntoView({ behavior : "smooth"})
    //   }
    // },
  }
}
</script>

<style scoped>

</style>