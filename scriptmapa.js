let marcadores = [
  {
    id: 1,
    descricao: 'Cristo Redentor',
    endereco: 'Santa Teresa, Rio de Janeiro - RJ',
    cidade: 'Rio de Janeiro',
    latlong: [-43.210901661978795, -22.951535310136688],
    url: 'https://maps.app.goo.gl/zEJpXLJCVj6sqkqD8',
    cor: 'red'
  },
  {
    id: 2,
    descricao: 'Machu Picchu',
    endereco: 'cidadela inca que fica no alto da Cordilheira dos Andes no Peru',
    cidade: 'Vale do Rio Urubamba',
    latlong: [-72.49690844070207, -13.222984737927932],
    url: 'https://maps.app.goo.gl/t94fCrNpoHU4BeAz5',
    cor: 'red'
  },
  {
    id: 3,
    descricao: 'Chichén Itzá',
    endereco: 'San Felipe Nuevo',
    cidade: 'Yucatán',
    latlong: [-88.56779335820332, 20.684485576753513],
    url: 'https://maps.app.goo.gl/JkHRd541nAuPJfB99',
    cor: 'red'
  },
  {
    id: 4,
    descricao: 'Coliseu',
    endereco: 'Roma - Itália',
    cidade: 'Roma',
    latlong: [12.492252354180716, 41.890369907451586,],
    url: 'https://maps.app.goo.gl/4XAAqxukGhJcFW366',
    cor: 'red'
  },
  {
    id: 5,
    descricao: 'Ruínas de Petra',
    endereco: 'Uum Sayhoun',
    cidade: 'Jordânia',
    latlong: [35.44436216344948, 30.328676608894575],
    url: 'https://maps.app.goo.gl/PT8bjWPmi3JodfRo9',
    cor: 'red'
  },
  {
    id: 6,
    descricao: 'Taj Mahal',
    endereco: 'Uttar Pradesh, Índia',
    cidade: 'Agra',
    latlong: [78.04211000932983, 27.17534521141682],
    url: 'https://maps.app.goo.gl/GDhkVHM36NEuSCJGA',
    cor: 'purple'
  },
  {
    id: 7,
    descricao: 'Muralha da China',
    endereco: 'Huairou District, China, 101406',
    cidade: 'Huairou District',
    latlong: [116.57041781177483, 40.43198117030949],
    url: 'https://maps.app.goo.gl/sK7i2Ahoi34wFuEQ8',
    cor: 'red'
  },
  {
    id: 8,
    descricao: 'The Wave',
    endereco: 'The Wave Trail, Kanab, AZ 84741, Estados Unidos',
    cidade: 'Arizona',
    latlong: [-112.00623776740997, 36.9961367535201],
    url: 'https://maps.app.goo.gl/xa9i1bNjkePtv8fi9',
    cor: 'red'
  }
]

// Latitude e longitude do mapa
const centralLatLong = [-47.89823981985447, -15.79967830196032]

// Token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFlZHVhcmRhYXJ0aW5zIiwiYSI6ImNscGhiaG5pdzAwdGcyaW5uMWdoNGw3dGQifQ.LQVCUJ_1gGz7ZMgXQo06sw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: centralLatLong,
  zoom: 2
});

// Marcadores das 08 maravilhas do mundo
marcadores.forEach((uni) => {
  let popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                ${uni.endereco} <br> ${uni.cidade}`);
  const marker = new mapboxgl.Marker({ color: uni.cor })
    .setLngLat(uni.latlong)
    .setPopup(popup)
    .addTo(map);
})


