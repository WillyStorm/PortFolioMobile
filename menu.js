          // Mobile menu popup //  
const menubar = document.getElementById('menubar');
const hormenu = document.getElementById('hormenu');
const menuBtn = document.getElementById('open');
const menuBtnClose = document.getElementById('close');

menubar.addEventListener('click', () => {
  hormenu.classList.toggle('show');
  let image = document.getElementById('open');
  if (image.src.match("./images/menu.png")) {
    image.src = "./images/close.png";
  }
  else {
      image.src = "./images/menu.png";
  }
});



