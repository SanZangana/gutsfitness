const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const nbLink = document.getElementsByClassName('nb-link')[0]

toggleMenu.addEventListener('click', () => {
  nbLink.classList.toggle('active')
})