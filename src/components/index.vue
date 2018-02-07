<template>

  <div class="ui form">

      <div class="inline field">
        <label>提案人</label>
        <input type="text" name="name" placeholder="姓名">
      </div>
       <div class="inline field">
        <label>提案內容</label>
        <textarea></textarea>
      </div>
      <div class="inline field">
        <label>問題分析</label>
        <input type="text" name="name" placeholder="問題分析">
      </div>
  </div>

</template>
<script>
import axios from 'axios';
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    // axios.post('https://script.google.com/macros/s/AKfycbyrUWqTk2Z17_zSRbTNqJD3hAtGASP9LwAEFzvGI12PoVNL6W_d/exec', {
    //   "method": "write",
    //   "name": "Wayne",
    //   "sex": "male",
    //   "remark": "測試寫入功能"
   /*  fetch("https://script.google.com/macros/s/AKfycbyrUWqTk2Z17_zSRbTNqJD3hAtGASP9LwAEFzvGI12PoVNL6W_d/exec", {
      method: "POST",
      body: {
        method: "write",
        name: "Wayne",
        sex: "male",
        remark: "測試寫入功能"
      }
    }).then(res => {
      console.log(res.data);
    }); */
  }
};
</script>
