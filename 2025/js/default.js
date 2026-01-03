$(document).ready(function(){
  // Map
  var layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  });
  var map = L.map('hiberus-map', {
      scrollWheelZoom: false,
      center: [41.6369216,-0.8996619],
      zoom: 15
  });
  L.marker([41.6369216,-0.8996619]).addTo(map);
  map.addLayer(layer);

  // Go to patros link
  var patrosScrollFrom = document.querySelectorAll('.home-cta-patro')[0];
  var patrosScrollTo = document.querySelectorAll('.patros')[0];

  patrosScrollFrom.onclick = function() { patrosScrollTo.scrollIntoView({ behavior: 'smooth' }); };
});
