<template>
  <div class="seven wide column" id="content">
    <!-- <router-view/> -->
    <div class="ui top attached tabular menu">
  <a class="active item" data-tab="first">釐清議題脈絡</a>
  <a class="item" data-tab="second">釐清利害關係人</a>
  <a class="item" data-tab="third">釐清政策與策略</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="first">
  <h1 class="ui large header">釐清議題脈絡</h1>
  <div class="ui divider"></div>
    <div class="ui form">
       <div class="field">
        <label>問題描述</label>
        <textarea placeholder="請輸入問題描述"></textarea>
      </div>
      <div class="field">
        <label>關聯問題</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="123"><i class="dropdown icon"></i>
            <div class="default text">關連問題到...</div>
            <div class="menu">
    <div class="item" data-value="1">Male</div>
    <div class="item" data-value="0">Female</div>
  </div>
        </div>
      </div>
      <div class="field">
        <label>描述其他問題</label>
      </div>
      <div class="ui divider"></div>
      <div class="ui primary button">儲存</div>
      <div class="ui button">取消</div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="second">
  <h1 class="ui large header">釐清利害關係人</h1>
  <div class="ui divider"></div>
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
  $('.ui.dropdown')
  .dropdown()
;
;
})
export default {
  name: 'issue',
}
</script>

