<template>
  <div id="app">
    <div id="nav"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  height: 63px;
}
</style>
