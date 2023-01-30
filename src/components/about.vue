<template>
  <section>
    <!-- <div>
      <h1 id='About'>About me</h1>
    </div> -->
    <article>
      <ul>
        <div class="w33 mt50">
          <h1 id='About'>About me</h1>
          <div class="circle"></div>
          <div class="txt-wrap">
            <h2>Step Up 하는</h2>
            <h2>개발자 이석진 입니다.</h2>
          </div>
        </div>
        <div class="w33 mtre">
          <div class="PI-wrap">
            <h3>Personal Info</h3>
            <p>1994.08.02</p><br>
            <p>서울</p><br>
            <p>dltjrwls0802@gmail.com</p><br>
            <p>010-9290-8159</p><br>
          </div>
          <div class="ED-wrap">
            <h3>Education</h3>
            <p>서울 대진고등학교 졸업<br>
              <p class="date">-2013.02</p>
            </p><br>
            <p>서울 상명대학교 소비자주거학과 졸업<br>
              <p class="date">-2020.07</p>
            </p><br>
            <p>노원 그린컴퓨터아카데미<br> [디지털컨버전스]Vue활용 프론트엔드 웹개발자 양성과정<br>
              <p class="date">-2023.02</p>
            </p><br>
          </div>
        </div>
        <div class="w33 mtre">
          <div class="EP-wrap">
            <h3>Experience</h3>
            <p>자연대학교 23대학생회부원<br>
              <p class="date">-2013.03~12</p>
            </p><br>
            <p>자연대학교 26대학생회 홍보부차장<br>
              <p class="date">-2016.03~12</p>
            </p><br>
            <p>경영대학교 9대 학생회선거운동본부장<br>
              <p class="date">-2016.11</p>
            </p><br>
            <p>45대 총학생회 보궐선거운동원<p class="date">-2017.02~04</p>
            </p><br>
            <p>상명대학교 축제기획단<br>
              <p class="date">-2017.05~06</p>
            </p><br>
            <p>소비자주거학과 학생회 총무<br>
              <p class="date">-2018.03~12</p>
            </p><br>
            <p>Kaplan International school Ki Harvard Square<br>
              <p class="date">-2019.07~2020.01</p>
            </p><br>
          </div>
        </div>
      </ul>
    </article>
    <div class="skill">
      <h5 style="text-align : start">Skill</h5>
      <ul>
        <li>
          <h4 class="skill-left">잘 다룰수 있는</h4>
          <img src="../img/Group13.png" alt="" class="skill-left">
        </li>
        <li>
          <h4>어느정도 다루는</h4>
          <img src="../img/Group12.png" alt="">
        </li>
        <li>
          <h4>미숙해도 할 수 있는</h4>
          <img src="../img/Group11.png" alt="">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
  }

  h1 {
    font-size: 60px;
    color: #036;
    font-weight: bold;
    text-align: start;
    width: 285px;
    /* margin-top: 50px; */
    margin-left: 20%;
  }

  h2 {
    font-weight: bold;
    text-align: start;
    margin-left: 20%;
    font-size: 32px;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    color: #036;
    margin-bottom: 40px;
  }

  h4 {
    font-size: 20px;
    margin-block: 20px;
  }

  h5 {
    font-size: 32px;
    font-weight: bold;
    color: #036;
    margin-left: 6.5%;
    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
  }

  .date {
    font-size: 14px;
    color: #909090;
  }

  .mtre {
    margin-top: 100px;
  }

  article ul {
    display: flex;
    justify-content: space-between;
  }

  .w33 {
    width: 33%;
    height: 100%;
    /* background-color: #d9d9d9; */
    text-align: start;
  }

  .mt50 {
    margin-top: 50px;
  }

  .circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: black;
    margin-left: 20%;
    margin-top: 60px
  }

  .txt-wrap {
    margin-top: 60px;
  }

  .skill ul {
    display: flex;
    justify-content: space-between;
  }

  .skill ul li {
    width: 33%;
    text-align: start;
  }

  .skill-left {
    margin-left: 20%;
  }
</style>