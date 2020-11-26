/*
const myHeading = document.querySelector('h1');
myHeading.textContent = "All About Shrimps";
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/allaboutshrimps.jpg') {
      myImage.setAttribute('src','images/shrimpdining.jpg');
    } else {
      myImage.setAttribute('src','images/allaboutshrimps.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'All About Shrimp, ' + myName;
  }
}
  
  if(!localStorage.getItem('name')) {
    setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

  myButton.onclick = function() {
  setUserName();
}