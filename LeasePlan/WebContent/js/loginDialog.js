// Get the modal
$(function(){
  var LoginDialogAreaModal = $(".loginDialog");
  var modal1 = $(".registerDialog");
  var modal2 = $(".forgotpwdDialog");
  var modal3 = $(".activateLinkDialog");
/*
  // Get the <span> element that closes the login modal
  var span = document.getElementsByClassName("loginDialog-close")[0];
if(span)
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    $(LoginDialogAreaModal).css("display", "none");   
  }

  // Get the <span> element that closes the register modal
  var span1 = document.getElementsByClassName("registerDialog-close")[0];
  if(span1)
  // When the user clicks on <span> (x), close the modal1
  span1.onclick = function() {
    $(modal1).css("display", "none");    
  }

  // Get the <span> element that closes the forgotpwd modal
  var span2 = document.getElementsByClassName("forgotpwdDialog-close")[0];
  if(span2)
  // When the user clicks on <span> (x), close the modal2
  span2.onclick = function() {
    $(modal2).css("display", "none");    
  }

  // Get the <span> element that closes the activationLink modal
  var span3 = document.getElementsByClassName("activateLinkDialog-close")[0];
  if(span3)
  // When the user clicks on <span> (x), close the modal3
  span3.onclick = function() {
    $(modal3).css("display", "none");    
  }
*/
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == LoginDialogAreaModal) {
        $(LoginDialogAreaModal).css("display", "none");
      }
  }

  window.doLogin = function() {
	  setClickCalls();
    $(LoginDialogAreaModal).css("display", "block");
  }
  
  window.openMyProfile = function() {
	  $("#idContentDiv").load("myProfile.html");
  }

  window.openMyCompany = function() {
	  $("#idContentDiv").load("Company.html");
  }
  
  window.openMyContract = function() {
	  $("#idContentDiv").load("Contract.html");
  }
  
  window.openMyExpiration = function() {
	  $("#idContentDiv").load("Expiration.html");
  }
  
  
  window.doRegister = function() {
	  $("#idregisterDialog").load("RegistrationBasic.html");
    $(modal1).css("display", "block");
    $(LoginDialogAreaModal).css("display", "none");
  }
  window.doSubmitBasicRegisterReload = function (){
	  localStorage.setItem("UserRegistered", "X");
	  window.location.replace("search.html");
  }

  window.doRelogin = function() {
    $(modal1).css("display", "none");
    $(LoginDialogAreaModal).css("display", "block");
  }
  
  window.navToForgotpwd = function() {
		 $("#idForgotPassword").load("ForgotPassword.html");
		 $(modal2).css("display", "block");
	     $(LoginDialogAreaModal).css("display", "none");
  }

  window.navToActivation = function() {
		 $("#idActivateLink").load("ActivationLink.html");
		 $(modal3).css("display", "block");
	     $(LoginDialogAreaModal).css("display", "none");
  }

  window.forgotpwdToLoginPage = function() {
     $(modal2).css("display", "none");
     $(LoginDialogAreaModal).css("display", "block");
  }

  window.activateLinkToLoginPage = function() {
     $(modal3).css("display", "none");
     $(LoginDialogAreaModal).css("display", "block");
  }

});
function setClickCalls()
{
	  var LoginDialogAreaModal = $(".loginDialog");
	  var modal1 = $(".registerDialog");
	  var modal2 = $(".forgotpwdDialog");
	  var modal3 = $(".activateLinkDialog");

	  // Get the <span> element that closes the login modal
	  var span = document.getElementsByClassName("loginDialog-close")[0];
	if(span)
	  // When the user clicks on <span> (x), close the modal
	  span.onclick = function() {
	    $(LoginDialogAreaModal).css("display", "none");   
	  }

	  // Get the <span> element that closes the register modal
	  var span1 = document.getElementsByClassName("registerDialog-close")[0];
	  if(span1)
	  // When the user clicks on <span> (x), close the modal1
	  span1.onclick = function() {
	    $(modal1).css("display", "none");    
	  }

	  // Get the <span> element that closes the forgotpwd modal
	  var span2 = document.getElementsByClassName("forgotpwdDialog-close")[0];
	  if(span2)
	  // When the user clicks on <span> (x), close the modal2
	  span2.onclick = function() {
	    $(modal2).css("display", "none");    
	  }

	  // Get the <span> element that closes the activationLink modal
	  var span3 = document.getElementsByClassName("activateLinkDialog-close")[0];
	  if(span3)
	  // When the user clicks on <span> (x), close the modal3
	  span3.onclick = function() {
	    $(modal3).css("display", "none");    
	  }
	
}

function displayCheckout1() {
	$("#idContentDiv").load("Checkout1.html");
}

function displayCheckout2() {
	$("#idContentDiv").load("Checkout2.html");
}

function displayCheckout3() {
	$("#idContentDiv").load("Checkout3.html");
}

function displayCheckout4() {
	$("#idContentDiv").load("Checkout4.html");
}

function displayCheckout5() {
	$("#idContentDiv").load("Checkout5.html");
}
function showPassword() {

 var ele = document.getElementById('pwd');
 var icon = document.getElementById('toggler-ico');
 if(ele.type == "password")
 {
  ele.type="text";
  icon.src="images/eye-close.JPG"; 
 }
 else
 {
  ele.type="password";
  icon.src="images/eye-open.JPG";
  }

}