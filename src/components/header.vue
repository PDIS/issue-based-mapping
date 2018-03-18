<template>
  <div class="ui large borderless fluid menu">
      <a href="" class="header item">
        <img src="../assets/PDIS.png" alt="" class="logo">&nbsp議題分析表
      </a>
      <!-- <div class="item">議題名稱：【還我七天假】行政院立即提案《國定假日法》，將國定假日恢復19天。</div>
      <div class="item">成案日期：2017-09-27</div>
      <div class="item">主/協辦部會：內政部</div> -->
      <div class="right menu">
        <div class="item">
          <div class="ui small icon input">
            <input placeholder="關鍵字搜尋" /><i class="search icon"></i>
          </div>
        </div>
        <div class="item">
                      <i class="cog icon"></i>
        </div>
        <!-- <a class="item">Dashboard</a><a class="item">Settings</a><a class="item">Profile</a><a class="item">Help</a> -->
      </div>
  </div>
</template>
<style>
/*   .ui.menu .item img.logo {
    margin-right: 1.5em;
  } */
  .ui.menu {
    margin: 0;
  }
  .ui.celled.grid {
    margin: 0;
  }
  .cog.icon {
    font-size: 1.5em;
  }
</style>

<script>
export default {
  name: 'header'
}
</script>

