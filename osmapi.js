<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel='stylesheet' type='text/css' href='' />
        <meta http-equiv='content-type' content='text/html; charset=utf-8' />
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />
        <!--[if lte IE 8]>
            <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.ie.css" />
        <![endif]-->
        <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
        <style>
        body {
            margin:0;
            padding:0;
        }
        #map {
            position:fixed;
            top:0;
            right:0;
            bottom:0;
            left:0;
        }
        </style>
    </head>
    <body>
        <div id='map'></div>
        <script src='../gpx.js'></script>
        <script>
        // create a map in the "map" div, set the view to a given place and zoom
        var map = L.map('map').setView([51.505, -0.09], 15);
        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var b = map.getBounds();
        // sigh, api
        osmGpx([b.getSouthWest().lng, b.getSouthWest().lat, b.getNorthEast().lng, b.getNorthEast().lat], 9, function(err, gpx, gj) {
            L.geoJson(gj).addTo(map);
        });
        </script>
    </body>
</html>