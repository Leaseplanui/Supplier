//Display register page2 div element based on select element

$(function(){

   $('#leaseSelect').change(function(){
        var selection = $(this).val();
        if(selection == "leasecar"){
         $(".accessLeaseCar").show();  $(".displayFuelCardNo").show(); $(".supplier").hide();$(".submitButton").show();
        }
        else if(selection == "supplier"){
         $(".supplier").show(); $(".accessLeaseCar").hide();$(".submitButton").show();
        }
else {
         $(".supplier").hide(); $(".accessLeaseCar").hide();$(".submitButton").hide();
        }
    });

   $('#fuelOrderSelect').change(function(){
        var selection = $(this).val();
        if(selection == "fuelCard"){
         $(".displayFuelCardNo").show(); $(".displayOrderContractNo").hide();$(".submitButton").show();
        }
        else if(selection == "orderContractNo"){
         $(".displayOrderContractNo").show(); $(".displayFuelCardNo").hide();$(".submitButton").show();
        }
else
{ $(".displayOrderContractNo").hide(); $(".displayFuelCardNo").hide();$(".submitButton").show();
}

 });

$('.submitButton').click(function(){
      
alert("Add Validations for mandatory fields");




    });


 });






