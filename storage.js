const names = document.getElementById('name');
const emails = document.getElementById('email');
const messages = document.getElementById('message');

function content() {
  const setContent = JSON.parse(JSON.stringify(localStorage.getItem('formContent')));
  const newObj = JSON.parse(setContent);

  document.getElementById('name').value = newObj.names;
  document.getElementById('email').value = newObj.emails;
  document.getElementById('message').value = newObj.messages;
}

function storage() {
  const formObj = {
    names: document.getElementById('name').value,
    emails: document.getElementById('email').value,
    messages: document.getElementById('message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(formObj));

  content();
}

if (!localStorage.getItem('formContent')) {
  storage();
} else {
  content();
}

names.onchange = storage;
emails.onchange = storage;
messages.onchange = storage;