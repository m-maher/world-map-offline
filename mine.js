
			var countriesLayer;

			function countriesStyle(feature){
				return {
					fillColor : '#abd5ff',
					weight : 1,
					opacity : 1,
					color : 'white',
					fillOpacity : 0.7
				}
			}

			var map = L.map('map', {
				minZoom: 3,
				maxZoom: 6
			});

			map.setView([ 30.8025 , 26.8206], 0);
			
			// var map = L.map('map').setView([43.8476, 18.3564], 2)

			countriesLayer = L.geoJson(countries,{
				style : countriesStyle,
				onEachFeature: countriesOnEachFeature
			}).addTo(map)

			map.fitBounds(countriesLayer.getBounds())
			
			function highlightFeature(e){
				var layer = e.target;
				layer.setStyle(
					{
						weight : 1,
						fillColor : '#227194',
						fillOpacity : 1
					}
				)
				if(!L.Browser.ie && !L.Browser.opera){
					layer.bringToFront()
				}
			}
			
			function resetHighlight(e){
				countriesLayer.resetStyle(e.target)
			}
			
			function zoomToFeature(e){
				map.fitBounds(e.target.getBounds())
			}

			function countriesOnEachFeature(feature, layer){
				layer.on(
					{
						mouseover : highlightFeature,
						mouseout : resetHighlight,
						click : zoomToFeature
					}
				)
			}

			
			// var markers = new Array();
			// function countriesOnEachFeature(feature, layer){
			// 	markers.push(
			// 		L.circleMarker(
			// 			layer.getBounds().getCenter(),
			// 			{
			// 				radius : 0.0,
			// 				opacity : 0,
			// 				fillOpacity : 0
			// 			}
			// 		)
			// 	);
			// 	var markersCount = markers.length;
			// 	markers[markersCount - 1].bindLabel(
			// 		feature.properties.pop_est.toString(),
			// 		{
			// 				noHide : true,
			// 				className : 'map-label',
			// 				pane : 'mapPane'
			// 		}
			// 	);
			// 	markers[markersCount - 1].addTo(map);
			// 	markers[markersCount - 1].hideLabel();
				
			// 	layer.on(
			// 		{
			// 			mouseover : highlightFeature,
			// 			mouseout : resetHighlight,
			// 			click : zoomToFeature
			// 		}
			// 	);
			// }
			

			
			
						
			// var visible;
			// map.on(
			// 	'zoomend',
			// 	function(e){
			// 		if(map.getZoom() > 5){
			// 			if(!visible){
			// 				for(var i = 0; i < markers.length; i++){
			// 					markers[i].showLabel();
			// 				}
			// 				visible = true;
			// 			}
			// 		}else{
			// 			if(visible){
			// 				for(var i = 0; i < markers.length; i++){
			// 					markers[i].hideLabel();
			// 				}
			// 				visible = false;
			// 			}
			// 		}
			// 	}
			
			// );
			
			// var imageUrl = 'data/SP27GTIF.png';
			// var imageBounds = [
			// 	[41.91713209771033, -87.66747359388185], 
			// 	[41.83299831003662, -87.5823733664601]
			// ];
			// var imageLayer = L.imageOverlay(imageUrl, imageBounds).addTo(map);
			// map.fitBounds(imageBounds);
			
			// var baseMaps = {
			// 		'Google Roadmap' : googleRoadmapLayer, 
			// 		'Google' : googleLayer
			// };
			// var overlayMaps = {
			// 		'Countries' : countriesLayer, 
			// 		'Image' : imageLayer
			// };
			// L.control.layers(baseMaps, overlayMaps).addTo(map);


$(".CountryMark").click(function () {
    countryMark = $(".CountryMark").text();
    $(".btn-secondary").text(countryMark);
});

$(".CountryMark1").click(function () {
    countryMark = $(".CountryMark1").text();
    $(".btn-secondary").text(countryMark);
});

$('.dropdown-item').on('click',function(){
    $('.goToCountry').show()
})