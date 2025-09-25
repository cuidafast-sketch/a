import { salvarLocal, carregarLocais } from "./mapService.js";

// Inicializa o mapa em São Paulo
const map = L.map('map').setView([-23.5505, -46.6333], 12);

// Tiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Mostrar pontos do Firestore
async function mostrarLocais() {
  const locais = await carregarLocais();

  locais.forEach(local => {
    const lat = local.geopoint.latitude;
    const lng = local.geopoint.longitude;

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`Salvo em: ${new Date(local.criadoEm.seconds * 1000).toLocaleString()}`);
  });
}

// Mostrar pontos ao carregar
mostrarLocais();

// Adicionar novos pontos ao clicar
map.on("click", async (e) => {
  const { lat, lng } = e.latlng;

  await salvarLocal(lat, lng);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Novo ponto: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
    .openPopup();
});
