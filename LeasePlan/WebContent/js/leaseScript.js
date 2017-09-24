$(document).ready(function() {
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

