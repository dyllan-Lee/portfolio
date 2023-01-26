<template>
  <!-- <h1 id='Project'>project page</h1> -->
  <div>
    <section>
      <article>
        <h1>Project</h1>
        <div class="pr-wrap">
          <ul>
            <li class="nav-wrap">
              <div class="nav-bar">
                <div class="nav-c"></div>
                <div class="nav-c"></div>
                <div class="nav-c"></div>
              </div>
              <div class="nav-txt">
                <p class="nav-active">양주시립 장욱진 미술관</p>
                <p>뱅골프 코리아</p>
                <p>서문시장 야시장</p>
              </div>
            </li>
            <li class="page-wrap"></li>
            <li class="txt-wrap"></li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  section {
    width: 100%;
    height: 100vh;
    /* background-color:beige */
    border-bottom: 1px solid rgba(80, 80, 80, 0.1);
  }
  p{
    text-align: start;
    margin-left: 60px;
    font-weight: bold;
    opacity: 0.2;
    margin-bottom: 64px;
  }
  .nav-active{
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
  .pr-wrap{
    margin-top: 130px;
  }
  .pr-wrap ul{
    display: flex;
    justify-content: space-between;
  }
  .nav-wrap{
    display: flex;
  }
  .nav-bar {
    width: 3px;
    height: 200px;
    background-color: #808080;
    margin-left: 60px;
    position: relative;
  }
  .nav-c{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #036;
  }
  .nav-c:first-child{
    position: absolute;
    left: -8px;
  }
  .nav-c:nth-child(2){
    position: absolute;
    left: -8px;
    top: 90px;
    background-color: #DAE1F0;
  }
  .nav-c:nth-child(3){
    position: absolute;
    left: -8px;
    top: 180px;
    background-color: #DAE1F0;
  }
  .nav-wrap{
    width: 20%;
  }
  .page-wrap{
    width: 40%;
  }
  .txt-wrap{
    width: 33%;
  }

</style>