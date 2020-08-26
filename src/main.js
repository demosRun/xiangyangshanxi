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
  setTimeout(() => {
    owo.go('page1')
  }, 500);
}, true);


autoScale({
  // 璁捐瀹藉害
  deviseW: 750,
  type: 'rollH5',
  box: '.scale-box'
})