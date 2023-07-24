const contenedorDiv = document.querySelector("div");
const VALOR_MAX = 30

for (let i = 0; i < VALOR_MAX; i++) {
    contenedorDiv.innerHTML += `
        <p>hola ${i+1}</p>
    `;
}