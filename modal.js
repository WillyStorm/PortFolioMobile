const modal = document.getElementById('projectDetails');

// Get the button that opens the modal
const btn = document.getElementById('details');
const btn1 = document.getElementById('details1');
const btn2 = document.getElementById('details2');
const btn3 = document.getElementById('details3');
const btn4 = document.getElementById('details4');
const btn5 = document.getElementById('details5');
const conts = document.getElementById('conts');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('closed')[0];

// When the user clicks on the button, open the modal
function open() {
  modal.style.display = 'block';
}

btn.addEventListener('click', open);
btn1.addEventListener('click', open);
btn2.addEventListener('click', open);
btn3.addEventListener('click', open);
btn4.addEventListener('click', open);
btn5.addEventListener('click', open);

// When the user clicks on <span> (x), close the modal
span.onclick = function close() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function display(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Project details JS to Html
const pdetails = {
  title: 'Project name goes here',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  text2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  btnText: ['See project', 'See source', 'Previous project', 'Next project'],
  slideshow: './images/slideshow.svg',
  languages: {
    lan1: 'HTML/CSS',
    lan2: 'Ruby on Rails',
    lan3: 'JavaScript',
  },
  live: 'https://willystorm.github.io/PortFolioMobile/',
  source: 'https://github.com/WillyStorm/PortFolioMobile.git',
  closeBtn: './images/close.png',
};

const pageModal = `

<span class="closed"><img class="closed" src="${pdetails.closeBtn}" alt="SlideShow"></span>
<h4 id="pdetails_title">${pdetails.title}</h4>
<ul class="flex" id="languages"></ul>
<div class="img-slideshow" id="img-slideshow">
<img src="${pdetails.slideshow}" alt="SlideShow" /></div>
<div class="sixty">
    <p id="text1">${pdetails.text1}</p>
    <p id="text2">${pdetails.text2}</p>
    <div class="flexfall">
        <button type="button" class="lower big-button center press reverse"><a href="${pdetails.live}" target="_blank"><span class="intro">${pdetails.btnText[0]}</span></a><img class="right" src="images/teal.png" alt="download"></button>
        <button type="button" class="lower big-button center press reversemb"><a href="${pdetails.source}" target="_blank"><span class="intro">${pdetails.btnText[1]}</span></a><img src="images/group.png" alt="download"></button>
    </div>
    <div class="flex between">
        <button type="button" class="inverse"><span><img src="images/lefty.png" alt="previous"></span>${pdetails.btnText[2]}</button>
        <button type="button" class="inverse end">${pdetails.btnText[3]}<span><img src="images/righty.png" alt="previous"></span></button>
    </div>
</div>
`;

conts.innerHTML += pageModal;

const languages = document.getElementById('languages');

const list = [];
const arrLang = [];
let count = 0;

const keys = Object.keys(pdetails.languages);
const values = Object.values(pdetails.languages);
for (let i = 0; i < keys.length; i += 1) {
  list[count] = document.createElement('li');
  list[count].className = 'big-button2 bcenter press';
  arrLang[count] = values[i];
  list[count].textContent = arrLang[count];
  languages.appendChild(list[count]);
  count += 1;
}
