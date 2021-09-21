/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
*/

const test = document.getElementById("popcorn");
test.addEventListener('pointerover', function() {
    alert('I was clicked!');
  });
