sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/HBox",
	"sap/m/Input",
	"/sap/m/Button"
], function (Control, HBox, Input, Button) {
	"use strict";
	return Control.extend("theo.dev.geolocation.control.FormBusca", {
		metadata: {
			properties: {
				id: {
					type: 'string'
				}
			},
			aggregations: {
				_form: {
					type: "sap.ui.core.Control",
					multiple: false,
					visibility: "hidden"
				}
			},
			events: {
				busca: {},
				buscaEndereco: {}
			}
		},
		init: function () {

			this.setAggregation("_form", new HBox({
				items: [
					new Input("_partida", {
						placeholder: "Partida",
						liveChange: this._buscaEndereco.bind(this)
					}),
					new Input("_destino", {
						placeholder: "Destino"
					}),
					new Button("_pesquisar", {
						text: "Buscar...",
						press: this._busca.bind(this)
					})
				]
			}));

		},

		_buscaEndereco: function (oEvent) {
			this.fireEvent("buscaEndereco");
		},

		_busca: function (evt) {

			this.fireEvent("busca");

		},

		renderer: function (oRM, oControl) {

			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.writeClasses();
			oRM.write(">");
			oRM.renderControl(oControl.getAggregation("_form"));
			oRM.write("</div>");
		}
	});
});