<template>
  <div id="app">
    <v-header></v-header>

    <!-- <sidebar></sidebar> -->
    <!-- <router-view/> -->
    <div class="ui celled resizable grid">
      <!-- <input type="hidden" name="id" v-model="id"> -->
      <div class="row">
        <guidetour v-if="showGuideTour"></guidetour>
        <sidebar @clicklink="filelink"></sidebar>
        <hackmd v-bind:address="address"></hackmd>
        <issue></issue>

      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import header from './components/header'
import footer from './components/footer'
import sidebar from './components/sidebar'
import hackmd from './components/hackmd'
import issue from './components/issue'
import guidetour from './components/guidetour/guidetour'

// import Vue from 'vue'
//
// Vue.component('guidetour', {
// 	template: '#guidetour'
// });


export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
    sidebar,
    hackmd,
    issue,
    guidetour
  },
  data () {
    return {
      address: '',
      id: '11',
      showGuideTour: guidetour.data().showGuideTour
    }
  },
  methods: {
    filelink: function (address) {
      this.address = address
    },
    getid: function() {
      axios.get('https://ethercalc.org/622t4v2804sk.csv.json').then(res => {
        this.id = res.data.pop()[0]
      })
    }
  },
  created: function() {
    this.getid()
  },
  mounted: function() {
    console.log(hackmd);
    console.log(guidetour);
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
.column {
  resize: horizontal;
}

 /*      body {
        display: relative;
      }
      #hackmd {
        top: 51.8px;
        padding: 0px;
      }
      #sidebar {
        position: fixed;
        top: 51.8px;
        left: 0;
        bottom: 0;
        width: 18%;
        padding: 0px;
      }
      #sidebar .ui.menu {
        margin: 2em 0 0;
        font-size: 16px;
      }
      #sidebar .ui.menu > a.item {
        color: #337ab7;
        border-radius: 0 !important;
      }
      #sidebar .ui.menu > a.item.active {
        background-color: #337ab7;
        color: white;
        border: none !important;
      }
      #sidebar .ui.menu > a.item:hover {
        background-color: #4f93ce;
        color: white;
      }

      #content {
        margin-left: 19%;
        width: 81%;
        margin-top: 3em;
        padding-left: 3em;
        float: left;
      }
      #content > .ui.grid {
        padding-right: 4em;
        padding-bottom: 3em;
      }
      #content h1 {
        font-size: 36px;
      }
      #content .ui.divider:not(.hidden) {
        margin: 0;
      }
      #content table.ui.table {
        border: none;
      }
      #content table.ui.table thead th {
        border-bottom: 2px solid #eee !important;
      } */
/*
.ui.footer.segment {
  margin: 5em 0em 0em;
  padding: 5em 0em;
} */
</style>
