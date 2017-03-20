var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}
function save_code(){
  //save


  /*

  var sid = document.getElementById("StudentID");

    $.ajax({
	url: 'http://localhost/qrcode_admin/save_id.php',
	type: 'POST',
	data: {id_number: sid},
	success: function(response) {
                  console.log(response);
		alert("Saved!");

	}
});

  */

  var modalbutton1=document.getElementById("close");
  modalbutton1.click();
  startScan();
}
function startScan() {

    cordova.plugins.barcodeScanner.scan(


        /*function (result) {
            var s = "Id number: <div id=StudentID>" + result.text + "</div><br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;
            var modalbutton=document.getElementById("modal1");
            modalbutton.click();
        }*/

        function (result) {
            var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;
            var modalbutton=document.getElementById("modal1");
            modalbutton.click();
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}