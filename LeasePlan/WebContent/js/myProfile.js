//Display My Profile

function showEditSection()
{
$("#editAccountSection").show();

$("#myEditAccount").addClass("orangeBackground"); 

$("#mySavedCars").removeClass("orangeBackground");

$("#myOrders").removeClass("orangeBackground");
}

function showSavedCars()
{
$(".editAccountSection").hide();

 $(".setNewPwdSection").hide();

 $(".changeEmailSection").hide();

$("#mySavedCars").addClass("orangeBackground");

$("#myEditAccount").removeClass("orangeBackground");

$("#myOrders").removeClass("orangeBackground");
}

function showOrders()
{
$(".editAccountSection").hide();

 $(".setNewPwdSection").hide();

 $(".changeEmailSection").hide();

$("#myOrders").addClass("orangeBackground");

$("#myEditAccount").removeClass("orangeBackground");

$("#mySavedCars").removeClass("orangeBackground");
}

//Display Set New Password Section
function showSetNewPwdSection() {
$(".editAccountSection").hide(); 
$(".setNewPwdSection").show();
}

//Display Change Email address Section
function showChangeEmailSection() {

$(".changeEmailSection").show();
 $(".editAccountSection").hide();
}

//Back function
function navToEditAccount() {

$(".editAccountSection").show();

 $(".setNewPwdSection").hide();

 $(".changeEmailSection").hide();
}
//Display Register Page2
function navToRegistration2() {
  $("#idContentDiv").load("RegisterPage2.html");
}
function showCurrentPassword() {

	 var ele = document.getElementById('currentpwd');
	 var icon = document.getElementById('currentpwd-toggler-ico');
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

	function showNewPassword() {

	 var ele = document.getElementById('newpwd');
	 var icon = document.getElementById('newpwd-toggler-ico');
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

	function showYourPassword() {

	 var ele = document.getElementById('yourpwd');
	 var icon = document.getElementById('yourpwd-toggler-ico');
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
