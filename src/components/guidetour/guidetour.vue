<template>
    <div id="guidetour" v-bind:value="context">
        {{context}}
        <div id="tour-button">
            <button class="ui button" v-bind:value="leftButton">{{leftButton}}</button>
            <button class="ui button primary" v-bind:value="rightButton">{{rightButton}}</button>
      </div>
    </div>
</template>
<style>
  .guidetour {
      position: absolute;
      padding: 5%;
      z-index: 999;
      background-color: rgba(239, 242, 247, 0.85);
      width: 100%;
      height: 100%;
  }
  </style>



<script>
  export default {
    name: 'guidetour',
    data () {
      return {
        context: 'aaaa',
        leftButton:"取消",
        rightButton:"繼續",
        showGuideTour: false,
        index: 0,
        steps: [
          {
            target: '#hackmd',
            content: `<h1>這裡是您的空白筆記本</h1><p>111111111在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫
            ，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內</p>`
          },
          {
            target: '#content',
            content: `<h1>這裡是您的議題分析區</h1><p>111111111在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫
            ，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內</p>`
          },
          {
            target: '#app',
            content:  `<h1>準備好了嗎？旅程愉快</h1><p>111111111在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆</p>`
          }
        ]
      }
    },
    mounted: function (){

    },
    start: function() {
      this.data().showGuideTour = true;
      var index = this.data().index;
      index =1;
      var steps = this.data().steps;
      var target = steps[index].target;
      var content = steps[index].content;
      content = '<div id="guidetour">'+content+'</div>'
      let targetElement = document.querySelector(target)
      $(targetElement).prepend(content);

      this.context = content;
      console.log(targetElement);
      this.leftButton = '111';
      // self.template =
/*
     alert('cancel');
     this.data().index = 0;
     $( "tour-view" ).remove();
     */
   },
   cancelTour: function() {


   },
   nextTour:function() {

   }
}


</script>
