<!--
<template>
  <div>
    <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
    <div id="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
    <div id="v-step-2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>


  </div>
</template>


<script>
  export default {
    name: 'guidetour',
    data () {
      return {
        steps: [
          {
            target: 'hackmd',
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: 'content',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '#v-step-2',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
    mounted: function (){
      alert("11");
    //  this.$tours['myTour'].start()
    }
  }
</script>
-->
