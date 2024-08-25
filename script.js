//Obtener los datos
const texto_caja = document.getElementById("texto_encriptar")
const mensaje = document.getElementById("mensaje_encriptado")
const btncopiar = document.getElementById("btncopiar")
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


//Encriptar
function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}

//accion boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(texto_caja.value);    
    if(textoEncriptado == ""){
      alert("Ingresa tu texto para encriptar");
    }else{
      mensaje.value = textoEncriptado;
      document.getElementById("img_leyenda_area_encriptada").style.display = "none";
    texto_caja.value = "";
    }
    
}

//Desencriptar
function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada;
}

//accion boton desencriptar
function btnDesencriptar(){
  const textoDesencriptado = desencriptar(texto_caja.value);
  if(textoDesencriptado == ""){
    alert("Ingresa el texto encriptado para desencriptar")
  }else{
    document.getElementById("img_leyenda_area_encriptada").style.display = "none";
  mensaje.value = textoDesencriptado;
  texto_caja.value = "";
  }
  
}

//Acción botón copiar
btncopiar.addEventListener("click", () => {
  let texto = mensaje;
  navigator.clipboard.writeText(texto.value);
  alert("Texto copiado")
  mensaje.value = "";
  document.getElementById("img_leyenda_area_encriptada").style.display="block";
  texto_caja.focus();
}
)