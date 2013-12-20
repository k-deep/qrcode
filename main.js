document.addEventListener("deviceready",function()
{
	var scanner = cordova.require("cordova/plugin/BarcodeScanner");
	// 	cordova.plugins.barcodeScanner
	scanner.scan(
	function (result) {
		document.getElementById("results").innerHTML = "We got a barcode\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled;
	}, 
	function (error) {
		document.getElementById("results").innerHTML = "Scanning failed: " + error;
	});
}, false);