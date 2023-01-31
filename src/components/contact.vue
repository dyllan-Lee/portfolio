<template>
  <article>
    <h1>Contact Me</h1>
    <div class="pr-wrap">
      <div class="cn-wrap">
        <h2><img src="" alt="">Name : 이 석 진</h2>
        <h2><img src="../img/email-con.png" alt="">  dltjrwls0802@gmail.com</h2>
        <h2><img src="../img/phone1.png" alt="">  010 - 9290- 8159</h2>
        <h2><a href=" https://github.com/dyllan-Lee"><img src="../img/pngegg1.png" alt=""> 
            https://github.com/dyllan-Lee</a></h2>
      </div>
    </div>
  </article>
</template>

<script>
  export default {

  }
</script>

<style scoped>
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
</style>