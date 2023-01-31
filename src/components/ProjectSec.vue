<template>
  <div class="wrap">
    <!-- <div class="nav-position">
      <div class="nav">
        <div class="nav-wrap">
          <div class="nav-bar">
            <div class="nav-c"></div>
            <div class="nav-c"></div>
            <div class="nav-c"></div>
          </div>
          <div class="nav-txt">
            <p class="nav-active">양주시립 장욱진 미술관</p>
            <p class="">뱅골프 코리아</p>
            <p class="">서문시장 야시장</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="detalis" v-for="(item,index) in projectDetails" :key="item">
      <project-con :img='item.img' :sub='item.sub' :role='item.rol' :section='item.sec' :skill='item.stak'
        :devtime='item.devt' :githubUrl='item.github' :title='item.tit'  :current="'id'+index" :num='index'/>
    </div>
  </div>
</template>
<script>
  import projectCon from './ProjectCon.vue';

  export default {
    components: {
      projectCon,
    },
    setup() {
      const projectDetails = [{
          img: require('@/img/yangju.png'),
          sub: 'Team Project',
          rol: '팀장',
          sec: '헤더 , 메인 섹션 1~2 , 공지사항 전체',
          stak: 'html5, css3, js, swiper.js, mysql node.js, aws',
          devt: '2022-11-07~2022-12-31',
          github: 'https://github.com/dyllan-Lee/project_team_bogo',
          tit: '양주시립 장욱진 미술관',
        },
        {
          img: require('@/img/bang.png'),
          sub: 'Personal Project',
          rol: '개인',
          sec: '전체',
          stak: 'html5, css3, js, mysql node.js, aws',
          devt: '2022-10-20~2022-11-21',
          github: 'https://github.com/dyllan-Lee/projectbang',
          tit: '뱅골프 코리아',
        },
        {
          img: require('@/img/seomun.png'),
          sub: 'Personal Project',
          rol: '개인',
          sec: '전체',
          stak: 'html5, css3',
          devt: '2022-10-03~2022-10-20',
          github: 'https://github.com/dyllan-Lee/project_seomun',
          tit: '서문시장 야시장',
        },
      ]

      return {
        projectDetails,
      }
    }
  }
</script>
<style scoped>
  div.wrap {
    width: 100%;
    /* height:100vh; */
    position: relative;
  }
  .nav-position{
    position: sticky;
    top: 25vh;
  }
  .nav {
    position: absolute;
    top: 25vh;
  }

  .nav-wrap {
    display: flex;
    width: 100%;
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

  .nav-txt {
    position: relative;
    margin-left: 40px;
    text-align: start;
  }

  .nav-txt p:nth-child(2) {
    position: absolute;
    top: 88px;
  }

  .nav-txt p:nth-child(3) {
    position: absolute;
    top: 176px;
  }
</style>