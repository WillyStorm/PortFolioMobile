          // Mobile menu popup //  
const menubar = document.getElementById('menubar');
const hormenu = document.getElementById('hormenu');
const menuBtn = document.getElementById('open');
const link1 = document.querySelector('#allow');
const link2 = document.querySelector('#allow1');
const link3 = document.querySelector('#allow2');
const link4 = document.querySelector('#allow3');// in some reson couldn't use querySelectorAll

menubar.addEventListener('click', () => {
  let image = menuBtn;
  if (image.src.match("./images/menu.png")) {
    image.src = "./images/close.png";
    document.querySelector('.scrollable').addEventListener('wheel', preventScroll, {passive: false});
    hormenu.classList.add('show');
  }
  else {
      image.src = "./images/menu.png";
      document.querySelector('.scrollable').removeEventListener('wheel', preventScroll, {passive: false});
      hormenu.classList.remove('show');  
  }
});

function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function close(){
  hormenu.classList.remove('show');
  let image = menuBtn;
  image.src = "./images/menu.png";
  document.querySelector('.scrollable').removeEventListener('wheel', preventScroll, {passive: false});  
};

link1.addEventListener ('click', close);
link2.addEventListener ('click', close);
link3.addEventListener ('click', close);
link4.addEventListener ('click', close);
