webpackJsonp([1],{"8JtP":function(t,e,s){t.exports=s.p+"static/img/PDIS.c916e92.png"},CJ2o:function(t,e){},"Fv+1":function(t,e){},"K+ID":function(t,e){},LO7A:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui large borderless fluid menu"},[a("a",{staticClass:"header item",attrs:{href:""}},[a("img",{staticClass:"logo",attrs:{src:s("8JtP"),alt:""}}),t._v(" 議題分析表\n    ")]),t._v(" "),a("div",{staticClass:"right menu"},[a("div",{staticClass:"item"},[a("div",{staticClass:"ui small input"},[a("input",{attrs:{placeholder:"關鍵字搜尋"}})])]),t._v(" "),a("div",{staticClass:"item"},[a("i",{staticClass:"cog icon"})])])])}]};var n=s("VU/8")({name:"header"},i,!1,function(t){s("Fv+1")},null,null).exports,l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui inverted vertical footer segment"},[s("div",{staticClass:"ui center aligned container"},[s("div",{staticClass:"ui stackable inverted divided grid"},[s("div",{staticClass:"three wide column"},[s("h4",{staticClass:"ui inverted header"},[t._v("Group 1")]),t._v(" "),s("div",{staticClass:"ui inverted link list"},[s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),s("div",{staticClass:"three wide column"},[s("h4",{staticClass:"ui inverted header"},[t._v("Group 2")]),t._v(" "),s("div",{staticClass:"ui inverted link list"},[s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),s("div",{staticClass:"three wide column"},[s("h4",{staticClass:"ui inverted header"},[t._v("Group 3")]),t._v(" "),s("div",{staticClass:"ui inverted link list"},[s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link One")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Two")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Three")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Link Four")])])]),t._v(" "),s("div",{staticClass:"seven wide column"},[s("h4",{staticClass:"ui inverted header"},[t._v("Footer Header")]),t._v(" "),s("p",[t._v("Extra space for a call to action inside the footer that could help re-engage users.")])])]),t._v(" "),s("div",{staticClass:"ui inverted section divider"}),t._v(" "),s("img",{staticClass:"ui centered mini image",attrs:{src:"assets/images/logo.png"}}),t._v(" "),s("div",{staticClass:"ui horizontal inverted small divided link list"},[s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Site Map")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Contact Us")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Terms and Conditions")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"#"}},[t._v("Privacy Policy")])])])])}]};var c=s("VU/8")({name:"footer"},l,!1,function(t){s("UiZt")},null,null).exports,r=s("mtWM"),d=s.n(r),v=(s("pvO8"),{name:"addfile",data:function(){return{file:{name:"",address:""}}},methods:{addfile:function(){$.ajax({url:"https://ethercalc.org/_/622t4v2804sk",type:"POST",dataType:"application/json",contentType:"text/csv",processData:!1,data:"menu,"+this.file.name+","+this.file.address})}}}),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui modal",attrs:{id:"addfile"}},[s("i",{staticClass:"close icon"}),t._v(" "),s("div",{staticClass:"header"},[t._v("\n新增議題相關文件\n  ")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("檔案名稱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.file.name,expression:"file.name"}],attrs:{type:"text",placeholder:"檔案名稱"},domProps:{value:t.file.name},on:{input:function(e){e.target.composing||t.$set(t.file,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v("檔案網址")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.file.address,expression:"file.address"}],attrs:{type:"text",placeholder:"檔案網址"},domProps:{value:t.file.address},on:{input:function(e){e.target.composing||t.$set(t.file,"address",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"ui primary button",attrs:{id:"ok"},on:{click:t.addfile}},[t._v("新增")])])])},staticRenderFns:[]},u=s("VU/8")(v,o,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui modal",attrs:{id:"step1"}},[s("div",{staticClass:"header"},[t._v("這裡是您的空白筆記本")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v("在空白筆記本可以隨意書寫，哥在方地方童笑廠出教，義常運我線下之系賽個三來育同，在間手口我證人民時心我家信：強方是子爭義上管書位接經溫我食其列。我間來同單為麼不以後創的積雖死我是著，個由果，我小新工，年球大體精呢今感神格響的？新西的邊他美開行南分樂；師兩的環魚道被。為有會離。書外們車法多了自書結的過。會物行自，境場西。去孩行出圖中南我們用市後德火錢小用不紀口重施，己叫明家又待？最兩無。管必色第清想教麼當算國境陽了特突後不了意每生山回了世的，跑印生以、輪那子以光快童文表愛……種人而，無候合議熱，音技如、小老方單表充點過了是有孩力分家。")])]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"ui positive approve button"},[t._v("繼續")]),t._v(" "),s("div",{staticClass:"ui negative cancel button"},[t._v("取消")])])])}]};var m=s("VU/8")({name:"step1"},_,!1,function(t){s("CJ2o")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui modal",attrs:{id:"step2"}},[s("div",{staticClass:"header"},[t._v("這裡是您的空白筆記本")]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v("在空白筆記本可以隨意書寫，哥在方地方童笑廠出教，義常運我線下之系賽個三來育同，在間手口我證人民時心我家信：強方是子爭義上管書位接經溫我食其列。我間來同單為麼不以後創的積雖死我是著，個由果，我小新工，年球大體精呢今感神格響的？新西的邊他美開行南分樂；師兩的環魚道被。為有會離。書外們車法多了自書結的過。會物行自，境場西。去孩行出圖中南我們用市後德火錢小用不紀口重施，己叫明家又待？最兩無。管必色第清想教麼當算國境陽了特突後不了意每生山回了世的，跑印生以、輪那子以光快童文表愛……種人而，無候合議熱，音技如、小老方單表充點過了是有孩力分家。")])]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"ui positive approve button"},[t._v("繼續")]),t._v(" "),s("div",{staticClass:"ui negative cancel button"},[t._v("取消")])])])}]};var h=s("VU/8")({name:"step2"},p,!1,function(t){s("oGT2")},null,null).exports;$(document).ready(function(){$(".ui.menu .ui.dropdown").dropdown({on:"hover"}),$(".ui.menu a.item").on("click",function(){$(this).addClass("active").siblings().removeClass("active")}),$(".ui.accordion").accordion(),$(".trigger.example .accordion").accordion({selector:{trigger:".title .icon"}}),$("#add").click(function(){$("#addfile").modal("show")}),$("#ok").click(function(){$(".ui.modal").modal("hide")})}),s("iq7p");var C={name:"sidebar",components:{addfile:u,step1:m,step2:h},data:function(){return{files:[]}},methods:{addfile:function(t,e){d.a.post("https://ethercalc.org/_/6cg3pkwwprdq",{filename:t,fileaddress:e}).then()},guidetour:function(){$("#step1").modal("setting","closable",!1).modal("show")},updateComponent:function(){this.$forceUpdate(),console.log("test")}},created:function(){var t=this;d.a.get("https://ethercalc.org/622t4v2804sk.csv.json").then(function(e){e.data.map(function(e){if("menu"==e[0]){var s={};s.name=e[1],s.address=e[2],t.files.push(s)}})})}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"two wide column",attrs:{id:"sidebar"}},[s("div",{staticClass:"ui accordion"},[t._m(0),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"ui middle aligned animated relaxed list"},[t._l(t.files,function(e){return s("div",{staticClass:"item"},[s("i",{staticClass:"file pdf outline icon"}),s("div",{staticClass:"content"},[s("a",{attrs:{href:e.address,target:"_blank"}},[t._v(t._s(e.name))])])])}),t._v(" "),t._m(1)],2)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"ui middle aligned animated relaxed list"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"map icon"}),s("div",{staticClass:"content",on:{click:t.guidetour}},[t._v("導覽模式")])])])])]),t._v(" "),s("addfile"),t._v(" "),s("step1"),t._v(" "),s("step2")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("i",{staticClass:"dropdown icon"}),e("i",{staticClass:"folder icon"}),this._v("\n        議題相關文件\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("i",{staticClass:"plus icon"}),e("div",{staticClass:"content",attrs:{id:"add"}},[this._v("新增議題相關文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("i",{staticClass:"dropdown icon"}),e("i",{staticClass:"info icon"}),this._v("議題相關資訊")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"ui middle aligned animated relaxed list"},[s("div",{staticClass:"item"},[s("i",{staticClass:"talk icon"}),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v("提案名稱")]),s("div",{staticClass:"description"},[t._v("特定寵物進入國家森林公園、樂園")])])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"user icon"}),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v("提案人")]),s("div",{staticClass:"description"},[t._v("米爸")])])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"hand pointer icon"}),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v("附議人數")]),s("div",{staticClass:"description"},[t._v("5110")])])]),t._v(" "),s("div",{staticClass:"item"},[s("i",{staticClass:"home icon"}),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v("主協辦部會")]),s("div",{staticClass:"description"},[t._v("農委會、衛福部、內政部")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("i",{staticClass:"dropdown icon"}),e("i",{staticClass:"setting icon"}),this._v("選項")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("i",{staticClass:"smile icon"}),e("div",{staticClass:"content"},[this._v("歡迎頁面")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("i",{staticClass:"book icon"}),e("div",{staticClass:"content"},[this._v("使用手冊")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("i",{staticClass:"question circle icon"}),e("div",{staticClass:"content"},[this._v("常見問題")])])}]};var g=s("VU/8")(C,f,!1,function(t){s("LO7A")},"data-v-295b91ed",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"seven wide column",attrs:{id:"hackmd"}},[e("iframe",{attrs:{width:"100%",height:"1000px",src:"https://docs.google.com/document/d/11dIysfzF9maXs9Yq04D-ksbQPHWnDovh_sBVu1NdZrM/edit?usp=sharing",frameborder:"0"}})])}]};var x=s("VU/8")({name:"hackmd"},b,!1,function(t){s("cl0G")},null,null).exports;$(function(){$(".menu .item").tab(),$(".ui.dropdown").dropdown()});var k={name:"issue",data:function(){return{show:!1,threads:{description:"",people:[],question:""},people:[]}},methods:{toggle:function(){this.show=!this.show},savepeople:function(){$.ajax({url:"https://ethercalc.org/_/622t4v2804sk",type:"POST",dataType:"application/json",contentType:"text/csv",processData:!1,data:"people,"+this.people.title+","+this.people.name+","+this.people.department}),console.log("people,"+this.people.title+","+this.people.name+","+this.people.department)}},created:function(){var t=this;d.a.get("https://ethercalc.org/622t4v2804sk.csv.json").then(function(e){e.data.map(function(e){if("people"==e[0]){var s={};s.img=e[1],s.title=e[2],s.name=e[3],s.dep=e[4],s.time="2017-10-10 13:42",t.people.push(s)}})})}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"seven wide column",attrs:{id:"content"}},[t._m(0),t._v(" "),s("div",{staticClass:"ui bottom attached active tab segment",attrs:{"data-tab":"threads"}},[s("h1",{staticClass:"ui large header"},[t._v("釐清議題脈絡")]),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("問題描述")]),t._v(" "),s("textarea",t._b({attrs:{placeholder:"請輸入問題描述"}},"textarea",this.threads.description,!1))]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui primary button"},[t._v("儲存")]),t._v(" "),s("div",{staticClass:"ui button"},[t._v("取消")])])]),t._v(" "),s("div",{staticClass:"ui bottom attached tab segment",attrs:{"data-tab":"people"}},[s("h1",{staticClass:"ui large header"},[t._v("釐清利害關係人")]),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui cards"},[t._l(t.people,function(e){return s("div",{staticClass:"card"},[s("div",{staticClass:"image"},[s("a",{staticClass:"ui teal label"},[t._v(t._s(e.title))]),t._v(" "),s("img",{attrs:{src:e.img}})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(e.dep)+"\n      ")])]),t._v(" "),t._m(4,!0)])}),t._v(" "),s("div",{staticClass:"card"},[t.show?s("div",{staticClass:"content"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("標籤")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.people.title,expression:"people.title"}],attrs:{type:"text",placeholder:"顯示標籤"},domProps:{value:t.people.title},on:{input:function(e){e.target.composing||t.$set(t.people,"title",e.target.value)}}}),t._v(" "),s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.people.name,expression:"people.name"}],attrs:{type:"text",placeholder:"請填寫姓名"},domProps:{value:t.people.name},on:{input:function(e){e.target.composing||t.$set(t.people,"name",e.target.value)}}}),t._v(" "),s("label",[t._v("單位")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.people.department,expression:"people.department"}],attrs:{type:"text",placeholder:"請填寫單位"},domProps:{value:t.people.department},on:{input:function(e){e.target.composing||t.$set(t.people,"department",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui primary button",on:{click:t.savepeople}},[t._v("儲存")]),t._v(" "),s("div",{staticClass:"ui button",on:{click:t.toggle}},[t._v("取消")])]):s("button",{staticClass:"ui primary button",on:{click:t.toggle}},[s("i",{staticClass:"add icon"}),t._v("新增利害關係人")])])],2)]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui top attached tabular menu"},[s("a",{staticClass:"active item",attrs:{"data-tab":"threads"}},[t._v("釐清議題脈絡")]),t._v(" "),s("a",{staticClass:"item",attrs:{"data-tab":"people"}},[t._v("釐清利害關係人")]),t._v(" "),s("a",{staticClass:"item",attrs:{"data-tab":"policies"}},[t._v("釐清政策與策略")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",[t._v("關聯利害關係人")]),t._v(" "),s("div",{staticClass:"ui fluid multiple search selection dropdown"},[s("input",{attrs:{type:"hidden",name:"country"}}),t._v(" "),s("i",{staticClass:"dropdown icon"}),t._v(" "),s("div",{staticClass:"default text"},[t._v("關聯利害關係人")]),t._v(" "),s("div",{staticClass:"menu"},[s("div",{staticClass:"item",attrs:{"data-value":"af"}},[t._v("提案人")]),t._v(" "),s("div",{staticClass:"item",attrs:{"data-value":"ax"}},[t._v("林務局")]),t._v(" "),s("div",{staticClass:"item",attrs:{"data-value":"al"}},[t._v("內政部")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",[t._v("關聯問題")]),t._v(" "),s("select",{staticClass:"ui search dropdown"},[s("option",{attrs:{value:""}},[t._v("關連問題到")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("劃分區域")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("攜帶寵物證明")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("+ 新增解法")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inline field"},[s("label",[t._v("描述其他問題")]),t._v(" "),s("a",[t._v("+新增問題描述")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"extra content"},[s("span",[s("i",{staticClass:"time icon"}),t._v("\n        2017-11-12 13:42\n      ")]),t._v(" "),s("span",{staticClass:"right floated"},[s("a",[t._v("修改")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui bottom attached tab segment",attrs:{"data-tab":"policies"}},[s("h1",{staticClass:"ui large header"},[t._v("釐清政策與策略")]),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v("政策與策略")]),t._v(" "),s("input",{attrs:{type:"text",placeholder:"標題"}})]),t._v(" "),s("div",{staticClass:"ui top attached tabular menu"},[s("a",{staticClass:"active item",attrs:{"data-tab":"1"}},[t._v("現有規劃")]),t._v(" "),s("a",{staticClass:"item",attrs:{"data-tab":"2"}},[t._v("未來規劃")]),t._v(" "),s("a",{staticClass:"item",attrs:{"data-tab":"3"}},[t._v("資源")])]),t._v(" "),s("div",{staticClass:"ui bottom attached active tab segment",attrs:{"data-tab":"1"}},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("textarea",{attrs:{name:"",placeholder:"請摘要主辦機關已經做過的事"}})]),t._v(" "),s("div",{staticClass:"field"},[s("textarea",{attrs:{name:"",placeholder:"請摘要已面臨到的困難"}})]),t._v(" "),s("div",{staticClass:"field"},[s("input",{attrs:{type:"text",placeholder:"相關佐證資料或依據"}})])])]),t._v(" "),s("div",{staticClass:"ui bottom attached tab segment",attrs:{"data-tab":"2"}},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("textarea",{attrs:{name:"",placeholder:"請摘要主辦權責機關未來預計做的方向或內容"}})]),t._v(" "),s("div",{staticClass:"field"},[s("textarea",{attrs:{name:"",placeholder:"請簡述未來可能會遇到的困難"}})]),t._v(" "),s("div",{staticClass:"field"},[s("input",{attrs:{type:"text",placeholder:"相關佐證資料或依據"}})])])]),t._v(" "),s("div",{staticClass:"ui bottom attached tab segment",attrs:{"data-tab":"3"}},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("textarea",{attrs:{name:"",placeholder:"已有的資源"}})]),t._v(" "),s("div",{staticClass:"field"},[s("input",{attrs:{type:"text",placeholder:"相關佐證資料或依據"}})])])])]),t._v(" "),s("div",{staticClass:"inline field"},[s("label",[t._v("描述其他政策與策略")]),t._v(" "),s("a",[t._v("+新增政策與策略")])]),t._v(" "),s("div",{staticClass:"ui divider"}),t._v(" "),s("div",{staticClass:"ui primary button"},[t._v("儲存")]),t._v(" "),s("div",{staticClass:"ui button"},[t._v("取消")])])}]};var E={name:"App",components:{"v-header":n,"v-footer":c,sidebar:g,hackmd:x,issue:s("VU/8")(k,w,!1,function(t){s("mOGm")},"data-v-246c96ce",null).exports}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-header"),t._v(" "),s("div",{staticClass:"ui celled resizable grid"},[s("div",{staticClass:"row"},[s("sidebar"),t._v(" "),s("hackmd"),t._v(" "),s("issue")],1)])],1)},staticRenderFns:[]};var F=s("VU/8")(E,y,!1,function(t){s("K+ID")},null,null).exports,T=s("/ocq"),U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui form"},[s("div",{staticClass:"inline field"},[s("label",[t._v("提案人")]),t._v(" "),s("input",{attrs:{type:"text",name:"name",placeholder:"姓名"}})]),t._v(" "),s("div",{staticClass:"inline field"},[s("label",[t._v("提案內容")]),t._v(" "),s("textarea")]),t._v(" "),s("div",{staticClass:"inline field"},[s("label",[t._v("問題分析")]),t._v(" "),s("input",{attrs:{type:"text",name:"name",placeholder:"問題分析"}})])])}]},L=s("VU/8")({name:"index",data:function(){return{msg:"Welcome to Your Vue.js App"}},created:function(){}},U,!1,null,null,null).exports,P=s("VU/8")(null,null,!1,null,null,null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ui container"},[this._v("12312313256")])},staticRenderFns:[]},O=s("VU/8")({name:"solution"},V,!1,null,null,null).exports;a.a.use(T.a);var R=new T.a({routes:[{path:"/",name:"index",component:L},{path:"/question",name:"question",component:P},{path:"/solution",name:"solution",component:O}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:R,components:{App:F},template:"<App/>"})},UiZt:function(t,e){},cl0G:function(t,e){},iq7p:function(t,e){},mOGm:function(t,e){},oGT2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cf32394ce094e857b3a4.js.map