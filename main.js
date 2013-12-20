document.addEventListener("deviceready",function()
{
	cordova.plugins.barcodeScanner.scan(
	function (result) {
		$("#results").html("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
	}, 
	function (error) {
		$("#results").html("Scanning failed: " + error);
	});
}, false);