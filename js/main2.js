document.getElementById('myForm').addEventListener('submit', testi);
document.getElementById('myForm2').addEventListener('submit', clear);








function clear(e) {
e.preventDefault();
document.getElementById('lista').innerHTML = '';

}





function testi(e) {
  e.preventDefault();
  document.getElementById('lista').innerHTML = '';
var str = document.getElementById('nimi').value;

var res = str.split("");
var abb = str.toLowerCase();


  for (var i = 0; i < abb.length; i++) {

  if (abb[i] === "a") {
    document.getElementById('lista').innerHTML += 'anaali ';
  }
  if (abb[i] === "b") {
    document.getElementById('lista').innerHTML += 'benis ';
  }
  if (abb[i] === "c") {
    document.getElementById('lista').innerHTML += 'cuck ';
  }
  if (abb[i] === "d") {
    document.getElementById('lista').innerHTML += 'diglet ';
  }if (abb[i] === "e") {
    document.getElementById('lista').innerHTML += 'eetu ';
  }if (abb[i] === "f") {
    document.getElementById('lista').innerHTML += 'faggot ';
  }if (abb[i] === "g") {
    document.getElementById('lista').innerHTML += 'gaylord ';
  }if (abb[i] === "h") {
    document.getElementById('lista').innerHTML += 'homo ';
  }if (abb[i] === "i") {
    document.getElementById('lista').innerHTML += 'impotentti ';
  }if (abb[i] === "j") {
    document.getElementById('lista').innerHTML += 'jutku ';
  }if (abb[i] === "k") {
    document.getElementById('lista').innerHTML += 'kehitysvammainen ';
  }if (abb[i] === "l") {
    document.getElementById('lista').innerHTML += 'lesbo ';
  }if (abb[i] === "m") {
    document.getElementById('lista').innerHTML += 'manlet ';
  }if (abb[i] === "n") {
    document.getElementById('lista').innerHTML += 'neekeri ';
  }if (abb[i] === "o") {
    document.getElementById('lista').innerHTML += 'orgasmi ';
  }if (abb[i] === "p") {
    document.getElementById('lista').innerHTML += 'palikkael ';
  }if (abb[i] === "q") {
    document.getElementById('lista').innerHTML += 'qlli ';
  }if (abb[i] === "r") {
    document.getElementById('lista').innerHTML += 'runkkari ';
  }if (abb[i] === "s") {
    document.getElementById('lista').innerHTML += 'saatana ';
  }if (abb[i] === "t") {
    document.getElementById('lista').innerHTML += 'turkulainen ';
  }if (abb[i] === "u") {
    document.getElementById('lista').innerHTML += 'urpo ';
  }if (abb[i] === "v") {
    document.getElementById('lista').innerHTML += 'vittu ';
  }
  if (abb[i] === "w") {
    document.getElementById('lista').innerHTML += 'wow ';
  }if (abb[i] === "x") {
    document.getElementById('lista').innerHTML += 'xpaskanaama:D ';
  }if (abb[i] === "y") {
    document.getElementById('lista').innerHTML += 'yrjöperse ';
  }if (abb[i] === "z") {
    document.getElementById('lista').innerHTML += 'zpalikkael ';
  }if (abb[i] === "ä") {
    document.getElementById('lista').innerHTML += 'ählämi ';
  }if (abb[i] === "ö") {
    document.getElementById('lista').innerHTML += 'öööööö ';
  }


document.getElementById('nimi').value = "";










      //Do something
  }

}
