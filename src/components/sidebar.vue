<template>

       <div class="ui left fixed vertical accordion menu">
        <div class="teal item">
  <a class="title"><i class="dropdown icon"></i>
    釐清議題脈絡
  </a>
  <div class="content">
    <div class="ui form">
      <div class="grouped fields">
        <div class="field">
          <p>問題</p>
    <p>解法</p>
    <p>佐證資料</p>
        </div>
      </div>
    </div>
  </div>
        </div>
        <div class="teal item">
  <a class="title">釐清利害關係人</a>
  <div class="content"></div>
        </div>
        <div class="item">
  <a class="title">釐清政策與策略</a>
  <div class="content"></div>
        </div>
 <a class="active teal item">
    Inbox
    <div class="ui teal left pointing label">1</div>
  </a>
  <a class="item">
    Spam
    <div class="ui teal left pointing label">51</div>
  </a>
  <a class="item">
    Updates
    <div class="ui teal left pointing label">1</div>
  </a>
  <div class="item">
    <div class="ui transparent icon input">
      <input type="text" placeholder="Search mail...">
      <i class="search icon"></i>
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
export default {
  name: 'sidebar'
}
</script>
