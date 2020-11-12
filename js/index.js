function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {} else {
        document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yml66/live2d/css/live2d.css" /><div id="landlord"><div class="message" style="opacity:0"></div><canvas id="live2d" width="280" height="250" class="live2d"></canvas> <div class="hide-button"><font color="#FFFFFF">隐藏</font></div></div>');
        document.write('<script type="text/javascript"> var message_Path = 'https://cdn.jsdelivr.net/gh/yml66/live2d/'</script> ');
        document.write('<script type="text/javascript"> var home_Path = 'https://menglei.xyz/' </script>');
        document.write('<script data-pjax type="text/javascript" src="https://cdn.jsdelivr.net/gh/yml66/live2d/js/live2d.js"></script>');
        document.write('<script data-pjax type="text/javascript" src="https://cdn.jsdelivr.net/gh/yml66/live2d/js/message.js"></script>');
        document.write('<script type="text/javascript"> loadlive2d("live2d", "https://cdn.jsdelivr.net/gh/yml66/live2d/model/xiaoban/model.json"); </script> ');
    }
}
browserRedirect();
