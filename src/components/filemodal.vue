<template>
      <div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
新增議題相關文件
  </div>
  <div class="content">
  <div class="ui form">
    <div class="field">
    <label>檔案名稱</label>
    <input type="text" placeholder="檔案名稱" v-model="file.name">
  </div>
  <div class="field">
    <label>檔案網址</label>
    <input type="text" placeholder="檔案網址" v-model="file.address">
  </div>
  </div>
  </div>
  <div class="actions">
<!--     <div class="ui button">Cancel</div> -->
    <div class="ui button" v-on:click="addfile" id="ok">新增</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'filemodal',
  data() {
    return {
      file: {
        name: '',
        address: ''
      }
    }
  },
  methods: {
    addfile: function () {
      axios.post('https://ethercalc.org/_/6cg3pkwwprdq',this.file).then()
    }
  },
}
</script>
