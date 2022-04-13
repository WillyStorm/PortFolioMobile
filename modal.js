const modal = document.getElementById("projectDetails");

// Get the button that opens the modal
const btn = document.getElementById("details");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("closed")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
} 


//Project details JS to Html
const pdetails = {
    title: 'Project name goes here',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    text2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    slideshow: './images/slideshow.svg',
    languages: {
    lan1: 'HTML/CSS',
    lan2: 'Ruby on Rails',
    lan3: 'JavaScript',
    },
};

const pdetailsTitle = document.getElementById('pdetails_title');
pdetailsTitle.textContent = pdetails.title;

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
};

const slideshow = document.getElementById('slideshow');
slideshow.innerHTML = `<img src="${pdetails.slideshow}" alt="slideshow">`;

const text1 = document.getElementById('text1');
text1.textContent = pdetails.text1;

const text2 = document.getElementById('text2');
text2.textContent = pdetails.text2;
