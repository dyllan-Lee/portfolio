<template>
  <article>
    <h1>Contact Me</h1>
    <div class="pr-wrap">
      <div class="cn-wrap" data-aos="zoom-in" data-aos-duration="2000">
        <h2 data-aos="fade-down" data-aos-duration="1000"><img src="" alt="">Name : 이 석 진</h2>
        <h2 data-aos="fade-up" data-aos-duration="1800"><img src="../img/email-con.png" alt=""> dltjrwls0802@<br
            class="mob">gmail.com</h2>
        <h2 data-aos="fade-up-right" data-aos-duration="2500"><img src="../img/phone1.png" alt=""> 010 - 9290- 8159</h2>
        <h2 data-aos="fade-up-left" data-aos-duration="3000"><a href=" https://github.com/dyllan-Lee"
            target="_blank"><img src="../img/pngegg1.png" alt="">
            https://github.com<br class="mob">/dyllan-Lee</a></h2>


      </div>
    </div>
  </article>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .mob {
    display: none;
  }

  article {
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
  }

  h1 {
    margin-left: 6.5%;
    font-size: 60px;
    font-weight: bold;
    color: #036;
    text-align: start;
    margin-top: 50px;
  }

  .cn-wrap {
    width: 35%;
    height: 500px;
    /* background-color: #036; */
    margin: 200px auto;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    text-align: start;
    line-height: 50px;
    margin-top: 30px;
  }

  a {
    color: #2c3e50;
  }

  img {
    vertical-align: middle;
  }

  /* .word {
    font-size: 24px;
    line-height: 20px;
    margin-top: 100px;
    opacity: 0.8;
    color: black;
  } */

  @media(max-width:1280px) {
    h1 {
      font-size: 48px;
    }
  }

  @media(max-width:767px) {
    h1 {
      margin-left: 10%;
    }

    .cn-wrap {
      width: 55%;
      /* height: 500px; */
      /* background-color: #036; */
      margin: 100px auto;
    }
  }

  @media(max-width:600px) {
    .cn-wrap {
      width: 70%;
    }

    .mob {
      display: block;
    }
  }

  @media(max-width:400px) {
    h1 {
      font-size: 32px;
    }
  }
</style>