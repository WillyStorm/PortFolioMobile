const contactForm = document.getElementById('form');
const errorMessage = document.getElementById('message');
const errMsg = 'Message not sent! Please write using only the small letters';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  email.trim();
  if (email !== email.toLowerCase()) {
    errorMessage.textContent = errMsg;
  } else {
    contactForm.submit();
    localStorage.clear();
    contactForm.reset();
  }
});