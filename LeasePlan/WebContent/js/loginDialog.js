// Get the modal
$(function(){
	
	$.get("Footer.html", function(data) {
	    $("#footerDiv").html(data);
	});
	$.get("Footer.html", function(data) {
	    $("#footerDiv1").html(data);
	});
	
		
	$.get("Header.html", function(data) {
	    $("#HeaderDiv").html(data);
	   /* var span = document.getElementsByClassName("loginDialog-close")[0];

	    // When the user clicks on <span> (x), close the modal
	    span.onclick = function() {
	      $(modal).css("display", "none");
	    }*/
	});
	var span = document.getElementsByClassName("loginDialog-close")[0];
if(span)
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      $(modal).css("display", "none");
    }

  var modal = $(".loginDialog");

  // Get the <span> element that closes the modal
  

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        $(modal).css("display", "none");
      }
  }

  window.doSomething = function() {
    $(modal).css("display", "block");
  }
});
