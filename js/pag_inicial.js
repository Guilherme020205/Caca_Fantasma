const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0; 

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }
 
  imgs.style.transform = `translateX(${-idx * 250}px)`;
}

setInterval(carrossel, 5500);

function procurar() {
  var temperatura = Number(document.getElementById("inTemperatura").value);

  if (temperatura >= -29 && temperatura <= -10) {
    location.href = "pag_fantasma1.html";
  } else {
    alert(`${temperatura} inexistente`);
  }
}

function detalhes() {
  location.href = "pag_produto.html";
}
