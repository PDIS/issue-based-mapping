<template>
  <div class="seven wide column" id="content">
    <!-- <router-view/> -->
    <div class="ui top attached tabular menu">
  <a class="active item" data-tab="first">釐清議題脈絡</a>
  <a class="item" data-tab="second">釐清利害關係人</a>
  <a class="item" data-tab="third">釐清政策與策略</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="first">
  還在生
</div>
<div class="ui bottom attached tab segment" data-tab="second">
  Second
</div>
<div class="ui bottom attached tab segment" data-tab="third">
  Third
</div>
  </div>
</template>
<script>
$(function () {
  $('.menu .item')
  .tab()
;
})
export default {
  name: 'issue',
}
</script>

