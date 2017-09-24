
$('#chat').click(function(){
	alert("ok");
	});

 var menu = new Menu;
/*	Back Top Link */
var offset = 50;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
    } else {
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
})


//top bar icons*/
$(".home-icon").prepend("<span aria-hidden='true' class='glyphicon glyphicon-home'></span> ");
$(".chat-icon").prepend("<span aria-hidden='true' class='glyphicon glyphicon-comment'></span> ");
$(".contact-icon").prepend('<span aria-hidden="true" class="glyphicon glyphicon-envelope"></span> ');
$(".help-icon").prepend('<span aria-hidden="true" class="glyphicon glyphicon-question-sign"></span> ');
$(".part-icon").prepend("<span aria-hidden='true' class='glyphicon glyphicon-home'></span> ");

//
////footer position at bottom
//function footerFixed() {
//    var bodyHeight = $("body").height();
//    var vwptHeight = $(window).height();
//    if (vwptHeight > bodyHeight) {
//        $(".footer").css("position", "absolute").css("bottom", 0);
//    } else {
//        $(".footer").css("position", "static").css("bottom", 0);
//    }
//    setTimeout(footerFixed, 10);
//}
//footerFixed();

//my profile page
$(".purchase-options").hide();
$(".purchase-order").click(function() {
    if ($(this).is(":checked")) {
        $(".purchase-options").show();
    } else {
        $(".purchase-options").hide();
    }
});

$(".specify-input").hide();
$(".other-specify").click(function() {
    if ($(this).is(":checked")) {
        $(".specify-input").show();
    } else {
        $(".specify-input").hide();
    }
});



//Orders-enter-from-cart
/*add items*/
$('.selectValue').change(function(event) {
    var selectNumber = $(this).val();
	$('.storeValue').html(selectNumber);
});
	
	
$('.add-items').on("click", function(e) {
	var selectNumber = $('.storeValue').html();
	for (i = 0; i < selectNumber; i++) {
	var lineItemHtml = $('#lineItem1').html();
	var $div = $('div[id^="lineItem"]:last');
	var num = parseInt($div.prop("id").match(/\d+/g), 10) + 1;
	var $lineItem = $div.clone().prop('id', 'lineItem' + num).addClass('show');
	$div.after($lineItem.html(lineItemHtml));
	}
});



/*personal notes*/
$(".my-personal-notes").hide();
$("body").on("click", "input:radio[name='specialshippping']", function() {
    if ($(this).attr("value") == "yes") {
        $(this).closest('.line-item').find('.my-personal-notes').show();
    } else {
        $(this).closest('.line-item').find('.my-personal-notes').hide();
    }
});

/*Remove line item*/
$("body").on('click', '.removeItem', function() {
    alert("ok");
    $(this).closest('div.line-item').remove();
});


//Part Search
$('.select-part-search').change(function() {
    var theVal = $(this).val();
    switch (theVal) {
        case '0':
            $('.part-search-btn, .part-search').prop('disabled', false);
            break;
        case '1':
            $('.part-search-btn, .part-search').prop('disabled', true);
            break;
        case '2':
            $('.part-search-btn, .part-search').prop('disabled', true);
            break;
        case '3':
            $('.part-search-btn, .part-search').prop('disabled', true);
            break;
    }
});


//Phone validations
$('.txtPhone').keyup(function() {
    $('.alert-warning').hide();
    var inputVal = $(this).val();
    var numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
    if(!numericReg.test(inputVal) && $(this).val().length !== 0) {
        $(this).after('<div class="alert alert-warning mt5">Enter Numeric Value</div>');
    }
});


//email validation
$('.checkEmails').hide();
$('.emaillimit').hide();
function checkEmail(email) {
var regExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return regExp.test(email);
}

$('.emails').keyup(function(e){
	var emails = $(".emails").val();
	var emailArray = emails.split(/,|;/);
    var hasErrors=false;
    var errorMessage="";
	for(i = 0; i <= (emailArray.length - 1); i++){
		if(checkEmail(emailArray[i])){
			//Do what ever with the email.
		}else{
			hasErrors=true;
			errorMessage+="invalid email: " + emailArray[i]+"\n\r";
		}
	}
	if(hasErrors && $('.emails').val().length !== 0){
		$('.checkEmails').show();
		$('.checkEmails').text(errorMessage);
	}
	else{
		$('.checkEmails').hide();
	}
	if(emailArray.length > 3){
		var maxLenght = (($(".emails").val().length) - 1);
		$(".emails").attr('maxlength',maxLenght);
		$('.emaillimit').show();
	}
	else{
		$('.emaillimit').hide();
		$(".emails").removeAttr('maxlength',maxLenght);
	}
});


//customer price validation
$('.customer-price').keyup(function() {
    $('.alert-warning').hide();
    var inputVal = $(".customer-price").val();
    var emailReg = /^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
    if(!emailReg.test(inputVal) && $(this).val().length !== 0) {
        $(this).after('<div class="alert alert-warning mt5">Enter Numeric Value</div>');
    }
});


//Advance filters
$(".advance-filters").hide();
$(".advance-filters-btn").click(function() {
	$(this).text($(this).text() == 'Show Advanced Filters' ? 'Hide Advanced Filters' : 'Show Advanced Filters'); 
    $(".advance-filters").slideToggle("fast");
});


//In Support request enter page
  //Request Type
$('.request-options').hide();
$('.request-other').hide();
$('#request-options').change(function () {
	$('#part-options, #quote-options, #order-options, #shipment-options').prop('selectedIndex',0);
    var selection = $('#request-options').prop('selectedIndex');
    $('.request-options, .part-options, .quote-options, .order-options, .shipment-options, .request-other').hide();
	$('.topic-' + selection).show();    
});

//Part Options
 $('.part-options').hide();
$('#part-options').change(function () {
    var selection = parseInt($('#part-options').val());
	$('.part-options').hide();
    switch (selection) {
        case 1:
            $('#TAS').show();
            break;
        case 2:
            $('#MSDS').show();
            break;
        default:
             $('.part-options').hide();
            break;    
    } 
});


//Quote Options
$('.quote-options').hide();
$('#quote-options').change(function () {
    var selection = parseInt($('#quote-options').val());
	$('.quote-options').hide();
    switch (selection) {
        case 1:
            $('#extend-q').show();
            break;
        case 2:
            $('#add-sn').show();
            break;
		case 3:
            $('#tech-an').show();
            break;
		case 4:
            $('#quote-other').show();
            break;
        default:
             $('.quote-options').hide();
            break;    
    } 
});

//Order Options
$('.order-options').hide();
$('#order-options').change(function () {
    var selection = parseInt($('#order-options').val());
	$('.order-options').hide();
    switch (selection) {
        case 1:
            $('#price-n').show();
            break;
        case 2:
            $('#schdule-i').show();
            break;
		case 3:
            $('#grounded-a').show();
            break;
		case 4:
            $('#additional-sn').show();
            break;
		case 5:
            $('#smal').show();
            break;
		case 6:
            $('#technical-an').show();
            break;
		case 7:
            $('#order-other').show();
            break;
        default:
             $('.order-options').hide();
            break;    
    } 
});

//Order Options
$('.shipment-options').hide();
$('#shipment-options').change(function () {
    var selection = parseInt($('#shipment-options').val());
	$('.shipment-options').hide();
    switch (selection) {
        case 1:
            $('#missing-pw').show();
            break;
        case 2:
            $('#paperwork-cn').show();
            break;
		case 3:
            $('#ship-short').show();
            break;
		case 4:
            $('#incorrect-sp').show();
            break;
		case 5:
            $('#overshipment').show();
            break;
		case 6:
            $('#shipment-return').show();
            break;
		case 7:
            $('#shipment-other').show();
            break;
        default:
             $('.shipment-options').hide();
            break;    
    } 
});


//Add Note/Attachment
$('.note-container').hide();
$('.add-attachment').click(function(){
$('.note-container').show();
$(this).hide();
});


//Step1 Page
$('.ops').hide();
$('.uct').change(function(){
if($(this).val() == "Other or Unknown"){
	$('.ops').show();
	}
	else{
	$('.ops').hide();
	}	
});

if($('.uct').val() == "Other or Unknown"){
	$('.ops').show();
	}
	else{
	$('.ops').hide();
	}


//Date picker
$(function(){
    $('.date-picker').datepicker({
        format: "dd M yyyy",
        startDate: '+0d',
        autoclose: true
    });
});


//collapse menu
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('i.indicator')
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


//Ship To Pages
$(function(){
$('.freight-forwarder').hide();
$('input[name="freight-forwarder"]').click(function(){
	if($(this).attr("value")=="no"){
		$('.freight-forwarder').hide();
	}
	if($(this).attr("value")=="yes"){
		$('.freight-forwarder').show();
	}
});

$('input[name="freight-forwarder"]').each(function(){
if($(this).attr('checked', true) && ($(this).attr("value")=="yes")){
		$('.freight-forwarder').show();
}
});


$(".enterAddress").change(function () {
    if ($(this).val() == "Enter New Address") {
        $('#myModal').modal('show');
		$(this).val("Address");
      }
});

//Carrier Preferences Priority Orders
function cppOrders(){
$('#field1, #field2, #field3, #field4, #field5').hide();
$('.cpp-orders').change(function(event){
	$(this).closest(".panel").find('#field1, #field2, #field3, #field4, #field5').hide();
	if($(this).val() == 'UPS' || $(this).val() == 'FedEx' || $(this).val() == 'DHL') {
		$(this).closest(".panel").find('#field1, #field2, #field3').show();
	}
	if($(this).val() == 'BAX' || $(this).val() == 'Freight Forwarder') {
		$(this).closest(".panel").find('#field1, #field2').show();
	}
	if($(this).val() == 'Airline') {
		$(this).closest(".panel").find('#field1').show();
	}
	if($(this).val() == 'Customer Pick Up') {
		$(this).closest(".panel").find('#field4, #field5').show();	
	}
	var exitIn=$(this).closest(".panel").find('.panel-collapse');
	if($(exitIn).hasClass('in')==false || $(this).val() == '-select-'){
		$(this).closest(".panel").find(".accordion-toggle").click();
	}	
});
}
cppOrders();

$('.cpp-orders').each(function(event){
	if($(this).val() == 'UPS' || $(this).val() == 'FedEx' || $(this).val() == 'DHL') {
		$(this).closest(".panel").find('#field1, #field2, #field3').show();
	}
	if($(this).val() == 'BAX' || $(this).val() == 'Freight Forwarder') {
		$(this).closest(".panel").find('#field1, #field2').show();
	}
	if($(this).val() == 'Airline') {
		$(this).closest(".panel").find('#field1').show();
	}
	if($(this).val() == 'Customer Pick Up') {
		$(this).closest(".panel").find('#field4, #field5').show();	
	}
});


$("#listAdd").click(function(){
	$("#list1 .options:selected").each(function(){
		$(this).remove().appendTo("#list2");
	});
	upDown();
	$("#list2").attr("size", parseInt($("#list2 option").length));
});

$("#listRemove").click(function(){
	$("#list2 .options:selected").each(function(){
		$(this).remove().appendTo("#list1");
	});
	upDown();
	$("#list2").attr("size", parseInt($("#list2 option").length));
});

$('.btn-updown').click(function(){
	var $op = $('#list2 option:selected'),
		$this = $(this);
	if($op.length){
		($this.val() == 'Up') ? 
			$op.first().prev().before($op) : 
			$op.last().next().after($op);
	}
});

function upDown(){
var countNumber = $("#list2 option").length;
$(".order-numbers li").remove();
for(var i=0;i<countNumber;i++){
   $(".order-numbers").append("<li>"+(i+1)+"</li>")
}
}
$("#list2").attr("size", parseInt($("#list2 option").length));
});


//step 1 based on the country select box
 $("#countDropdown").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $('select.switchable option').clone());
        }
        var id = $(this).val();
        var that = this;
        $("select.switchable").each(function () {
            var thisname = $(this).attr('name');
            var theseoptions = $(that).data('options').filter('.' + thisname + '_' + id);
            $(this).html(theseoptions);
        });
 });
 $('#countDropdown').trigger('change');
 
 
 //step 3 shipping profile Carrier Preferences Priority Orders
 $(".cpp-orders").change(function () {
        if ($(this).data('options') == undefined) {
            $(this).data('options', $(this).closest(".panel").find('select.switchable option').clone());
        }
        var id = $(this).val();
        var that = this;
        $(this).closest(".panel").find("select.switchable").each(function () {
            var thisname = $(this).attr('name');
            var theseoptions = $(that).data('options').filter('.' + thisname + '_' + id);
            $(this).html(theseoptions);
        });
 });
 $('.cpp-orders').trigger('change');
 
 
//Step 4 add address
$('.contactMethod, #mqSeries').hide();
$('#contactMethod').change(function () {
 var labelTxt = $('#contactMethod').val();
 $('.labelValue').text(labelTxt);
 $('.contactMethod, #mqSeries').hide();
 if($(this).val() == 'Email' || $(this).val() == 'SITA Code' || $(this).val() == 'ARINC Code' || $(this).val() == 'XML') {
	$('.contactMethod').show();
	}
	if($(this).val() == 'MQ Series') {
		$('#mqSeries').show();
	}
});

var labelTxt = $('#contactMethod').val();
 $('.labelValue').text(labelTxt);
 if($('#contactMethod').val() == 'Email' || $(this).val() == 'SITA Code' || $(this).val() == 'ARINC Code' || $(this).val() == 'XML') {
	$('.contactMethod').show();
	}
	if($('#contactMethod').val() == 'MQ Series') {
		$('#mqSeries').show();
	}
