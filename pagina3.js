let url = window.location.href;
let id_album = url.split('?')[1];
let id_foto = url.split('?')[2];

function CarregarCarrousel() {
  let card = '';
  fetch('https://7ff70537-6da3-4872-9644-20603935a5ce-00-3g6u88hp2jcnc.picard.replit.dev/fotos')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id_album == id_album) {
          if (data[i].id_foto == id_foto) {
            let card2 = ` <div class="carousel-item active">
      <img src="${data[i].url_imagem}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${data[i].descricao_imagem}</h5>
      </div>
    </div>`
            card += card2;
          }

          else {
            let card2 = ` <div class="carousel-item">
              <img src="${data[i].url_imagem}" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>${data[i].descricao_imagem}</h5>
              </div>
            </div>`
            card += card2;
          }
        }
      }
      document.getElementById('carrousel').innerHTML = card;
    })
}
window.onload = CarregarCarrousel();