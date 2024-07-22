let url = window.location.href;
let pagina = url.split('?')[1];

function CarregarAlbum() {
  fetch('https://7ff70537-6da3-4872-9644-20603935a5ce-00-3g6u88hp2jcnc.picard.replit.dev/album')
    .then(res => res.json())
    .then(data => {
      let card = '';
      for (let i = 0; i < data.length; i++) {
        if (data[i].id_album == pagina) {
          let cardalbum = `<div class="col-4">
      <div class="card shadow-sm">
      <img src="${data[i].url}" height="90%" width="auto"/>
      </div>
      </div>
      <div class="col-8">
      <h6> Descrição </h6>
        <p> ${data[i].descricao} </p>
      <div class="row row-cols-sm-1 row-cols-md-2">
        <div class="col-6">
        <h6 > Localização</h6>
          <p> ${data[i].localizacao.longitude},${data[i].localizacao.latitude}</p>
      <div class="col-6">
        <h6 > Data de Registro:</h6>
          <p> ${data[i].data} </p>
      </div>
        </div>
      </div>`
          card += cardalbum;
        }
      }
      document.getElementById('cards').innerHTML = card;
    })

}
function CarregarFotos() {
  let card = '';
  fetch('https://7ff70537-6da3-4872-9644-20603935a5ce-00-3g6u88hp2jcnc.picard.replit.dev/fotos')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id_album == pagina) {
          let cardalbum = `<div class="col-md-3 p-2">
                <div class="card h-100">
                    <img src="${data[i].url_imagem}" class="card-img-top" alt="Imagem 1">
                    <div class="card-body">
<p class="card-text">${data[i].descricao_imagem}</p>
                        <a href="pagina3.html?${data[i].id_album}?${data[i].id_foto}" class="btn btn-primary">Ver detalhes</a>
                    </div>
                </div>
            </div>`
          card += cardalbum;
        }
      }
      document.getElementById('fotos').innerHTML = card;
    })

}

window.onload = CarregarAlbum(), CarregarFotos();