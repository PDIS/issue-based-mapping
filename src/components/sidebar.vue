<template>
  <div class="two wide column" id="sidebar">
    <div class="ui accordion">
      <div class="title"><i class="dropdown icon"></i><i class="folder icon"></i>
        議題相關文件
      </div>
      <div class="content">
        <div class="ui middle aligned animated relaxed list">
     <!--  <div class="item"><p><router-link to="/question">代辦事項</router-link></p></div>       -->    
          <div class="item"><i class="file icon"></i><div class="content">待辦事項</div></div>
          <div class="item"><i class="file icon"></i><div class="content">訪談筆記</div></div>
          <div class="item"><i class="file icon"></i><div class="content">議題研究筆記</div></div>
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
      <div class="content"></div>
    </div>
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
<style>
/*  .ui.left.fixed.vertical.menu {
   margin-top:4.2em
 } */
 .item {
   margin-left: 2em
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
