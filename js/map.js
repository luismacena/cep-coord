function Mapa(latitude="", longitude="") {
	this.map = null;
	this.geocoder = null;
	this.marker = null;
	this.lat = (latitude) ? latitude : -22.9053516;//<~ SE NÃO PASSAR NENHUM PARAMETRO ENTRA NESSE VALOR
	this.long = (longitude) ? longitude : -43.1956711;//<~ SE NÃO PASSAR NENHUM PARAMETRO ENTRA NESSE VALOR
}

Mapa.prototype.initMap = function() {
	var latlng = new google.maps.LatLng(this.lat, this.long);
	this.map = new google.maps.Map(document.getElementById('map'), {
	    //centro do mapa inicial
	    center: latlng,
	    //zoom do mapa
	    zoom: 11,
	    //não dar zoom com o scroll
	    scrollwheel: false,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	});

    this.geocoder = new google.maps.Geocoder();

    this.marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
    });

    //Seta um marcador inicial
    //this.marker.setPosition(latlng);
}

Mapa.prototype.carregarNoMapa = function(endereco) {
	var map = this.map;
    this.geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                /* MOSTRA A LATITUDE E A LONGITUDE NO CONSOLE	
                console.log("lat: " + latitude);
                console.log("lng: " + longitude);
                */

                var location = new google.maps.LatLng(latitude, longitude);
                map.setCenter(location);
                map.setZoom(16);
            }
        }
    });
}

