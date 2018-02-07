<template>
  <div class="three wide column">
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
</div>

</template>
<style>
/*  .ui.left.fixed.vertical.menu {
   margin-top:4.2em
 } */
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
