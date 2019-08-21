sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("theo.dev.geolocation.controller.Map", {

		onAfterRendering: function (oEvent) {

			var mymap = L.map('map').setView([51.505, -0.09], 13);
			
			this.byId("map").setMap(mymap);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox.streets',
				accessToken: 'pk.eyJ1IjoidGhlb21lZGVpcm9zIiwiYSI6ImNqems4ZjZjNTAwM28zaXBhMWNrdG45cjIifQ.OHVdrSEq9sc4vLf3gEz8Cw'
			}).addTo(this.byId("map").getMap());

		},

		onBusca: function (oEvent) {

			var marker = L.marker([51.5, -0.09]).addTo( );
			var circle = L.circle([51.508, -0.11], {
				color: 'red',
				fillColor: '#f03',
				fillOpacity: 0.5,
				radius: 500
			}).addTo(this.byId("map").getMap());

		}

	});

});