// Get the modal
$(function(){
  var modal = $(".loginDialog");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("loginDialog-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $(modal).css("display", "none");
  }

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
