let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 13.736717, lng: 100.523186 },
    zoom: 12,
  });
}

initMap();