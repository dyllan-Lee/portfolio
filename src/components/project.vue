<template>
  <!-- <h1 id='Project'>project page</h1> -->
  <div>
    <section>
      <article id="yang">
        <h1>Project</h1>
        <div class="pr-wrap">
          <ul>
            <li class="nav-wrap">
              <div class="nav-bar">
                <div class="nav-c gotosec" v-on:click='gosection' data-target="yang"></div>
                <div class="nav-c nav-ac gotosec" v-on:click='gosection' data-target="bang"></div>
                <div class="nav-c nav-ac gotosec" v-on:click='gosection' data-target="seomun"></div>
              </div>
              <div class="nav-txt">
                <p class="nav-active gotosec" v-on:click='gosection' data-target="yang">양주시립 장욱진 미술관</p>
                <p class="gotosec" v-on:click='gosection' data-target="bang">뱅골프 코리아</p>
                <p class="gotosec" v-on:click='gosection' data-target="seomun">서문시장 야시장</p>
              </div>
            </li>
            <li class="page-wrap"><img src="../img/yangju.png" alt="" class="yangju"></li>
            <li class="txt-wrap">
              <h3>Team project</h3>
              <h3>맡은 역할 : 팀장</h3>
              <h3>담당한 구역 : 헤더 , 메인 섹션 1~2 , 공지사항 전체</h3>
              <h3>사용 기술 : html5, css3, js, swiper.js, mysql node.js, aws</h3>
              <h3>개발 기간 : 2022-11-07~2022-12-31</h3>
              <h3 style="display:flex">
                <button type="button"
                  onclick="location.href='http://projectteambogo-env.eba-m9fmyhxs.us-east-1.elasticbeanstalk.com/'">더보기</button>
                &nbsp; <h4>&</h4>
                <a href="https://github.com/dyllan-Lee/project_team_bogo" target="_blank"><img src="../img/pngegg1.png" alt="">
                  <h4>github</h4>
                </a></h3>
            </li>
          </ul>
        </div>
      </article>
      <article id="bang">
        <h1>Project</h1>
        <div class="pr-wrap">
          <ul>
            <li class="nav-wrap">
              <div class="nav-bar">
                <div class="nav-c gotosec nav-ac" v-on:click='gosection' data-target="yang"></div>
                <div class="nav-c gotosec" v-on:click='gosection' data-target="bang"></div>
                <div class="nav-c nav-ac gotosec" v-on:click='gosection' data-target="seomun"></div>
              </div>
              <div class="nav-txt">
                <p class="gotosec" v-on:click='gosection' data-target="yang" >양주시립 장욱진 미술관</p>
                <p class="gotosec nav-active" v-on:click='gosection' data-target="bang" >뱅골프 코리아</p>
                <p class="gotosec" v-on:click='gosection' data-target="seomun" >서문시장 야시장</p>
              </div>
            </li>
            <li class="page-wrap"><img src="../img/bang.png" alt="" class="yangju"></li>
            <li class="txt-wrap">
              <h3>Personal project</h3>
              <h3>담당한 구역 : 전체</h3>
              <h3>사용 기술 : html5, css3, js, mysql node.js, aws</h3>
              <h3>개발 기간 : 2022-10-20~2022-11-21</h3>
              <h3 style="display:flex">
                <button type="button" onclick="">더보기</button> &nbsp; <h4>&</h4>
                <a href="https://github.com/dyllan-Lee/projectbang"><img src="../img/pngegg1.png" alt="">
                  <h4>github</h4>
                </a></h3>
            </li>
          </ul>
        </div>
      </article>
      <article id="seomun">
        <h1>Project</h1>
        <div class="pr-wrap">
          <ul>
            <li class="nav-wrap">
              <div class="nav-bar">
                <div class="nav-c gotosec nav-ac" v-on:click='gosection' data-target="yang"></div>
                <div class="nav-c gotosec nav-ac" v-on:click='gosection' data-target="bang"></div>
                <div class="nav-c gotosec" v-on:click='gosection' data-target="seomun"></div>
              </div>
              <div class="nav-txt">
                <p class="gotosec" v-on:click='gosection' data-target="yang">양주시립 장욱진 미술관</p>
                <p class="gotosec" v-on:click='gosection' data-target="bang">뱅골프 코리아</p>
                <p class="nav-active gotosec" v-on:click='gosection' data-target="seomun">서문시장 야시장</p>
              </div>
            </li>
            <li class="page-wrap"><img src="../img/seomun.png" alt="" class="yangju"></li>
            <li class="txt-wrap">
              <h3>Personal project</h3>
              <h3>담당한 구역 : 전체</h3>
              <h3>사용 기술 : html5, css3</h3>
              <h3>개발 기간 : 2022-10-03~2022-10-20</h3>
              <h3 style="display:flex">
                <button type="button" onclick="">더보기</button> &nbsp; <h4>&</h4>
                <a href="https://github.com/dyllan-Lee/project_seomun"><img src="../img/pngegg1.png" alt="">
                  <h4>github</h4>
                </a></h3>
            </li>
          </ul>
        </div>
      </article>

    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      gosection(e) {
        if (!e.target.matches('.gotosec')) return;
        e.preventDefault();
        const sec = document.querySelector('#' + e.target.dataset.target);
        if (sec) {
          sec.scrollIntoView({
            behavior: "smooth"
          })
        }
      },
    }
  }
</script>

<style scoped>
  section {
    /* background-color:beige */
  }

  article {
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
    width: 100%;
    height: 100vh;
  }
  .gotosec{
    cursor: pointer;
  }
  p {
    text-align: start;
    margin-left: 60px;
    font-weight: bold;
    opacity: 0.2;
    margin-bottom: 64px;
  }

  a {
    display: flex;
  }


  .nav-active {
    opacity: 1;
  }

  h1 {
    margin-left: 6.5%;
    font-size: 60px;
    font-weight: bold;
    color: #036;
    text-align: start;
    margin-top: 50px;
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: start;
    width: 70%;
    margin-bottom: 20px;
  }

  h4 {
    color: #000;
    font-size: 24px;
    line-height: 50px;
  }

  .pr-wrap {
    margin-top: 130px;
  }

  .pr-wrap ul {
    display: flex;
    justify-content: space-between;
  }

  .nav-wrap {
    display: flex;
  }

  .nav-bar {
    width: 3px;
    height: 200px;
    background-color: #808080;
    margin-left: 60px;
    position: relative;
  }

  .nav-c {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #036;
  }

  .nav-c:first-child {
    position: absolute;
    left: -8px;
  }

  .nav-c:nth-child(2) {
    position: absolute;
    left: -8px;
    top: 90px;
  }

  .nav-c:nth-child(3) {
    position: absolute;
    left: -8px;
    top: 180px;
  }

  .nav-ac {
    background-color: #DAE1F0;
  }

  .nav-wrap {
    width: 20%;
  }

  .page-wrap {
    width: 40%;
  }

  .txt-wrap {
    width: 33%;
  }

  .yangju {
    display: block;
    width: 100%;
    /* height: 100%; */
  }

  button {
    width: 150px;
    height: 50px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    font-size: 20px;
  }
</style>