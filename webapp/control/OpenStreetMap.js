sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/FlexBox"
], function (Control, FlexBox) {
	"use strict";
	return Control.extend("theo.dev.geolocation.control.OpenStreetMap", {
		metadata : {
			properties : {
			},
			aggregations : {
			},
			events : {
			}
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {
			
			oRM.write("<div id='map' class='mapid'>ALO</div>");
		}
	});
});