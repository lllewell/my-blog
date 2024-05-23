const usernameInput = document.querySelector('#uname');
const blogTitleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content-box');
const submitButton = document.querySelector('#button');

// const dataInputs = JSON.parse(localStorage.getItem('data')) || [];

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
};

const data = JSON.parse(localStorage.getItem('data')) || [];

function storeData() {
    const data = {
        username: usernameInput.value.trim(),
        title: blogTitleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    data.push(data);

    localStorage.setItem('data', JSON.stringify(data));



}


submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = document.querySelector('#uname');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
    // Display message doesn't do anything
    if (username === '' || title === '' || content === '') {
        return displayMessage('error', 'Please complete the form');
    };

    localStorage.setItem('username');
    localStorage.setItem('title');
    localStorage.setItem('content');

    // window.location.href = '/my-blog/blog.html';

    storeData();




});

const htmlEl = document.querySelector('html');

const toggleTheme = function() {
    if (htmlEl.dataset.theme === 'dark') {
      htmlEl.dataset.theme = 'light';
    } else {
      htmlEl.dataset.theme = 'dark';
    }
    localStorage.setItem('theme', htmlEl.dataset.theme);
  }