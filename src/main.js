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

document.body.addEventListener('keyup', function (e) {
  // console.log(e)
  switch (e.keyCode) {
    case 87:
      camera.position.z -= 1 * owo.script.page1.data.beishu
      break;
    case 65:
      camera.position.x -= 1 * owo.script.page1.data.beishu
      break;
    case 83:
      camera.position.z += 1 * owo.script.page1.data.beishu
      break;
    case 68:
      camera.position.x += 1 * owo.script.page1.data.beishu
      break;
    case 69:
      camera.rotation.y -= 0.1 * owo.script.page1.data.beishu
      break;
    case 81:
      camera.rotation.y += 0.1 * owo.script.page1.data.beishu
      break;
    case 107:
      camera.position.y += 1 * owo.script.page1.data.beishu
      break;
    case 109:
      camera.position.y -= 1 * owo.script.page1.data.beishu
      break;
    default:
      break;
  }
}, {passive: false})

autoScale({
  // 璁捐瀹藉害
  deviseW: 750,
  type: 'rollH5',
  box: '.scale-box'
})