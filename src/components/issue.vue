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
        <textarea placeholder="請輸入問題描述" v-model="threads.description" ></textarea>
      </div>
      <div class="field">
              <label>關聯利害關係人</label>
              <select class="ui fluid search dropdown" multiple="" v-model="threads.people">
  <option value="">關聯利害關係人</option>
  <option v-for="person in people" v-bind:value="person.title">{{person.title}}</option>
              </select>
      </div>
      <div class="field">
        <label>關聯問題</label>
        <select class="ui search dropdown" v-model="threads.question">
  <option value="">關連問題到</option>
  <option v-for="question in questions" v-bind:value="question">{{question}}</option>
  <option value="新增解法">+ 新增解法</option>
 <!--  <option value="1">劃分區域</option>
  <option value="2">攜帶寵物證明</option>
  <option value="0">+ 新增解法</option> -->
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
      <div class="ui primary button" @click="postthreads">儲存</div>
      <div class="ui button">取消</div>
  </div>
</div>
<div class="ui bottom attached tab segment" data-tab="people">
  <h1 class="ui large header">釐清利害關係人</h1>
  <div class="ui divider"></div>
  <div class="ui cards">
    <div class="card" v-for="person in people" key:person.name>
    
    <div class="image">
        <span class="right floated">
       <a @click="deleteperson(person.id)"> <i class="close icon red"></i></a>
      </span>
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
       <a @click="editcard(person.id);">修改</a>
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
      <div class="ui primary button" @click="saveperson();toggle2()">儲存</div>
      <div class="ui button" @click="toggle">取消</div>
    </div>
    <!-- <div class="ui bottom attached primary button" @click="toggle" v-else>
      <i class="add icon"></i>
      新增利害關係人
    </div> -->
    <button class="ui primary button" @click="toggle" v-else><i class="add icon"></i>新增利害關係人</button>
  </div>
  </div>


<!-- edit card -->
<div class="ui basic modal" style="width:auto;" id="editcard">
  <i class="close icon"></i>
  <div class="header">
    修改利害關係人
  </div>
   <div class="ui cards">
<div class="card">
    <div class="content" >
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
      <div class="ui primary button" @click="saveperson();">儲存</div>
    </div>

  </div>
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
import done from './modals/done'
export default {
  name: 'issue',
  components: {
    done,
  },
  data() {
    return {
      show: false,
      threads: {
        description: '',
        people: [],
        question: '',
      },
      people: [],
      person: {
        id:'',
        img: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
        title: '',
        name: '',
        dep: ''
      },
      selectedpeople: [],
      questions: [],
      selectedquestion: '',
      id: ''
    }
  },
  methods: {
    toggle: function() {

            this.show = !this.show;
            this.person.id = '';
            this.person.img = 'https://semantic-ui.com/images/avatar/large/elliot.jpg';
            this.person.name = '';
            this.person.title = '';
            this.person.dep = '';


            
     
    },
    toggle2: function() {
       this.show = !this.show;
      
    },
    saveperson:async function() {
      //  $.ajax({
      //   url: "https://ethercalc.org/_/622t4v2804sk",
      //   type: 'POST',
      //   dataType: 'application/json',
      //   contentType: 'text/csv',
      //   processData: false,
      //   data: this.id + ',people' + ',' + this.person.img + ',' + this.person.title + ',' + this.person.name + ',' + this.person.dep,
      // }).then(this.people.push(this.person)).then((this.person = {}))

      if(this.person.id == '')
      {//create
        this.person.id= await CreateData(clsFunction.people,[ this.person.img,this.person.title ,this.person.name,this.person.dep]);

        this.people.push(this.person);

      }
      else
      {//update
        UpdateData(this.person.id,[ this.person.img,this.person.title ,this.person.name,this.person.dep]);
        this.getdata();
        $('#editcard').modal('hide');
      }

   
    },
    editcard:async function(personid) {

      $('#editcard').modal('show');
      var editperson= await ReadDataByID(personid);
      this.person.id = personid.toString();
      this.person.img = 'https://semantic-ui.com/images/avatar/large/elliot.jpg';
      this.person.name = editperson[4];
      this.person.title = editperson[3];
      this.person.dep = editperson[5];

    },
    deleteperson:function(personid)
    {
        var r = confirm("Are you sure to delete?");
        if (r == true) {
            DeleteData(personid);
            this.getdata();
        } else {
           
        }
    },
    getdata: function () {
      this.people = []
      axios.get('https://ethercalc.org/622t4v2804sk.csv.json').then(res => {            
        this.id = res.data.slice(-1)[0]
        res.data.map(question => {
          if (question[1] == 'question') {
            this.questions.push(question[2])
          }
        })
        res.data.map(person => {
          if (person[1] == 'people') {
            let data = {}
            data.id = person[0]
            data.img = person[2]
            data.title = person[3]
            data.name = person[4]
            data.dep = person[5]
            data.time = '2017-10-10 13:42'
            this.people.push(data)
          }
        })
      })
    },
    postthreads: function() {
      $.ajax({
        url: "https://ethercalc.org/_/622t4v2804sk",
        type: 'POST',
        dataType: 'application/json',
        contentType: 'text/csv',
        processData: false,
        data: parseInt(this.id) + ',threads,' + this.threads.description + ',"' + this.threads.people + '",' + this.threads.question
      }).then(this.qq());
    },
    qq: function () {
      $('#done').modal('show');
    }
  },
  watch: {
    people: function () {
      this.id = parseInt(this.id) + 1
    },
    threads: {
      handler: function () {},
      deep: true,
      countid: function () {
        this.id = parseInt(this.id) + 1
      }
    },
    /* selectedquestion: function() {
      console.log(this.threads)
    }, */
  },
  created: function () {
    this.getdata()
  }
}
</script>

