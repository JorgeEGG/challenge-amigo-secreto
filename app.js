// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1 de Trello: Crear un array para almacenar los nombres
let amigos = [];

// Paso 2 de Trello: Implementar una función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == "") {
        alert("Por favor, ingrese el nombre de un amigo:");
    } else {
        amigos.push(amigo);
        actualizarAmigos();
        document.getElementById('amigo').value = "";
    }
    console.log(amigos);
}

// Paso 3 de Trello: Implementar una función para actualizar la lista de amigos
// let listaAmigos = document.getElementById('listaAmigos');
function actualizarAmigos() {

    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let liAmigo = document.createElement("li");
        liAmigo.textContent = amigos[i];
        listaAmigos.appendChild(liAmigo);
        console.log(listaAmigos);
    }
}

// Paso 4 de Trello: Implementar una función para elegir el amigo secreto
function elegirAmigo() {
    resultado.innerHTML = "";
    let indiceMaximo = amigos.length
    if (amigos.length == 0) {
        alert("No tiene amigos en la lista")
    } else {
        let indiceAmigoSecreto = Math.floor(Math.random() * indiceMaximo);
        listaAmigos.innerHTML = "";
        let liResultado = document.createElement("li");
        liResultado.textContent = `El amigo secreto elegido es: ${amigos[indiceAmigoSecreto]}`;
        let resultado = document.getElementById("resultado");
        resultado.appendChild(liResultado);
        console.log(resultado);
        todoEstaTerminado();
    }
}

// Adicional
function todoEstaTerminado() {
    let liResultado = document.createElement("li");
    liResultado.textContent = `GAME OVER`;
    let resultado = document.getElementById("resultado");
    resultado.appendChild(liResultado);
    console.log(resultado);
}