const contenedorDiv = document.querySelector("div");
const inputNum = document.querySelector("#input-num-imgs");
const IMG_1 = "https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/4:3/w_1960,h_1470,c_limit/bob_esponja_9564.png";


function generar() {

    contenedorDiv.innerHTML = "";

    for (let i = 0; i < inputNum.value; i++) {
        contenedorDiv.innerHTML += `
            <img src="${IMG_1}" alt="">
        `;
    }
}