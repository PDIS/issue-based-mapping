<template>
<div class="ui top attached demo menu">
  <a class="item">
    <i class="sidebar icon"></i> Menu
  </a>
</div>
<div class="ui bottom attached segment">
  <div class="ui inverted labeled icon left inline vertical demo sidebar menu">
    <a class="item">
      <i class="home icon"></i> Home
    </a>
    <a class="item">
      <i class="block layout icon"></i> Topics
    </a>
    <a class="item">
      <i class="smile icon"></i> Friends
    </a>
    <a class="item">
      <i class="calendar icon"></i> History
    </a>
  </div>
  <div class="pusher">
    <div class="ui basic segment">
      <h3 class="ui header">Application Content</h3>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</div>

</template>
<style>
 .ui.left.fixed.vertical.menu {
   margin-top:5.1em
 }
</style>

<script>
$(document).ready(function() {
$('.ui.sidebar').sidebar({
    context: $('.bottom.segment')
  })
  .sidebar('attach events', '.menu .item');
})
export default {
  name: 'sidebar'
}
</script>
