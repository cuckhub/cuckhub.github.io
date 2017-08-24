document.getElementById('myForm').addEventListener('submit', testi);
document.getElementById('myForm2').addEventListener('submit', clear);








function clear(e) {
e.preventDefault();
document.getElementById('lista').innerHTML = '';

}





function testi(e) {
  e.preventDefault();
var str = document.getElementById('nimi').value;

var res = str.split("");
var abb = str.toLowerCase();


  for (var i = 0; i < abb.length; i++) {

  if (abb[i] === "a") {
    document.getElementById('lista').innerHTML += 'Keltainen palikka, ';
  }
  if (abb[i] === "b") {
    document.getElementById('lista').innerHTML += 'Punainen palikka, ';
  }
  if (abb[i] === "c") {
    document.getElementById('lista').innerHTML += 'Ruskea palikka, ';
  }
  if (abb[i] === "d") {
    document.getElementById('lista').innerHTML += 'Oranssi palikka, ';
  }if (abb[i] === "e") {
    document.getElementById('lista').innerHTML += 'Sininen palikka, ';
  }if (abb[i] === "f") {
    document.getElementById('lista').innerHTML += 'Musta palikka, ';
  }if (abb[i] === "g") {
    document.getElementById('lista').innerHTML += 'Valkoinen palikka, ';
  }if (abb[i] === "h") {
    document.getElementById('lista').innerHTML += 'Harmaa palikka, ';
  }if (abb[i] === "i") {
    document.getElementById('lista').innerHTML += 'Laventeli palikka, ';
  }if (abb[i] === "j") {
    document.getElementById('lista').innerHTML += 'Ultramariini palikka, ';
  }if (abb[i] === "k") {
    document.getElementById('lista').innerHTML += 'Indigo palikka, ';
  }if (abb[i] === "l") {
    document.getElementById('lista').innerHTML += 'Syaani palikka, ';
  }if (abb[i] === "m") {
    document.getElementById('lista').innerHTML += 'Turkoosi palikka, ';
  }if (abb[i] === "n") {
    document.getElementById('lista').innerHTML += 'Akvamariini palikka, ';
  }if (abb[i] === "o") {
    document.getElementById('lista').innerHTML += 'Vihreä palikka, ';
  }if (abb[i] === "p") {
    document.getElementById('lista').innerHTML += 'Limenvihreä palikka, ';
  }if (abb[i] === "q") {
    document.getElementById('lista').innerHTML += 'Beige palikka, ';
  }if (abb[i] === "r") {
    document.getElementById('lista').innerHTML += 'Oliivinvihreä palikka, ';
  }if (abb[i] === "s") {
    document.getElementById('lista').innerHTML += 'Kulta palikka, ';
  }if (abb[i] === "t") {
    document.getElementById('lista').innerHTML += 'Seepia palikka, ';
  }if (abb[i] === "u") {
    document.getElementById('lista').innerHTML += 'Ruoste palikka, ';
  }if (abb[i] === "v") {
    document.getElementById('lista').innerHTML += 'Tulenpunainen palikka, ';
  }
  if (abb[i] === "w") {
    document.getElementById('lista').innerHTML += 'Violetti palikka, ';
  }if (abb[i] === "x") {
    document.getElementById('lista').innerHTML += 'Purppura palikka, ';
  }if (abb[i] === "y") {
    document.getElementById('lista').innerHTML += 'Smaragdinvihreä palikka, ';
  }if (abb[i] === "z") {
    document.getElementById('lista').innerHTML += 'Laivastonsininen palikka, ';
  }if (abb[i] === "ä") {
    document.getElementById('lista').innerHTML += 'khaki palikka, ';
  }if (abb[i] === "ö") {
    document.getElementById('lista').innerHTML += 'lila palikka, ';
  }


document.getElementById('nimi').value = "";










      //Do something
  }

}
