var i = 0;
const fact = "I want you";
var speed = 50;
function typeWriter() {
  if (i < fact.length) {
    document.getElementById("fact").innerHTML += fact.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
