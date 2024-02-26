const hiddenMenu = document.getElementById("hamburger-menu")
const menuItems = document.getElementById("menu-items")
const closeX = document.getElementById("close-x")

hiddenMenu.addEventListener('click', () => {
  menuItems.classList.remove("d-none")
  menuItems.classList.add("d-flex")
  hiddenMenu.classList.add("d-none")

  function hideMenuOnClickOutside() {
    document.body.addEventListener('click', (event) => {
      const clickedElement = event.target;
      if (!menuItems.contains(clickedElement) && clickedElement !== hiddenMenu) {
        menuItems.classList.add("d-none")
        menuItems.classList.remove("d-flex")
        hiddenMenu.classList.remove("d-none")
        document.body.removeEventListener('click', hideMenuOnClickOutside)
      }
    })
  }

  hideMenuOnClickOutside()
})

closeX.addEventListener('click', () => {
  menuItems.classList.add("d-none")
  menuItems.classList.remove("d-flex")
  hiddenMenu.classList.remove("d-none")
})

const menuLinks = menuItems.querySelectorAll('a')
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuItems.classList.add("d-none")
    menuItems.classList.remove("d-flex")
    hiddenMenu.classList.remove("d-none")
  })
})