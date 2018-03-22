<template>
<div class="ui modal" id="done">
  <i class="close icon"></i>
  <div class="header">
新增成功
  </div>
  <div class="content">
  </div>
  <div class="actions">
<!--     <div class="ui button">Cancel</div> -->
    <div class="ui primary button" @click="done">確定</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'done',
  methods: {
    done: function() {
      location.reload()
    }
  }
}
</script>

<style>

</style>
