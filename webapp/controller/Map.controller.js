sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("theo.dev.geolocation.controller.Map", {

		onAfterRendering: function (oEvent) {
			
			var mymap = L.map('map').setView([51.505, -0.09], 13);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox.streets',
				accessToken: 'pk.eyJ1IjoidGhlb21lZGVpcm9zIiwiYSI6ImNqems4ZjZjNTAwM28zaXBhMWNrdG45cjIifQ.OHVdrSEq9sc4vLf3gEz8Cw'
			}).addTo(mymap);

		} 

	});

});