// App1.vue
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld_vue msg="App.vuekからのコメント"/>
    <HelloWorld_vue msg="App.vuekからのコメント2"/>
  </div>
</template>

<script>
// HelloWorld_vue.vueを取り込む
import HelloWorld_vue from './components/HelloWorld.vue'

export default {
  name: 'app',
  // HellowWorldの有効化
  components: {
    HelloWorld_vue
  }
}
</script>
// -------------------style
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
