function openMenu() {
  const btnNav = document.querySelector("#burger-menu");
  const menu = document.querySelector(".navbar__menu ul");

  // let menuItems =

  btnNav.addEventListener("click", () => {
    btnNav.classList.toggle("open__menu");
    menu.classList.toggle("open");
  });
}
openMenu();
