$(document).ready(function() {
	 	$.get("header.html", function(data) {
		    $("#includeHeader").html(data);
		});
	 	
		$.get("footer.html", function(data) {
	 	/*$.get("Footer.html", function(data) {*/
		    $("#includeFooter").html(data);
		});
	
	 	
	 	
	
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

