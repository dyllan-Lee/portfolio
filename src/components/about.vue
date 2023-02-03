<template>
  <section>
    <!-- <div>
      <h1 id='About'>About me</h1>
    </div> -->
    <article>
      <ul>
        <div class="w33 mt50">
          <h1 id='About'>About me</h1>
          <img src="../img/pic.jpeg" class="circle" data-aos="fade-up" data-aos-duration="1000">
          <div class="txt-wrap">
            <h2>Step Up 하는</h2>
            <h2>개발자 이석진 입니다.</h2>
          </div>
        </div>
        <div class="w33 mtre">
          <div class="PI-wrap" data-aos="fade-up" data-aos-duration="1000">
            <h3>Personal Info</h3>
            <p>1994.08.02</p>
            <p>서울</p>
            <p>dltjrwls0802@gmail.com</p>
            <p>010-9290-8159</p>
          </div>
          <div class="ED-wrap" data-aos="fade-up" data-aos-duration="1000">
            <h3>Education</h3>
            <p>서울 대진고등학교 졸업<br>
              <p class="date">-2013.02</p>
            </p>
            <p>서울 상명대학교 소비자주거학과 졸업<br>
              <p class="date">-2020.07</p>
            </p>
            <p>노원 그린컴퓨터아카데미<br> [디지털컨버전스]Vue활용 프론트엔드 웹개발자 양성과정<br>
              <p class="date">-2023.02</p>
            </p><br>
          </div>
        </div>
        <div class="w33 mtre">
          <h3 class="EP"  data-aos="fade-up" data-aos-duration="1000">Experience</h3>
          <div class="EP-wrap" data-aos="fade-up" data-aos-duration="1000">
            <div class="EP-flex">
              <p>자연대학교 23대학생회부원<br>
                <p class="date">-2013.03~12</p>
              </p>
              <p>자연대학교 26대학생회 홍보부차장<br>
                <p class="date">-2016.03~12</p>
              </p>
              <p>경영대학교 9대 학생회선거운동본부장<br>
                <p class="date">-2016.11</p>
              </p>
              <p>45대 총학생회 보궐선거운동원<p class="date">-2017.02~04</p>
              </p>
            </div>
            <div class="EP-flex">
              <p>상명대학교 축제기획단<br>
                <p class="date">-2017.05~06</p>
              </p>
              <p>소비자주거학과 학생회 총무<br>
                <p class="date">-2018.03~12</p>
              </p>
              <p>Kaplan International school Ki Harvard Square<br>
                <p class="date">-2019.07~2020.01</p>
              </p>
            </div>
          </div>
        </div>
      </ul>
      <div class="skill" data-aos="fade-up" data-aos-duration="1000">
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
    </article>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  section {
    width: 100%;
    /* height: 100vh; */
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
    /* margin-bottom: 30px; */
  }

  p {
    font-size: 20px;
    margin-bottom: 15px;
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
    display: block;
    margin-left: 20%;
    margin-top: 10px;
    width: 50%;
  }

  .txt-wrap {
    margin-top: 40px;
  }

  .skill ul {
    display: flex;
    justify-content: space-between;
  }

  .skill ul li {
    width: 33%;
    text-align: start;
    margin-bottom: 20px;
  }

  .skill-left {
    margin-left: 20%;
  }

  @media(max-width:1280px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 30px;
    }

    h5 {
      font-size: 24px;
    }

    h4 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }

  @media(max-width:1024px) {
    article ul {
      flex-wrap: wrap;
    }

    .w33 {
      width: 50%;
    }

    .w33:nth-child(3) {
      width: 100%;
    }

    section {
      height: 100%;
    }

    .EP-wrap {
      margin-left: 10%;
      display: flex;
    }

    .EP-flex {
      width: 50%;
    }

    .EP {
      margin-left: 10%;
    }

    h5 {
      margin-left: 10%;
    }

    .skill ul li {
      width: 50%;
    }

    .skill ul li:nth-child(3) {
      margin-left: 10%;
    }
  }

  @media(max-width:767px) {
    .w33 {
      width: 100%;
    }

    .w33:nth-child(2) {
      margin-left: 10%;
    }

    .circle {
      display: block;
      margin: 40px auto;
      width: 45%;
    }

    .skill ul li:nth-child(2) {
      margin-left: 10%;
    }

    .mtre {
      margin-top: 40px;
    }

  }

  @media(max-width:400px) {
    .EP-wrap {
      flex-direction: column;
    }

    .EP-flex {
      width: 100%;
    }

    .skill img {
      width: 100%;
    }

    .skill-left {
      margin-left: 10%;
    }

    .skill ul li {
      width: 80%;
    }

    h1 {
      font-size: 32px;
    }
  }
</style>