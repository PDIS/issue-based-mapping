<template>
  <div class="ui modal" id="browserdetection">
 <i class="close icon"></i>
  <div class="content">
<h1 class="ui center aligned header">本網站不支援IE這種<span class="ui center aligned red tiny header"><s>拉機</s></span></h1>
<h2 class="ui center aligned header">您可以有更好的選擇</h2>
<!-- <h2 id="result" class="ui center aligned header">detecting…</h2> -->
<!-- <p id="details">n/a</p> -->
<div class="ui center aligned basic segment">
<a href="https://www.google.com.tw/chrome/index.html" class="ui small image">
  <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Chrome__logo.max-2800x2800.png">
</a>
<a href="https://www.mozilla.org/zh-TW/firefox/new/" class="ui small image">
  <img src="https://www.mozilla.org/media/img/logos/firefox/logo-quantum-high-res.cfd87a8f62ae.png">
</a>
<a href="https://www.apple.com/tw/safari/" class="ui small image">
  <img src="https://appletoolbox.com/wp-content/uploads/2015/10/safariLogo.png">
</a>
</div>
  </div>
  <div class="actions">
<!--     <div class="ui button">Cancel</div> -->
    <div class="ui primary button" @click="close">確定</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'browserdetection',
  methods: {
    close: function () {
      window.open('', '_self', ''); window.close();
    }
  },
  mounted: function() {
    
var version = detectIE();

if (version === false) {
  /* document.getElementById('result').innerHTML = '<s>IE/Edge</s>'; */
} else if (version >= 12) {
  //document.getElementById('result').innerHTML = 'Edge ' + version;
  $('#browserdetection').modal('setting', 'closable', false).modal('show');
} else {
  //document.getElementById('result').innerHTML = 'IE ' + version;
  $('#browserdetection').modal('setting', 'closable', false).modal('show');
}

// add details to debug result
//document.getElementById('details').innerHTML = window.navigator.userAgent;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
  }
}
</script>

<style>

</style>
