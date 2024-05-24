const usernameInput = document.querySelector('#uname');
const blogTitleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content-box');
const submitButton = document.querySelector('#button');
const toggleButton = document.querySelector('#mode');
const htmlEl = document.querySelector('html');


const setTheme = function () {
  htmlEl.dataset.theme = localStorage.getItem('theme');
}

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
};



const switchTheme = function () {
  if (htmlEl.dataset.theme === 'dark') {
    htmlEl.dataset.theme = 'light';
  } else {
    htmlEl.dataset.theme = 'dark';
  }
  localStorage.setItem('theme', htmlEl.dataset.theme);
};


const savedData = localStorage.getItem('dataInputs');

const dataInputs = JSON.parse(localStorage.getItem('savedData')) || [];

function storeData() {
  const dataInputs = {
    username: usernameInput.value.trim(),
    title: blogTitleInput.value.trim(),
    content: contentInput.value.trim(),
  };


  const arrangeData = JSON.stringify(dataInputs);


  localStorage.setItem('arrangeData', JSON.stringify(dataInputs));
}

// get function to append inputs in storeData() to dataInputs?
const addNewData = function () {
  dataInputs.push(savedData);
};

addNewData();





submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = document.querySelector('#uname');
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');
  // Display message doesn't do anything
  if (username === '' || title === '' || content === '') {
    return displayMessage('error', 'Please complete the form');
  };

  // localStorage.setItem('username', JSON.stringify(username));
  // localStorage.setItem('title', JSON.stringify(title));
  // localStorage.setItem('content', JSON.stringify(content));

  // window.location.href = '/my-blog/blog.html';

  storeData();





});

