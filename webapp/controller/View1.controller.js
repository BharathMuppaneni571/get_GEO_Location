sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("get_GEO_Location.controller.View1", {
		getLocation: function() {
			getlocation();
		}
	});
});