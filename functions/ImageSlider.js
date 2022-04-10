let i = 0

function imageSlider() {
  if (i === 0) {
    i++
    document.getElementById('firstImg').style.transform =
      'translateX(100%) scale(1.25)'
    document.getElementById('secondImg').style.transform =
      'translateX(50%) scale(1)'
    document.getElementById('thirdImg').style.transform =
      'translateX(-150%) scale(1)'
    document.getElementById('firstImg').style.zIndex = '10'
    document.getElementById('secondImg').style.zIndex = '0'
    document.getElementById('thirdImg').style.zIndex = '0'
  } else if (i === 1) {
    i++
    document.getElementById('firstImg').style.transform =
      'translateX(150%) scale(1)'
    document.getElementById('secondImg').style.transform =
      'translateX(-50%) scale(1)'
    document.getElementById('thirdImg').style.transform =
      'translateX(-100%) scale(1.25)'
    document.getElementById('firstImg').style.zIndex = '0'
    document.getElementById('secondImg').style.zIndex = '0'
    document.getElementById('thirdImg').style.zIndex = '10'
  } else {
    i = 0
    document.getElementById('firstImg').style.transform =
      'translateX(50%) scale(1)'
    document.getElementById('secondImg').style.transform =
      'translateX(0) scale(1.25)'
    document.getElementById('thirdImg').style.transform =
      'translateX(-50%) scale(1)'
    document.getElementById('firstImg').style.zIndex = '0'
    document.getElementById('secondImg').style.zIndex = '10'
    document.getElementById('thirdImg').style.zIndex = '0'
  }
  console.log(i)
}

export default imageSlider
