<template>
  <article id="project-wrap">
    <h1>Project</h1>
    <div class="pr-wrap">
      <ul>
        <li class="nav-wrap">
          <div class="nav-bar">
            <div class="nav-c"></div>
            <div class="nav-c nav-ac"></div>
            <div class="nav-c nav-ac"></div>
          </div>
          <div class="nav-txt">
            <p class="nav-active">양주시립 장욱진 미술관</p>
            <p class="">뱅골프 코리아</p>
            <p class="">서문시장 야시장</p>
          </div>
        </li>
        <li class="page-wrap"><img :src="img" alt="" class="yangju"></li>
        <li class="txt-wrap">
          <h3>{{sub}}</h3>
          <h3>맡은 역할 : {{role}}</h3>
          <h3>담당한 구역 : {{section}}</h3>
          <h3>사용 기술 : {{skill}}</h3>
          <h3>개발 기간 : {{devtime}}</h3>
          <h3 style="display:flex">
            <a :href="githubUrl"><img src="../img/pngegg1.png" alt="">
              <h4>github </h4>
            </a></h3>
        </li>
      </ul>
    </div>
  </article>
</template>
<script>
import{ onMounted } from "vue";
export default {
  props:{
    img:String,
    sub:String,
    title:String,
    role:String,
    section:String,
    skill:String,
    devtime:String,
    githubUrl:String,
  },
  setup(){
    onMounted(()=>{
    })
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