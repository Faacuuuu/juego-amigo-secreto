// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSeCretos = [];



function agregarAmigo(){
    let elementoHtml = document.getElementById('amigo').value;

    if(elementoHtml === ""){
        alert("Debes ingresar un nombre");
    }else{
       amigosSeCretos.push(elementoHtml);
       actualizarAmigos();
       console.log(amigosSeCretos);
       vaciarCaja(); 
    }

}

function vaciarCaja(){
    let valorCaja = document.getElementById('amigo').value = '';
}

function actualizarAmigos(){
       // Obtener el elemento de la lista
       const listaHtml = document.getElementById('listaAmigos');

       // Limpiar la lista existente
       listaHtml.innerHTML = "";
   
       // Recorrer el array y crear un elemento <li> por cada amigo
       amigosSeCretos.forEach((amigo) => {
           const elemento = document.createElement('li'); // Crear un <li>
           elemento.textContent = amigo; // Asignar el texto del amigo al <li>
           listaHtml.appendChild(elemento); // Agregar el <li> a la lista
       });

   } 

function sortearAmigo(){

    if (amigosSeCretos.length == 0){
        alert("No hay amigos para ser sorteados")
    }else{
        let numeroAleatorio = Math.floor(Math.random()*amigosSeCretos.length);
        const AmigoSorteado = document.getElementById('resultado');
        AmigoSorteado.innerHTML = amigosSeCretos[numeroAleatorio];        
    }


    
}
