const contenedorDiv = document.querySelector("div");
const inputNum = document.querySelector("#input-num-imgs");
const IMG_1 = "https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/4:3/w_1960,h_1470,c_limit/bob_esponja_9564.png";
const IMG_2 = "https://depor.com/resizer/qcL5tpQkAgec0Siyue3kXVDJjk0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GWPQ6ECINNGJ3GKSBYILKO5QTE.jpg";
const IMG_3 = "https://s3.abcstatics.com/media/play/2020/06/15/bobesponja-k1pG--620x349@abc.jpg";

function generar() {

    contenedorDiv.innerHTML = "";

    let imgSelec;

    switch (inputNum.value) {
        case "1":
            imgSelec = IMG_1;
            break;
        case "2":
            imgSelec = IMG_2;
            break;
        case "3":
            imgSelec = IMG_3;
            break;
        default:
            imgSelec = IMG_1;
            break;
    }

    for (let i = 0; i < inputNum.value; i++) {
        contenedorDiv.innerHTML += `
            <img src="${imgSelec}" alt="">
        `;
    }
}