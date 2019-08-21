sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("theo.dev.geolocation.controller.Map", {

		onAfterRendering: function (oEvent) {

			var that = this;

			navigator.geolocation.getCurrentPosition(function (location) {
				var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

				var mymap = L.map('map').setView(latlng, 13);

				that.byId("map").setMap(mymap);

				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
					attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
					maxZoom: 18,
					id: 'mapbox.streets',
					accessToken: 'pk.eyJ1IjoidGhlb21lZGVpcm9zIiwiYSI6ImNqems4ZjZjNTAwM28zaXBhMWNrdG45cjIifQ.OHVdrSEq9sc4vLf3gEz8Cw'
				}).addTo(that.byId("map").getMap());

				L.Routing.control({
					routeWhileDragging: true,
					geocoder: L.Control.Geocoder.nominatim()
				}).addTo(that.byId("map").getMap());

			});

		},

		onBuscaEndereco: function (oEvent) {

		},

		onBusca: function (oEvent) {

			L.Routing.control({
				waypoints: [
					L.latLng(-23.598840199999998, -46.689091499999996),
					L.latLng(51.508, -0.11)
				]
			}).addTo(this.byId("map").getMap());

		}

	});

});