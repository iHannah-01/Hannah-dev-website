<button onclick="location.href='about.html'"> here</button>
function websiteloading() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        location.href="/index-mobile.html";
      }else{
        // false for not mobile device
        location.href="/index.html"
      }
    }

  

