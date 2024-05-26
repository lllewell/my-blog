const usernameInput = document.querySelector('#uname');
const blogTitleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content-box');
const submitButton = document.querySelector('.submit');
const toggleButton = document.querySelector('#toggle');
const htmlEl = document.querySelector('html');


const setTheme = function () {
  htmlEl.dataset.theme = localStorage.getItem('theme');
}

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
};

toggleButton.addEventListener('click', function (event) {

  event.preventDefault();

  if (htmlEl.dataset.theme === 'dark') {
    htmlEl.dataset.theme = 'light';
  } else {
    htmlEl.dataset.theme = 'dark';
  }
  localStorage.setItem('theme', htmlEl.dataset.theme);
}
);

const info = localStorage.getItem('data');

function storeData() {
  const data = JSON.parse(localStorage.getItem('data')) || [];

  const dataInput = {
    username: usernameInput.value.trim(),
    title: blogTitleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  data.push(dataInput);

  localStorage.setItem('data', JSON.stringify(data));

  setTimeout(function() {
    location.assign('./blog.html');
  }, 250);

}


submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Display message doesn't do anything
  if (usernameInput === '' || blogTitleInput === '' || contentInput === '') {
    return displayMessage('error', 'Please complete the form');
  } else {
    storeData();
  }

 
});

