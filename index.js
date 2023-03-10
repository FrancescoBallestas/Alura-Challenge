//Función para desaparecer texto antes de escribir
function switchTxt() {
  var x = document.getElementById('switch-txt');
  if (x.style.display !== 'none') {
    x.style.display = 'none';
  }
}

var sar = document.getElementById('mostrar-mensaje');
if (sar.style.display !== 'none') {
  sar.style.display = "none";
}

//Función JavaScript para encriptar el texto
function encrypt() {
  let texto = document.getElementById("cuadro-texto").value;
  let encryptedString = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  document.getElementById("respuesta").innerHTML = encryptedString;
  document.getElementById("mostrar-mensaje").style.display = "block";
  document.getElementById("copy").style.visibility = "visible";
  // Modificar el estilo para media query de tablet
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("body").style.height= "1384px";
    document.getElementById("cuadro-respuesta").style.height = "343px";
    document.getElementById("mostrar-mensaje").style.height = "343px";
    document.getElementById("respuesta").style.height = "180px";
  }
  // Modificar el estilo para media query de celular
  if (window.matchMedia("(max-width: 375px)").matches) {
    document.getElementById("body").style.height= "1415px";
    document.getElementById("cuadro-respuesta").style.height = "595px";
    document.getElementById("mostrar-mensaje").style.height = "595px";
    document.getElementById("respuesta").style.height = "432px";
    document.getElementById("respuesta").style.width = "279px";
  }

}

//Asignar la función al botón
var button = document.getElementById("btn-encriptar");
button.onclick = encrypt;

//Función JavaScript para desencriptar el texto
function desencrypt() {
  let texto = document.getElementById("cuadro-texto").value;
  let desencryptedString = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  document.getElementById("respuesta").innerHTML = desencryptedString;
  document.getElementById("mostrar-mensaje").style.display = "block";
  document.getElementById("copy").style.visibility = "visible";

  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("body").style.height= "1384px";
    document.getElementById("cuadro-respuesta").style.height = "343px";
    document.getElementById("mostrar-mensaje").style.height = "343px";
    document.getElementById("respuesta").style.height = "180px";
  }
  // Modificar el estilo para media query de celular
  if (window.matchMedia("(max-width: 375px)").matches) {
    document.getElementById("body").style.height= "1415px";
    document.getElementById("cuadro-respuesta").style.height = "595px";
    document.getElementById("mostrar-mensaje").style.height = "595px";
    document.getElementById("respuesta").style.height = "432px";
    document.getElementById("respuesta").style.width = "279px";
  }

}

//Asignar la función al botón
var button = document.getElementById("btn-desencriptar");
button.onclick = desencrypt;

// Función para copiar el texto desencriptado
async function copiarTexto() {
  // Seleccionar el elemento de texto
  var texto = document.getElementById("respuesta");
  // Verifica si el texto esta vacio
  if(texto.value.trim() == ""){
    alert("No hay texto para copiar");
  } else {
    try {
      await navigator.clipboard.writeText(texto.value);
      console.log('Texto copiado exitosamente al portapapeles.');
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert("Error al copiar el texto");
    }
  }
}

// Función para validar si hay texto por encriptar/desencriptar
function validarCuadroTexto() {
  let texto = document.getElementById("cuadro-texto").value; 
  if(texto === ""){
    alert("No hay texto en el cuadro, por favor ingresa un texto");
    return false;
  }
  else{
    document.getElementById("btn-encriptar").disabled = false;
    document.getElementById("btn-desencriptar").disabled = false;
    return true;
  }
}

//Asignar la función al botón
var button = document.getElementById("btn-encriptar");
button.onclick = function(){
    if(validarCuadroTexto()){
        encrypt();
    }
};

//Asignar la función al botón
var button = document.getElementById("btn-desencriptar");
button.onclick = function(){
    if(validarCuadroTexto()){
        desencrypt();
    }
};

