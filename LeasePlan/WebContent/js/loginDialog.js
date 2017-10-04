// Get the modal
$(function(){
  var modal = $(".loginDialog");
  var modal1 = $(".registerDialog");
  var modal2 = $(".forgotpwdDialog");
  var modal3 = $(".activateLinkDialog");

  // Get the <span> element that closes the login modal
  var span = document.getElementsByClassName("loginDialog-close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $(modal).css("display", "none");   
  }

  // Get the <span> element that closes the register modal
  var span1 = document.getElementsByClassName("registerDialog-close")[0];

  // When the user clicks on <span> (x), close the modal1
  span1.onclick = function() {
    $(modal1).css("display", "none");    
  }

  // Get the <span> element that closes the forgotpwd modal
  var span2 = document.getElementsByClassName("forgotpwdDialog-close")[0];

  // When the user clicks on <span> (x), close the modal2
  span2.onclick = function() {
    $(modal2).css("display", "none");    
  }

  // Get the <span> element that closes the activationLink modal
  var span3 = document.getElementsByClassName("activateLinkDialog-close")[0];

  // When the user clicks on <span> (x), close the modal3
  span3.onclick = function() {
    $(modal3).css("display", "none");    
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        $(modal).css("display", "none");
      }
  }

  window.doLogin = function() {
    $(modal).css("display", "block");
  }

  window.doRegister = function() {
    $(modal1).css("display", "block");
    $(modal).css("display", "none");
  }

  window.doRelogin = function() {
    $(modal1).css("display", "none");
    $(modal).css("display", "block");
  }
  
  window.navToForgotpwd = function() {
     $(modal).css("display", "none");
     $(modal2).css("display", "block");
  }

  window.navToActivation = function() {
     $(modal).css("display", "none");
     $(modal3).css("display", "block");
  }

  window.forgotpwdToLoginPage = function() {
     $(modal2).css("display", "none");
     $(modal).css("display", "block");
  }

  window.activateLinkToLoginPage = function() {
     $(modal3).css("display", "none");
     $(modal).css("display", "block");
  }

});


function showPassword() {

 var ele = document.getElementById('pwd');
 var icon = document.getElementById('toggler-ico');
 if(ele.type == "password")
 {
  ele.type="text";
  icon.src="images/eye-close.jpg"; 
 }
 else
 {
  ele.type="password";
  icon.src="images/eye-open.jpg";
  }

}
