const contenedorDiv = document.querySelector("div");
const inputNum = document.querySelector("#input-num-opciones");

function generar() {

    contenedorDiv.innerHTML = `
        <select name="" id="contenedor-select">
            
        </select>
    `;

    const contenedorSelect = document.querySelector("#contenedor-select");

    for (let i = 0; i < inputNum.value; i++) {
        contenedorSelect.innerHTML += `
            <option value="${i+1}">Opcion ${i+1}</option>
        `;
    }
}