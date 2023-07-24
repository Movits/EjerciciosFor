const contenedorDiv = document.querySelector("div");
const inputNum = document.querySelector("#input-num-saludos");

function generar() {

    contenedorDiv.innerHTML = "";

    for (let i = 0; i < inputNum.value; i++) {
        contenedorDiv.innerHTML += `
            <p>hola ${i+1}</p>
        `;
    }
}