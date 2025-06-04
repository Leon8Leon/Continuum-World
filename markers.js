// Przykładowa ikona – dostosuj jak chcesz
const redDotIconSmall6 = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

// Definicja wszystkich możliwych markerów
const markers = {
  Gdańsk: {
    lat: 54.352,
    lng: 18.646,
    name: `<b>🇵🇱 Gdańsk</b><br>Pomorskie`,
    icon: redDotIconSmall6
  },
  Poznań: {
    lat: 52.406,
    lng: 16.925,
    name: `<b>🇵🇱 Poznań</b><br>Wielkopolskie`,
    icon: redDotIconSmall6
  },
  Wrocław: {
    lat: 51.107,
    lng: 17.038,
    name: `<b>🇵🇱 Wrocław</b><br>Dolnośląskie`,
    icon: redDotIconSmall6
  },
  Kraków: {
    lat: 50.064,
    lng: 19.945,
    name: `<b>🇵🇱 Kraków</b><br>Małopolskie`,
    icon: redDotIconSmall6
  },
  Warszawa: {
    lat: 52.229,
    lng: 21.012,
    name: `<b>🇵🇱 Warszawa</b><br>Mazowieckie`,
    icon: redDotIconSmall6
  }
};

// Inicjalizacja mapy
const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const bounds = [];

for (const city in markers) {
  if (typeof visibleCities !== "undefined" && !visibleCities.includes(city)) continue;

  const m = markers[city];
  const marker = L.marker([m.lat, m.lng], { icon: m.icon })
    .addTo(map)
    .bindPopup(m.name);
  bounds.push([m.lat, m.lng]);
}

if (bounds.length) {
  map.fitBounds(bounds);
}
