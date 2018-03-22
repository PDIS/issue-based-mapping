<template>
      <div class="ui modal" id="uploadfile">
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
    <div class="ui primary button" @click="uploadfile">新增</div>
    <div class="ui button" @click="cancel">取消</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import sidebar from '../sidebar'
export default {
  name: 'addfile',
  components: {
    sidebar
  },
  props: ['files','id'],
  data() {
    return {
      file: {
        id: 0,
        name: '',
        address: ''
      }
    }
  },
  methods: {
    uploadfile: function () {
      $.ajax({
        url: "https://ethercalc.org/_/622t4v2804sk",
        type: 'POST',
        dataType: 'application/json',
        contentType: 'text/csv',
        processData: false,
        data: parseInt(this.id) + ',menu,' + this.file.name + ',' + this.file.address
      }).then(this.$emit('uploadfile', this.file)).then(this.file = {});
      $('.ui.modal').modal('hide');
    },
    cancel: function () {
      $('.ui.modal').modal('hide');
    }
  },
  created: function() {
    //console.log(this.id)
  },
}
</script>
