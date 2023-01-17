function switchTxt() {
  var x = document.getElementById('switch-txt');
  if (x.style.display === 'none') {
    
  } else {
    x.style.display = 'none';
  }
}


//Función JavaScript para encriptar el texto
function encrypt() {
  let texto = document.getElementById("cuadro-texto").value;
  let encryptedString = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  
  document.getElementById("switch-image").innerHTML = encryptedString;
}

//Asignar la función al botón
var button = document.getElementById("btn-encriptar");
button.onclick = encrypt;

//Función JavaScript para desencriptar el texto
function desencrypt() {
  let texto = document.getElementById("cuadro-texto").value;
  let desencryptedString = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
  document.getElementById("switch-image").innerHTML = desencryptedString;
}

//Asignar la función al botón
var button = document.getElementById("btn-desencriptar");
button.onclick = desencrypt;


