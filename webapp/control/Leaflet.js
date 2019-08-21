sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/FlexBox"
], function (Control, FlexBox) {
	"use strict";
	return Control.extend("theo.dev.geolocation.control.Leaflet", {
		metadata : {
			properties : {
				id: { type: "string" },
				map: { type: "object" }
			},
			aggregations : {
			},
			events : {
			}
		},
		init : function () {
			
			
		},
		renderer : function (oRM, oControl) {
			
			oRM.write("<div id='map' class='mapid'></div>");
		}
	});
});