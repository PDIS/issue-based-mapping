<template>
  <div class="two wide column" id="sidebar">
    <div class="ui accordion">
      <div class="title"><i class="dropdown icon"></i><i class="folder icon"></i>
        議題相關文件
      </div>
      <div class="content">
        <div class="ui middle aligned animated relaxed list">
          <div class="item"  v-for="file in files" ><i class="file pdf outline icon"></i><div class="content" @click="clicklink(file)">{{file.name}}</div></div>
          <div class="item"><i class="plus icon"></i><div class="content" @click="upload" >新增議題相關文件</div></div>
      <!--     <div class="item"><i class="file icon"></i><div class="content">待辦事項</div></div>
          <div class="item"><i class="file icon"></i><div class="content">訪談筆記</div></div>
          <div class="item"><i class="file icon"></i><div class="content">議題研究筆記</div></div> -->
        </div>
      </div>
      <div class="title"><i class="dropdown icon"></i><i class="info icon"></i>議題相關資訊</div>
      <div class="content">
        <div class="ui middle aligned animated relaxed list">
          <div class="item"><i class="talk icon"></i><div class="content"><div class="header">提案名稱</div><div class="description">特定寵物進入國家森林公園、樂園</div></div></div>
          <div class="item"><i class="user icon"></i><div class="content"><div class="header">提案人</div><div class="description">米爸</div></div></div>
          <div class="item"><i class="hand pointer icon"></i><div class="content"><div class="header">附議人數</div><div class="description">5110</div></div></div>
          <div class="item"><i class="home icon"></i><div class="content"><div class="header">主協辦部會</div><div class="description">農委會、衛福部、內政部</div></div></div>
        </div>
      </div>
      <div class="title"><i class="dropdown icon"></i><i class="setting icon"></i>選項</div>
      <div class="content">
        <div class="ui middle aligned animated relaxed list">
          <div class="item"><i class="smile icon"></i><div class="content">歡迎頁面</div></div>
          <div class="item"><i class="book icon"></i><div class="content">使用手冊</div></div>
          <div class="item"><i class="question circle icon"></i><div class="content">常見問題</div></div>
          <div class="item"><i class="map icon"></i><div class="content">導覽模式</div></div>
        </div>
      </div>
    </div>
    <uploadfile v-bind:files="files" v-bind:id='id' @uploadfile="fileschanged"></uploadfile>
  </div>
<!--   <div class="three wide column">
    <div class="ui styled accordion">

        <div class="title"><i class="dropdown icon"></i>
        釐清議題脈絡
        </div>
        <div class="content">
          <div class="ui middle aligned divided selection list">
      <div class="item"><p><router-link to="/question">問題</router-link></p></div>
      <div class="item"><p><router-link to="/solution">解法</router-link></p></div>
      <div class="item"><p>佐證資料</p></div>

    </div>

        </div>

  <div class="title"><i class="dropdown icon"></i>釐清利害關係人</div>
  <div class="content"></div>

  <div class="title"><i class="dropdown icon"></i>釐清政策與策略</div>
  <div class="content"></div>

      </div>
</div> -->

</template>
<style scoped>
/*  .ui.left.fixed.vertical.menu {
   margin-top:4.2em
 } */
 .item {
   margin-left: 2em;
   cursor: pointer
 }

 a {
   color:black
 }

 a:hover {
   color: black
 }

 #add {
   cursor: pointer
 }

</style>

<script>
$(document).ready(function () {
  $('.ui.menu .ui.dropdown').dropdown({
    on: 'hover'
  })
  $('.ui.menu a.item').on('click', function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })
  $('.ui.accordion').accordion()
  $('.trigger.example .accordion').accordion({
    selector: {
      trigger: '.title .icon'
    }
  })
})
import axios from 'axios'
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

import uploadfile from './modals/uploadfile'
export default {
  name: 'sidebar',
  components: {
    uploadfile,
  },
  data() {
    return {
      files: [],
      id: '',
    }
  },
  methods: {
    uploadfile: function (filename,fileaddress) {
      axios.post('https://ethercalc.org/_/6cg3pkwwprdq',{filename,fileaddress}).then()
    },
    guidetour: function() {
    //   $('#step1').modal('setting', 'closable', false)
    // .modal('show');

      this.$tours['myTour'].start()
      // guidetour.start();
    },
    getdata: function () {
      this.files = []
      axios.get('https://ethercalc.org/622t4v2804sk.csv.json').then(res => {
        this.id = res.data.pop()[0]
        res.data.map(file => {
          if (file[1] == 'menu') {
            let data = {}
            data.id = file[0]
            data.name = file[2]
            data.address = file[3]
            this.files.push(data)
          }
        })
      })
    },
    clicklink: function (file) {
      this.$emit('clicklink', file.address)
    },
    upload: function () {
      $('.ui.modal').modal('show');
    },
    fileschanged: function(file) {
      console.log(file)
      this.files.push(file)
    }
  },
  created: function() {
    this.getdata()
  },
  watch: {
    files: function() {
      this.id = parseInt(this.id) + 1
    }
  } 
}
</script>
