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
                <p>양주시립 미술관</p>
                <p></p>
                <p></p>
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
  div {
    width: 100%;
    height: 100vh;
    /* background-color:beige */
  }

  h1 {
    margin-left: 6.5%;
    font-size: 60px;
    font-weight: bold;
    color: #036;
    text-align: start;
    margin-top: 50px;
  }
  .nav-wrap{
    display: flex;
  }
  .nav-bar {
    width: 3px;
    height: 200px;
    background-color: black;
    margin-left: 30px;
    position: relative;
  }
  .nav-c{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .nav-c:first-child{
    position: absolute;
    left: -6px;
  }
  .nav-c:nth-child(2){
    position: absolute;
    left: -6px;
    top: 70px;
  }
  .nav-c:nth-child(3){
    position: absolute;
    left: -6px;
    top: 140px;
  }
</style>