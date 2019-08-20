sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Button",
	"sap/m/Label"
], function (Control, Button, Label) {
	"use strict";
	return Control.extend("theo.dev.geolocation.control.ButtonCustom", {
		metadata : {
			properties : {
				valor: 	{type : "string"},
				click:  {type: "float"}
			},
			aggregations : {
				_button : {type : "sap.m.Button", multiple: false, visibility : "hidden"},
				_label : {type : "sap.m.Label", multiple: false, visibility : "hidden"}
			},
			events : {
				_pressiona : {
					parameters : {
					}
				}
			}
		},
		init : function () {
			this.setAggregation("_button", new Button({
				text: "Teste",
				press: this._pressiona.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			this.setAggregation("_label", new Label({
			}).addStyleClass("sapUiSmallMargin"));
		},
		setValor: function (fValue) {
			this.setProperty("click", fValue, true);
			this.getAggregation("_label").setText(fValue);
		},

		_pressiona : function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();
			var i = this.getProperty("click");
			this.setValor(parseInt(i) + 1);

		},
		renderer : function (oRM, oControl) {
			oControl.getAggregation("_label").setText(oControl.getClick());
			
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass("myAppDemoWTProductRating");
			oRM.writeClasses();
			oRM.write(">");
			oRM.renderControl(oControl.getAggregation("_button"));
			oRM.renderControl(oControl.getAggregation("_label"));
			oRM.write("</div>");
		}
	});
});