//Display My Profile

function showEditSection()
{

$(".editAccountSection").show();

 

$("#myEditAccount").addClass("orangeBackground") 

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

 
$("#setNewPwdSection").load("/SetNewPassword.html");
}

//Display Change Email address Section
function showChangeEmailSection() {

$(".changeEmailSection").show();

 $(".editAccountSection").hide();

 

}

function navToEditAccount() {

$(".editAccountSection").show();

 $(".setNewPwdSection").hide();

 $(".changeEmailSection").hide();

  

}