window.onload = function () {

    const mapDiv = document.getElementById("map");

    if (!mapDiv) return;

    const lat = window.mapData.lat;
    const lng = window.mapData.lng;

    const map = L.map("map").setView([lat, lng], 13);
    // 👇 ADD THIS HERE
    console.log("Map object:", map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            `<b>${window.mapData.title}</b><br>${window.mapData.location}`
        )
        .openPopup();

    setTimeout(() => {
        map.invalidateSize();
    }, 100);
};
