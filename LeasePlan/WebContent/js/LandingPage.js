$(function() {
    
    if  (localStorage.getItem("UserRegistered") && localStorage.getItem("UserRegistered")=="X") {
    	$("#LgnLink").css("display","none");
    	$("#MyProfileLink").css("display","block");
    	
    }
    
  $('#idBrand').multiselect({
    buttonText: function(options, select) {
      if (options.length === 0) {
        return 'Choose a brand';
      }
      if (options.length === select[0].length) {
        return 'All selected (' + select[0].length + ')';
      } else {
        var labels = [];
        console.log(options);
        options.each(function() {
          labels.push($(this).val());
        });
        return labels.join(', ') + '';
      }
    }
  });
$(document).ajaxStart(function(){
    $("#loading").removeClass('hide');
}).ajaxStop(function(){
    $("#loading").addClass('hide');
});

  $('#idModelNo').multiselect({
    buttonText: function(options, select) {
      if (options.length === 0) {
        return 'Select Model';
      }
      if (options.length === select[0].length) {
        return 'All selected (' + select[0].length + ')';
      } else {
        var labels = [];
        console.log(options);
        options.each(function() {
          labels.push($(this).val());
        });
        return labels.join(', ') + '';
      }
    }
  });
  $('#idFuel').multiselect({
    buttonText: function(options, select) {
      if (options.length === 0) {
        return 'Choose a Fuel';
      }
      if (options.length === select[0].length) {
        return 'All selected (' + select[0].length + ')';
      } else {
        var labels = [];
        console.log(options);
        options.each(function() {
          labels.push($(this).val());
        });
        return labels.join(', ') + '';
      }
    }
  });
  $("#slider").slider();
  
  
  
});
function viewCars()
{
	  $("#idContentDiv").load("cards.html");


}

