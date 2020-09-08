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

var step = 0

var v = document.getElementsByTagName("video")[0];

var isAutoPlayEnd = false
v.addEventListener("timeupdate", (event) => {
  const currentTime = event.target.currentTime
  if (currentTime > 20) {
    isAutoPlayEnd = false
  }
  if (isAutoPlayEnd) return
  console.log(currentTime)
  const infoBar = document.getElementsByClassName('info-bar')[0]
  if (currentTime > 13.5 && step < 1) {
    step++
    isAutoPlayEnd = true
    v.pause()
    document.getElementsByClassName('start-button')[0].style.display = 'block'
    setTimeout(() => {
      document.getElementsByClassName('start-button')[0].style.opacity = 1
    }, 100);
  }
  if (currentTime > 180 && step < 2) {
    step++
    isAutoPlayEnd = true
    v.pause()
    owo.script.page1.clear()
  }
})


autoScale({
  // 璁捐瀹藉害
  deviseW: 750,
  type: 'rollH5',
  box: '.scale-box'
})

var vidSources = [
  "../resource/video.mp4"
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