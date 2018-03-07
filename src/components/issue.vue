<template>
  <div class="seven wide column" id="content">
    <!-- <router-view/> -->
    <div class="ui top attached tabular menu">
  <a class="active item" data-tab="threads">釐清議題脈絡</a>
  <a class="item" data-tab="people">釐清利害關係人</a>
  <a class="item" data-tab="policies">釐清政策與策略</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="threads">
  <h1 class="ui large header">釐清議題脈絡</h1>
  <div class="ui divider"></div>
    <div class="ui form">
       <div class="field">
        <label>問題描述</label>
        <textarea placeholder="請輸入問題描述" v-bind="this.threads.description" ></textarea>
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
        <select class="ui search dropdown">
  <option value="">關連問題到</option>
  <option value="1">劃分區域</option>
  <option value="2">攜帶寵物證明</option>
  <option value="0">+ 新增解法</option>
</select>
        <!-- <div class="ui selection dropdown">
          <input type="hidden" name="123"><i class="dropdown icon"></i>
            <div class="default text">關連問題到...</div>
            <div class="menu">
    <div class="item" data-value="1">劃分區域</div>
    <div class="item" data-value="0">攜帶寵物證明</div>
    <div class="item">+ 新增解法</div>
  </div>
        </div> -->
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
<div class="ui bottom attached tab segment" data-tab="people">
  <h1 class="ui large header">釐清利害關係人</h1>
  <div class="ui divider"></div>
  <div class="ui cards">
    <div class="card" v-for="person in people">
    <div class="image">
      <a class="ui teal label">{{person.title}}</a>
      <img v-bind:src="person.img" />
    </div>
    <div class="content">
      <div class="header">{{person.name}}</div>
<!--       <div class="meta">
        <a>農委會林務局</a>
      </div> -->
      <div class="description">{{person.dep}}
      </div>
    </div>
    <div class="extra content">
      <span>
        <i class="time icon"></i>
        2017-11-12 13:42
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
  <input type="text" placeholder="顯示標籤" v-model="person.title">
  <label>姓名</label>
  <input type="text" placeholder="請填寫姓名" v-model="person.name">
  <label>單位</label>
  <input type="text" placeholder="請填寫單位" v-model="person.dep">
    </div>
      </div>
      <div class="ui divider"></div>
      <div class="ui primary button" @click="saveperson">儲存</div>
      <div class="ui button" @click="toggle">取消</div>
    </div>
    <!-- <div class="ui bottom attached primary button" @click="toggle" v-else>
      <i class="add icon"></i>
      新增利害關係人
    </div> -->
    <button class="ui primary button" @click="toggle" v-else><i class="add icon"></i>新增利害關係人</button>
  </div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="policies">
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

.ui.card>.image, .ui.cards>.card>.image {
  background-color: white
}

.ui.card>.image:not(.ui)>img, .ui.cards>.card>.image:not(.ui)>img {
  border-radius: 50%; 
  width: 15em;
  margin: auto;
  margin-bottom: 1em;
}

.ui.teal.label {
  margin-left:1em;
  margin-top:1em;
}

.ui.card>.extra a:not(.ui), .ui.cards>.card>.extra a:not(.ui) {
  color:blue
}

.ui.card>.button, .ui.card>.buttons, .ui.cards>.card>.button, .ui.cards>.card>.buttons {
  margin:auto;
  width:15em;
}

.ui.multiple.dropdown>.ui.label {
  background: lightseagreen;
  color:white;
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
import axios from 'axios'
export default {
  name: 'issue',
  data() {
    return {
      show: false,
      threads: {
        description: '',
        people: [],
        question: '',
      },
      /* people: {
        title: '',
        name: '',
        department: '',
      } */
      people: [],
      person: {
        title: '',
        name: '',
        dep: ''
      }
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    saveperson: function() {
       $.ajax({
        url: "https://ethercalc.org/_/622t4v2804sk",
        type: 'POST',
        dataType: 'application/json',
        contentType: 'text/csv',
        processData: false,
        data: 'people' + ',' + 'https://semantic-ui.com/images/avatar/large/elliot.jpg' + ',' + this.person.title + ',' + this.person.name + ',' + this.person.dep,
        success: function (data) {
          location.reload()
        },
      })
    }
  },
  created: function () {
    axios.get('https://ethercalc.org/622t4v2804sk.csv.json').then(res => {
      res.data.map(person => {
        if (person[0] == 'people') {
          let data = {}
          data.img = person[1]
          data.title = person[2]
          data.name = person[3]
          data.dep = person[4]
          data.time = '2017-10-10 13:42'
          this.people.push(data)
        }
      })
    })
  }
}
</script>

