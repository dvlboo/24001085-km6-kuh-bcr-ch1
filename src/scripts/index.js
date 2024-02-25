const hiddenMenu = document.getElementById("hamburger-menu")
const menuItems = document.getElementById("menu-items")
const closeX = document.getElementById ("close-x")

hiddenMenu.addEventListener('click', () => {
  menuItems.classList.remove("d-none")
  menuItems.classList.add("d-flex")
  hiddenMenu.classList.add("d-none")
})

closeX.addEventListener('click', () => {
  menuItems.classList.add("d-none")
  menuItems.classList.remove("d-flex")
  hiddenMenu.classList.remove("d-none")
})