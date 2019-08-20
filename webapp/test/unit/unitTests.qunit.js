/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"theo/dev/geolocation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});