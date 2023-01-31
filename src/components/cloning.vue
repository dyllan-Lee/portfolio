<template>
  <article>
    <h1>Web Clone</h1>
    <div class="pr-wrap">
      <ul>
        <li class="do">
          <div class="img-wrap">
            <img src="../img/dosirak.png" alt=""></div>
          <h3 class="title">도시락통 &nbsp<a href="http://dyllan.dothome.co.kr/2022-10-04-dosiraktong/%EB%8F%84%EC%8B%9C%EB%9D%BD%ED%86%B5%EC%B5%9C%EC%A2%85.html"><img src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2022-10-07~2022-10-11</p>
        </li>
        <li class="sh">
          <div class="img-wrap">
            <img src="../img/shouse.png" alt=""></div>
          <h3 class="title">싱그러운집 &nbsp<a href="http://dyllan.dothome.co.kr/2022-10-11%20shouse/main.html"><img src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2022-10-12~2022-10-20</p>
        </li>
        <li class="ri">
          <div class="img-wrap">
            <img src="../img/richmond.png" alt=""></div>
          <h3 class="title">더 리치먼드 평창 &nbsp<a href="http://dyllan.dothome.co.kr/2022-10-20%20richmond/index1.html"><img src="../img/Group3.png" alt="" width="100" height="40"></a></h3>
          <p class="devt">제작 기간 : 2022-10-20~2022-10-31</p>
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
</style>