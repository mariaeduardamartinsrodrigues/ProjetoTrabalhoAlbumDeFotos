function Dados() {
  let card = '';
  fetch('https://7ff70537-6da3-4872-9644-20603935a5ce-00-3g6u88hp2jcnc.picard.replit.dev/album')
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        let cardalbum = `<div class="col-md-3">
            <div class="card" style="width: 18rem;">
              <img src="${element.url}" class="card-img-top" alt="Imagem 1">
              <div class="card-body">
                <h5 class="card-title">${element.titulo}</h5>
                <p class="card-text">${element.descricao}</p>
                <p class="card-text">${element.localizacao.longitude}</p>
                <p class="card-text">${element.localizacao.latitude}</p>
                <p class="card-text">${element.data}</p>
                <a href="pagina2.html?${element.id_album}" class="btn btn-primary">ver mais</a>
              </div>
            </div>
          </div>`

        card += cardalbum;
      })
      document.getElementById('cards').innerHTML = card;
    })
}
window.onload = Dados();

function CarregarCarrousel() {
  let card = '';
  fetch('https://7ff70537-6da3-4872-9644-20603935a5ce-00-3g6u88hp2jcnc.picard.replit.dev/DESTAQUES')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id_destaque == 1) {
          let card2 = `<div class="carousel-item active">
                <img src="${data[i].url}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <p>${data[i].texto_destaque}</p>
                </div>
              </div>`
          card += card2;
        }
        else {
          let card2 = `<div class="carousel-item">
                  <img src="${data[i].url}" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <p>${data[i].texto_destaque}</p>
                  </div>
                </div>`
          card += card2;
        }
      }
      document.getElementById('carrousel2').innerHTML = card;
    })
}
window.onload = Dados(), CarregarCarrousel();
