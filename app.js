//mapboxkey =  "pk.eyJ1IjoicGFuZWx2dyIsImEiOiJjaW56cmlxaTcxOTk1dTJtM3F2aGE3Y25mIn0.bKj9LERNGK-5royXLrqthg"
//mapcenter -33.758964, 150.949350
// console.log(outerWest);

var yearSelect09 = document.getElementById('yearButton09');
var yearSelect10 = document.getElementById('yearButton10');
var yearSelect11 = document.getElementById('yearButton11');
var yearSelect12 = document.getElementById('yearButton12');
var yearSelect13 = document.getElementById('yearButton13');
var yearSelect14 = document.getElementById('yearButton14');



var array = []
for (var x=0; x<1000; x++){
	array.push([x, x]);
}
function cityFilter(city){
	var geojson = {
		"type": "Feature",
  	"geometry": {
	    "type": "Point",
	    "coordinates": []
 		 },
  	"properties": {
  		"Name": null,
  		"Year": null,
	  	"New business": null,
	  	"Avr Business R&D Expenditure": null,
	  	"Agriculture Forestry Fishing": null,
	  	"Arts Recreation": null,
	  	"Financial Insurance": null,
	  	"Mining": null,
	  	"Scientific Technical": null
  	},
  	"Year": null
	}

	geojson.geometry.coordinates.push(city.Longitude, city.Latitude);
	geojson.properties.Name 														= city.Name;
	geojson.Year						 														= city.Year;
	geojson.properties["New business"] 									= city["New business"];
	geojson.properties["Avr Business R&D Expenditure"] 	= city["Avr Business R&D Expenditure"];
	geojson.properties["Agriculture Forestry Fishing"] 	= parseInt(city["Agriculture Forestry Fishing"]/4);
	geojson.properties["Arts Recreation"]								= city["Arts Recreation"];
	geojson.properties["Financial Insurance"]						= city["Financial Insurance"];
	geojson.properties["Mining"]												= city["Mining"];
	console.log(geojson.properties["Mining"]);
	geojson.properties["Scientific Technical"]					= city["Scientific Technical"];

	return geojson;}

var outerWestgeoJson2014 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2014) return city;
	else return false;
	});
var outerWestgeoJson2013 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2013) return city;
	else return false;
	});
var outerWestgeoJson2012 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2012) return city;
	else return false;
	});
var outerWestgeoJson2011 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2011) return city;
	else return false;
	});
var outerWestgeoJson2010 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2010) return city;
	else return false;
	});
var outerWestgeoJson2009 = outerWest.map(cityFilter).filter(function(city){
	if (city.Year === 2009

		) return city;
	else return false;
	});


mapboxgl.accessToken = 'pk.eyJ1IjoicGFuZWx2dyIsImEiOiJjaW56cmlxaTcxOTk1dTJtM3F2aGE3Y25mIn0.bKj9LERNGK-5royXLrqthg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [150.249350, -33.298964],
    zoom: 8
});
// map.scrollZoom.disable();
map.on('load', function() {

    // Add a new source from our GeoJSON data and set the
    // 'cluster' option to true.
    map.addSource("southSydney2014", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2014
    }});
    map.addSource("southSydney2013", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2013
    }});
    map.addSource("southSydney2012", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2012
    }});
    map.addSource("southSydney2011", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2011
    }});
    map.addSource("southSydney2010", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2010
    }});
    map.addSource("southSydney2009", {
        type: "geojson",
        data: {
        "type": "FeatureCollection",
        "features": outerWestgeoJson2009
    }});

    var MininglayerObj2014 = {
        "id": "MiningsouthSydneyLayer2014",
        "type": "circle",
        "source": "southSydney2014",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var MininglayerObj2013 = {
        "id": "MiningsouthSydneyLayer2013",
        "type": "circle",
        "source": "southSydney2013",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var MininglayerObj2012 = {
        "id": "MiningsouthSydneyLayer2012",
        "type": "circle",
        "source": "southSydney2012",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var MininglayerObj2011 = {
        "id": "MiningsouthSydneyLayer2011",
        "type": "circle",
        "source": "southSydney2011",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var MininglayerObj2010 = {
        "id": "MiningsouthSydneyLayer2010",
        "type": "circle",
        "source": "southSydney2010",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var MininglayerObj2009 = {
        "id": "MiningsouthSydneyLayer2009",
        "type": "circle",
        "source": "southSydney2009",
        "paint": {
            "circle-color": 'rgba(145, 96, 29, 1)',
            "circle-radius": {
            	"property": "Mining",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };


    // Agriculture Forestry Fishing
    var AgrilayerObj2014 = {
        "id": "AgrisouthSydneyLayer2014",
        "type": "circle",
        "source": "southSydney2014",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var AgrilayerObj2013 = {
        "id": "AgrisouthSydneyLayer2013",
        "type": "circle",
        "source": "southSydney2013",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var AgrilayerObj2012 = {
        "id": "AgrisouthSydneyLayer2012",
        "type": "circle",
        "source": "southSydney2012",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
		var AgrilayerObj2011 = {
        "id": "AgrisouthSydneyLayer2011",
        "type": "circle",
        "source": "southSydney2011",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var AgrilayerObj2010 = {
        "id": "AgrisouthSydneyLayer2010",
        "type": "circle",
        "source": "southSydney2010",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };
    var AgrilayerObj2009 = {
        "id": "AgrisouthSydneyLayer2009",
        "type": "circle",
        "source": "southSydney2009",
        "paint": {
            "circle-color": 'rgba(100,255,100,0.5)',
            "circle-radius": {
            	"property": "Agriculture Forestry Fishing",
          		"stops": array
           },
        "circle-opacity": .5,
        "circle-blur": 1,
        },
    };

    map.addLayer(MininglayerObj2014, 'waterway-label');
    map.addLayer(MininglayerObj2013, 'waterway-label');
    map.addLayer(MininglayerObj2012, 'waterway-label');
    map.addLayer(MininglayerObj2011, 'waterway-label');
    map.addLayer(MininglayerObj2010, 'waterway-label');
    map.addLayer(MininglayerObj2009, 'waterway-label');

    map.addLayer(AgrilayerObj2014, 'waterway-label');
    map.addLayer(AgrilayerObj2013, 'waterway-label');
    map.addLayer(AgrilayerObj2012, 'waterway-label');
    map.addLayer(AgrilayerObj2011, 'waterway-label');
    map.addLayer(AgrilayerObj2010, 'waterway-label');
    map.addLayer(AgrilayerObj2009, 'waterway-label');

    yearSelect14.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', 0);
		});

		yearSelect13.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', 0);
		});
			yearSelect12.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', 0);
		});
			yearSelect11.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', 0);
		});
			yearSelect10.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', 0);
		});
			yearSelect09.addEventListener('click', function() {
			map.setPaintProperty('AgrisouthSydneyLayer2009', 'circle-opacity', .5);
			map.setPaintProperty('MiningsouthSydneyLayer2009', 'circle-opacity', .5);

			map.setPaintProperty('AgrisouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('AgrisouthSydneyLayer2014', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2013', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2012', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2011', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2010', 'circle-opacity', 0);
			map.setPaintProperty('MiningsouthSydneyLayer2014', 'circle-opacity', 0);
		});
});




