routes = {
  '#': '.beranda',
  '#hai': '.hai'
}
after_router = setelah => {
  router = () => {
    location.hash == '' ? location.href = '#/' : ''
    document.querySelector('.tampil').innerHTML = document.querySelector(routes[location.hash.split('/')[0]]).innerHTML
    setelah != undefined ? setelah() : ''
  }
  router()
  window.addEventListener('hashchange', router)
}