var navigationJson={
                1:{"page":"Checkout1.html","lineBorder":"#businessCheckOut"},
                2:{"page":"Checkout2.html","lineBorder":"#contactCheckOut"},
                3:{"page":"Checkout3.html","lineBorder":"#paymentCheckOut"},
                4:{"page":"Checkout4.html","lineBorder":"#riderCheckOut"},
                5:{"page":"Checkout5.html","lineBorder":"#overviewCheckOut"}
                                
}
$(document).ready(function() {

  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });

})
var $cardInput = $('.input-fields input');

$('.next-btn').on('click', function(e) {

  $cardInput.removeClass('warning');

  $cardInput.each(function() {    
     var $this = $(this);
     if (!$this.val()) {
       $this.addClass('warning');
     }
  })
});

function navigate()
{
var pageIndex=Number($(".next-btn")[0].value);
var pagetoLoad=navigationJson[pageIndex+1]["page"];
$("#roadmapdiv").load(pagetoLoad, function() {
                $(".next-btn")[0].value=Number(pageIndex)+1;
                $(navigationJson[pageIndex]["lineBorder"]).addClass("active");
                
});
}

function navigatebck()
{
                var pageIndex=Number($(".next-btn")[0].value);
                var pagetoLoad=navigationJson[pageIndex-1]["page"];
                $("#roadmapdiv").load(pagetoLoad, function() {
                                $(".next-btn")[0].value=Number(pageIndex)-1;
                                $(navigationJson[pageIndex-1]["lineBorder"]).removeClass("active");
                                
                });
}
