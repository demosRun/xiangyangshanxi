function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

autoScale({
  // 璁捐瀹藉害
  deviseW: 750,
  // 璁捐楂樺害
  deviseH: 1508,
  // 璁捐瀹藉害PC
  devisePCW: 1920,
  // 璁捐楂樺害PC
  devisePCH: 1080,
  type: 'rotate',
  box: '.rotate-box'
})

var v = document.getElementsByTagName("video")[0];
v.addEventListener("canplay", function() {
  document.getElementsByClassName('enter')[0].style.display = 'block'
}, true);
var isAutoPlayEnd = false
v.addEventListener("timeupdate", (event) => {
  console.log(event.target.currentTime)
  if (isAutoPlayEnd) return
  
  if (event.target.currentTime > 13) {
    isAutoPlayEnd = true
    v.pause()
    document.getElementsByClassName('start-button')[0].style.display = 'block'
    setTimeout(() => {
      document.getElementsByClassName('start-button')[0].style.opacity = 1
    }, 100);
  }
})


autoScale({
  // 璁捐瀹藉害
  deviseW: 750,
  type: 'rollH5',
  box: '.scale-box'
})

var vidSources = [
  "@|video.mp4|"
];

function loadVideo (element, index) {
  setTimeout(function () {
    v.src = element;
    v.play()
    setTimeout(function () {
      v.pause()
    }, 200);
  }, 1000 * index);
}