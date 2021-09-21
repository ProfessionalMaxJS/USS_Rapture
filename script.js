/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
*/

const sound = new Audio ("http://free-loops.com/data/mp3/99/06/3d1ab5397b3a44e4ced60ac61400.mp3");
document.querySelector("body").appendChild(sound);


const test = document.getElementById("popcorn");

test.addEventListener('pointerover', function() {  
  sound.play();
  });

