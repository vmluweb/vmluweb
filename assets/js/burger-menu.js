// SELECTION DES ELEMENTS DANS LE DOM

const burgerMenu = document.querySelector("#burger-menu");
const overlay = document.querySelector("#menu");

// AJOUT EVENEMENT ONCLICK POUR OUVRIR ET FERMER LE BURGER MENU

burgerMenu.onclick = function () {
  this.classList.toggle("ferme");
  overlay.classList.toggle("overlay");
};
