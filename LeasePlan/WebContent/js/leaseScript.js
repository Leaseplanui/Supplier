$(document).ready(function() {
	$.get("header.html", function(data) {
		$("#includeHeader").html(data);
	});

	$.get("footer.html", function(data) {
		/*$.get("Footer.html", function(data) {*/
		$("#includeFooter").html(data);
	});

	/*initials*/


	$('#example-getting-started').multiselect({
		nonSelectedText: 'Brandstof'
	});

	$('#example-getting-started1').multiselect({
		nonSelectedText: 'Carrosserie'
	});


	$('#example-getting-started2').multiselect({
		nonSelectedText: "Bijtelling"
	});

	$('[data-toggle="tooltip"]').tooltip();   


	$("#hide").click(function() {
		$("#uniquename").fadeToggle();
	});

	$("#hide1").click(function() {
		$("#uniquename1").fadeToggle();
	});

	$("#doMore").click(function() {
		$("#searchMore").fadeToggle();
	});

	$("#doMore1").click(function() {
		$("#searchMore1").fadeToggle();
		showText: 'Show more';
		hideText: 'Show less';
	});



	$("input[name='dateSelection']").click(function () {
		if ($("#chkYes").is(":checked")) {
			$("#exPeriod").show();
			$("#expDate").hide();
		} else {
			$("#expDate").show();
			$("#exPeriod").hide();
		}
	});


	$("#modalId").click(function(e) {
		e.preventDefault();
		$('#myModal').modal({
			keyboard: true
		})
	});

	$("#closeId").click(function () {
		   $('#myModal').modal('toggle');
		  /* $("#formPartCompanySelect").fadeToggle();*/
		   $("#formPartCompanySelect").show();
		   $("#selectedCompany").show();
		   $("#formPartAdministration").show();
		   $("#popupButtonHolderID").hide();
		   $("#accountWrap").show();
		   $("#formPartSubmit").show();
		   
		   $('#progressBar').css("width", "70%")
		});
	
	
	$('#progressBar').css("width", "20%");
	
	
	/*if ($("#chkYes").is(":"))
	{
		$("#expirationDate").show();
		$("#startDate").hide();
		$("#endDate").hide();
	    }*/

	/*if ($("#chkYes1").is(":checked"))
	{
	$("#expirationDate").show();		
	$("#startDate").hide();
	$("#endDate").hide();

	}*/




});


function showValue(newValue)
{
	document.getElementById("Looptijd").innerHTML=newValue;


}

function showValueforAantal(newValue)
{
	document.getElementById("aantalId").innerHTML=newValue;
}

function showValueforMaximaal(newValue)
{
	document.getElementById("maximaalId").innerHTML=newValue;
}

