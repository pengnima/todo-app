<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "./view/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #aaa;
}
#app {
  max-width: 375px;
  max-height: 667px;
  /* background-color: red; */

  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
</style>
