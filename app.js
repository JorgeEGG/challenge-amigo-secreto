// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == "") {
        alert("Por favor, ingrese el nombre de un amigo:");
        let amigo = document.getElementById('amigo').value;
    }else{
        listaAmigos.push(amigo);
        document.getElementById('amigo').value = "";
    }
    console.log(listaAmigos);
}
