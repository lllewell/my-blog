const usernameInput = document.querySelector('#uname');
const blogTitleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#button');

function redirectPage () {
    let storedUsername = localStorage.getItem('username');
    let storedTitle = localStorage.getItem('title');
    let storedContent = localStorage.getItem('content');
    // Need to figure out what you're doing here, how will this redirect to the next page
    if (storedUsername && storedTitle && storedContent) {
        userNameInput.value = storedUsername;
        blogTitleInput.value = storedTitle;
        contentInput.value = storedContent;

        // Expert assistant gave me this code but not sure if works in this case to redirect to the next page
        // window.location.href = file:///Users/lianellewellyn/bootcamp/challenges/my-blog/blog.html
    }

};

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    const username = document.querySelector('#uname');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');

    if (username === '') {
        displayMessage('error', 'Please complete the form');
    } else if (title === '') {
        displayMessage('error', 'Please complete the form');
    } else if (content === '') {
        displayMessage('error', 'Please complete the form');
    }



});