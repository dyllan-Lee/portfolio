<template>
  <article>
    <h1>Toy Project</h1>
    <div class="pr-wrap">
      <ul>
        <li class="do" data-aos="fade-up" data-aos-duration="3000">
          <div class="img-wrap">
            <img src="../img/cal.png" alt=""></div>
          <h3 class="title">calculator(Sum&avg) &nbsp<a href="http://dyllan.dothome.co.kr/cal/cal.html"
              target="_blank"><img src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2022-11-06</p>
        </li>
        <li class="sh" data-aos="fade-up" data-aos-duration="3000">
          <div class="img-wrap">
            <img src="../img/tank.png" alt=""></div>
          <h3 class="title">minitank &nbsp<a href="http://dyllan.dothome.co.kr/project0106(tank)/tank.html"
              target="_blank"><img src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2023-01-06~2023-01-11</p>
        </li>
        <li class="ri" data-aos="fade-up" data-aos-duration="3000">
          <div class="img-wrap">
            <img src="../img/vue.png" alt=""></div>
          <h3 class="title">vue-prac &nbsp<a href="https://github.com/dyllan-Lee/prac-vue-project" target="_blank"><img
                src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2023-01-02~2023-01-06</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  h1 {
    margin-left: 6.5%;
    font-size: 60px;
    font-weight: bold;
    color: #036;
    text-align: start;
    margin-top: 50px;
  }

  article {
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
    width: 100%;
    height: 100vh;
  }

  ul {
    display: flex;
    width: 85%;
    margin: 10% auto 0;
  }

  ul li {
    width: 33%;
    /* height: 10px; */
  }

  .img-wrap {
    height: 240px;
    line-height: 240px;
  }

  img {
    vertical-align: middle;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 60px;
  }

  .devt {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
  }

  @media(max-width:1280px) {
    h1 {
      font-size: 48px;
    }

    ul {
      width: 90%;
    }
  }

  @media(max-width:1024px) {
    article {
      height: 100%;
    }

    ul {
      flex-direction: column;
    }

    ul li {
      width: 50%;
      margin: 20px auto;
      border-bottom: 1px solid rgba(80, 80, 80, 0.1);
    }

    .title {
      margin-top: 30px;
      font-size: 20px;
    }

    .devt {
      font-size: 20px;

      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media(max-width:767px) {
    h1 {
      margin-left: 10%;
    }
  }

  @media(max-width:600px) {
    ul li {
      width: 100%;
      margin: 20px auto;
    }
  }

  @media(max-width:400px) {
    .img-wrap img {
      width: 100%;
    }

    h1 {
      font-size: 32px;
    }
  }
</style>