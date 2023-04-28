import './style.css';
import myFunction from './function.js';
//import Image from './images/checkbox.png';
// import Data from './data.xml';
// import Notes from './data.csv';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "webpack";
    element.classList.add('hello');
    

    // const myImage = new Image();
    // myImage.src  = Image;
    // element.appendChild(myImage);

    return element;
  }
  
  document.body.appendChild(component());
  myFunction();