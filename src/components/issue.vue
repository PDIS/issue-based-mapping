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
              <label>關聯利害關係人</label>
  <div class="ui fluid multiple search selection dropdown">
  <input type="hidden" name="country">
  <i class="dropdown icon"></i>
  <div class="default text">關聯利害關係人</div>
  <div class="menu">
  <div class="item" data-value="af">提案人</div>
  <div class="item" data-value="ax">林務局</div>
  <div class="item" data-value="al">內政部</div>
  </div>
  </div>
      </div>
      <div class="field">
        <label>關聯問題</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="123"><i class="dropdown icon"></i>
            <div class="default text">關連問題到...</div>
            <div class="menu">
    <div class="item" data-value="1">劃分區域</div>
    <div class="item" data-value="0">攜帶寵物證明</div>
    <div class="item">+ 新增解法</div>
  </div>
        </div>
      </div>
      <div class="inline field">
        <label>描述其他問題</label>
        <a>+新增問題描述</a>
      </div>
      <div class="ui divider"></div>
      <div class="ui primary button">儲存</div>
      <div class="ui button">取消</div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="second">
  <h1 class="ui large header">釐清利害關係人</h1>
  <div class="ui divider"></div>
  <div class="ui cards">
    <div class="card">
    <div class="image">
      <img src="https://talk.pdis.nat.gov.tw/user_avatar/talk.pdis.nat.gov.tw/audreyt/800/574_1.png">
    </div>
    <div class="content">
      <div class="header">王小明</div>
<!--       <div class="meta">
        <a>農委會林務局</a>
      </div> -->
      <div class="description">
        農委會林務局
      </div>
    </div>
    <div class="extra content">
      <span>
        <i class="time icon"></i>
        2015-11-12 13:42
      </span>
           <span class="right floated">
       <a>修改</a>
      </span>
    </div>
  </div>
  <div class="card">
    <div class="content" v-if="show">
      <div class="ui form">
    <div class="field">
  <label>標籤</label>
  <input type="text" placeholder="顯示標籤">
  <label>姓名</label>
  <input type="text" placeholder="請填寫姓名">
  <label>單位</label>
  <input type="text" placeholder="請填寫單位">
    </div>
      </div>
      <div class="ui divider"></div>
      <div class="ui primary button">儲存</div>
      <div class="ui button">取消</div>
    </div>
    <div class="ui bottom attached primary button" @click="toggle" v-else>
      <i class="add icon"></i>
      新增利害關係人
    </div>
  </div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="third">
    <h1 class="ui large header">釐清政策與策略</h1>
  <div class="ui divider"></div>
  <div class="ui form">
    <div class="field">
  <label>政策與策略</label>
  <input type="text" placeholder="標題">
  </div>

  <div class="ui top attached tabular menu">
  <a class="active item" data-tab="1">現有規劃</a>
  <a class="item" data-tab="2">未來規劃</a>
  <a class="item" data-tab="3">資源</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="1">
  <div class="ui form">
    <div class="field">
      <textarea name="" placeholder="請摘要主辦機關已經做過的事"></textarea>
    </div>
    <div class="field">
      <textarea name="" placeholder="請摘要已面臨到的困難"></textarea>
    </div>
    <div class="field">
      <input type="text" placeholder="相關佐證資料或依據">
    </div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="2">
   <div class="ui form">
    <div class="field">
      <textarea name="" placeholder="請摘要主辦權責機關未來預計做的方向或內容"></textarea>
    </div>
    <div class="field">
      <textarea name="" placeholder="請簡述未來可能會遇到的困難"></textarea>
    </div>
    <div class="field">
      <input type="text" placeholder="相關佐證資料或依據">
    </div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="3">
  <div class="ui form">
    <div class="field">
      <textarea name="" placeholder="已有的資源"></textarea>
    </div>
    <div class="field">
      <input type="text" placeholder="相關佐證資料或依據">
    </div>
  </div>
</div>
</div>
 <div class="inline field">
        <label>描述其他政策與策略</label>
        <a>+新增政策與策略</a>
      </div>
      <div class="ui divider"></div>
      <div class="ui primary button">儲存</div>
      <div class="ui button">取消</div>
  </div>
</div>
  </div>
</template>
<style scoped>
a {
  cursor: pointer;
}
</style>

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
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
}
</script>

