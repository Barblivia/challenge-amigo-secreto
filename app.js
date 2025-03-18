//Declaración de variables
let amigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

//función que agrega cada amigo
function agregarAmigo(){
    if (inputAmigo.value==""){ 
        alert("Por favor, ingrese un nombre"); 
    } else { 
       amigos.push(inputAmigo.value);
       ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${inputAmigo.value}</li>`;
       inputAmigo.value="";
    }
}
//función que sortea un amigo de la lista
function sortearAmigo(){
    const aleatorio = Math.floor(Math.random()* amigos.length);
    const amigoSecreto = amigos[aleatorio];
    resultado.innerHTML=`<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
    
   