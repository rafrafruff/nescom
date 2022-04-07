function toggleActive() {
  document.getElementById('nav').classList.toggle('active')
  if (document.getElementById('nav').classList[1] === 'active') {
    document.getElementById('nav').style.transform = 'translateY(0)'
    document.getElementById('nav').style.opacity = '1'
  } else {
    document.getElementById('nav').style.transform = 'translateY(-100vh)'
    document.getElementById('nav').style.opacity = '0'
  }
}

export default toggleActive
