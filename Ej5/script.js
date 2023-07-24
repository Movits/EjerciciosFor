const contenedorDiv = document.querySelector("div");
const inputNum = document.querySelector("#input-num-opciones");

contenedorDiv.innerHTML = `
        <select name="" id="contenedor-select">
            <option value="0">Seleccione</option>
        </select>
    `;

function generar() {

    const contenedorSelect = document.querySelector("#contenedor-select");

    contenedorSelect.innerHTML = `
        <option value="0">Seleccione</option>
    `;

    for (let i = 0; i < inputNum.value; i++) {
        contenedorSelect.innerHTML += `
            <option value="${i+1}">Opcion ${i+1}</option>
        `;
    }
}