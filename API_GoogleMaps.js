<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Google Maps Einbindung</title>
    <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyBYkPgEbgwVqKRIj9wvGdfi6j5JD0lep34"
      type="text/javascript"></script>
    <script type="text/javascript">

    //<![CDATA[

  function load() {
  if (GBrowserIsCompatible()) {
    var map = new GMap2(document.getElementById("map"));
    var punkt = new GLatLng(51.02299, 7.56199);
    map.setCenter(punkt, 15);
  
    var marke = new GMarker(punkt);
    map.addOverlay(marke);
  }
}

    //]]>
    </script>
  </head>
  <body onload="load()" onunload="GUnload()">
    <div id="map" style="width: 500px; height: 300px"></div>
  </body>
</html>