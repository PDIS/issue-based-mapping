<template>
  <div id="app">
    <v-header></v-header>
    <!-- <sidebar></sidebar> -->
    <!-- <router-view/> -->
    <div class="ui segments">
      <div class="ui grid">
        <sidebar></sidebar>
        <div class="thirteen wide column">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
import sidebar from './components/sidebar'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
    sidebar
  }
}
</script>

<style>
html,body {height: 100%;}
#app {
  height: inherit;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 5rem; */
}
/* 
.ui.footer.segment {
  margin: 5em 0em 0em;
  padding: 5em 0em;
} */
</style>
