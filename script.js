/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
*/ 
//Text added for the initial assignment

const sound = new Audio ("http://free-loops.com/data/mp3/99/06/3d1ab5397b3a44e4ced60ac61400.mp3");
document.querySelector("body").appendChild(sound);
//"grabs" popcorn sound effect and adds it to the HTML body

const poppingCorn = document.getElementById("popcorn");

function pop(){
  sound.play(); 
} 

poppingCorn.addEventListener('click', function() {  
  pop();
  });

/*
  function stop(){
    sound.pause();    
  */
 //undeveloped idea that the sound effect should stop when the mouse is off the element