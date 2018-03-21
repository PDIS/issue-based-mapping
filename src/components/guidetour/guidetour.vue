<!--
<template>
  <div>
    <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
    <div id="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
    <div id="v-step-2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>


  </div>
</template>
-->

<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

<script>



  export default {
    name: 'guidetour',
    data () {
      return {
        steps: [
          {
            target: '#hackmd',
            content: `111111111在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫
            ，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容`
          },
          {
            target: '#content',
            content: `2222222
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫
            ，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容`
          },
          {
            target: '#hackmd',
            content: `3333333
            錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫
            ，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，
            記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容在空白筆記本可以隨意書寫，記錄開會內容`
          }
        ]
      }
    },
    mounted: function (){

    },
    start: function() {
      var steps = this.data().steps;
      var step = steps[0].target;
      var content = ` <modal v-if="showModal" @close="showModal = false">`;

      //console.log(content);
     $(step).prepend(content);
       // for(var i=0;i<steps.length;i++) {
       //  var step = steps[0];
       //  $(step.target).modal('setting', 'closable', false).modal('show');
       // }

     //

    }
  }
</script>
