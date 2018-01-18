<template>
  <div id="app">
    <v-header></v-header>
    <leftmenu></leftmenu>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
import leftmenu from './components/leftmenu'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
    leftmenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /*  text-align: center; */
  color: #2c3e50;
  margin-top: 100px;
}
/* 
.ui.footer.segment {
  margin: 5em 0em 0em;
  padding: 5em 0em;
} */
</style>
