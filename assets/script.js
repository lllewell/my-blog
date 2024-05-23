const usernameInput = document.querySelector('#uname');
const blogTitleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content-box');
const submitButton = document.querySelector('#button');

// const dataInputs = JSON.parse(localStorage.getItem('data')) || [];

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
};


function storeData() {
    const data = {
        username: usernameInput.value.trim(),
        title: blogTitleInput.value.trim(),      
        content: contentInput.value.trim(),
    };
    // dataInputs.textContent = data.textContent;
    localStorage.setItem('data', JSON.stringify(data));


        // Expert assistant gave me this code but not sure if works in this case to redirect to the next page
        // window.location.href = file:///Users/lianellewellyn/bootcamp/challenges/my-blog/blog.html
}


submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    const username = document.querySelector('#uname');
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
// Display message doesn't do anything
    if (username === '') {
        displayMessage('error', 'Please complete the form');
    } else if (title === '') {
        displayMessage('error', 'Please complete the form');
    } else if (content === '') {
        displayMessage('error', 'Please complete the form');
        localStorage.setItem('username');
        localStorage.setItem('title');
        localStorage.setItem('content');
      };

      window.location.href ="https://lllewell.github.io/my-blog/blog.html"
    



    storeData();


});

// let icon = document.querySelector('.icon');

// icon.addEventListener('click', function (){
//     if (icon === 'dark') {
//         icon = 'light';

//         document.body.setAttribute('class', 'light');
//     } else if (icon === 'light') {
//         icon = 'dark';

//         document.body.setAttribute('class', 'dark');
//     }

// })

// const themeSwitcher = document.querySelector('#theme-switcher');
// const icon = document.querySelector('.icon');


// themeSwitcher.addEventListener('click', function () {
//     if (icon === 'dark') {
//       icon = 'light';
//     //   This method was given by Xpert assistant, still not functional
//     //   container.classList.remove('dark');
//     //   container.classList.add('light');
//       container.setAttribute('class', 'dark-theme');
//     } else {
//       icon = 'dark';
//     //   Given by Xpert assistant
//     //   container.classList.remove('light');
//     //   container.classList.add('dark');
//       container.setAttribute('class', 'light');
//     }
//   });