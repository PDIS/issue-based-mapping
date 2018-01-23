<template>
  <div class="ui container">
    <div class="ui segment">
      <div class="ui left rail"><div class="ui segment">123</div></div>
<h1>112e3r3fef4e</h1>
    </div>
  </div>
</template>
<script>
$('.ui.sidebar')
  .sidebar({
    context: $('.bottom.segment')
  })
  .sidebar('attach events', '.menu .item')
;
$(document).ready(function() {
// using context
})
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
