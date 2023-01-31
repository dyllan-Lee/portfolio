<template>
  <!-- <h1 id='intro'>intro page</h1> -->
  <!-- <button @click="arco =!arco">click</button> 
  <transition name='fadeA'>
    <h2 v-if='arco' class="h2">show me</h2>
  </transition> -->
  <section>
    <div class="txt-wrap intro-wrap">
      <div class="txt">
        <p>Always Try Hard</p>
        <h3>STEP UP</h3>
        <p>developer SeokJin-Lee</p>
      </div>
    </div>
    <div class="intro-wrap">
      <img src="../img/stair_animations.gif" alt="img">
      <div class="subtitle-wrap">
        <ul class="intro-u">
          <p class="intro-p">2023 Portfolio</p>
          <p class="intro-p">Never stop developer</p>
        </ul>
        <ul class="intro-u">
          <ul>
            <p class="intro-d">Focus On</p>
            <p class="intro-p">Front-end developer</p>
          </ul>
          <ul>
            <p class="intro-d">Contact</p>
            <p class="intro-p">dltjrwls0802@gmail.com</p>
            <p class="intro-p">010-9290-8159</p>
          </ul>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        arco: false,
      }
    },
  }
</script>

<style scoped>
  .intro-wrap {
    width: 50%;
    height: 100vh;
    position: relative;
  }

  /* .fadeA-enter-from {
    opacity: 0;
  }

  .fadeA-enter-active {
    transition: opacity 1s ease-in-out;
  }

  .fadeA-enter-to {
    opacity: 1;
  }

  .fadeA-leave-to {
    opacity: 0;
  }

  .fadeA-leave-active {
    transition: opacity 1s ease-in-out;
  }

  h2 {
    width: 100%;
    height: 800px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 48px;
    font-weight: bold;
    position: fixed;
  } */

  section {
    display: flex;
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
  }

  div>img {
    width: 100%;
    /* margin-top: 10%; */
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* div>img:after{
  display:inline-block;
  height:100%; 
  content:""; 
  vertical-align:middle;
} */

  p {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 72px;
    font-weight: bold;
  }

  .txt-wrap {
    text-align: start;
    color: #003366;
  }

  .txt {
    width: 50%;
    margin: 40% auto;
  }

  .intro-p {
    font-size: 12px;
    color: #808080;
    text-align: start;
  }

  .intro-u {
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin: 0 auto;
  }

  .intro-d {
    font-size: 15px;
    text-align: start;
    font-size: bold;
    color: #000;
  }

  .subtitle-wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 95vh;
    margin-top: 3vh;
  }

  @media(max-width: 600px) {
    .intro-u {
      display: none;
    }

    .intro-wrap {
      width: 100%;
      height: 100%;
    }
    
  }
</style>