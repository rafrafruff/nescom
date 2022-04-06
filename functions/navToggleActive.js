function toggleActive() {
  document.getElementById('nav').classList.toggle('active')
  if (document.getElementById('nav').classList[1] === 'active') {
    document.getElementById('nav').style.display = 'block'
  } else {
    document.getElementById('nav').style.display = 'none'
  }
}

export default toggleActive
