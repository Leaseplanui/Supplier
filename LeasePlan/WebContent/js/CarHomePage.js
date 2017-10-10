var property1=[{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789",
		"status":["images/hg.gif","images/MailOut.gif","images/FollowUp.gif"]
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"77777"
	},{
		"images":"images/red_car.jpg",
		"name":"Future Generation",
		"description":"Enhanced",
		"value":"88888"
	}];
	var property2=[{
		"images":"images/red_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/red_car.jpg",
		"name":"Harry ZandWjke",
		"description":"new cars",
		"value":"88888"
	},{
	     "images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	}];
	var property3=[{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	}];
	var property4=[{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456",
		"status":["images/hg.gif","images/Mailout.gif","images/FollowUp.gif"]
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	}];
	var property5=[{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
		
	},
	{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456",
		"status":["images/MailOut.gif","images/hg.gif","images/FollowUp.gif","images/MailIn.gif"]
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	}];
	var property6=[{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	}];
	var property7=[{
		
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456",
		"status":["images/delivery.gif","images/MailOut.gif","images/hg.gif","images/FollowUp.gif","images/MailIn.gif"]
		},
		{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789",
		"status":["images/delivery.gif","images/MailOut.gif","images/hg.gif","images/FollowUp.gif","images/MailIn.gif"]
	}];
	var property8=[
		{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	},
	{
		"images":"images/blue_car.jpg",
		"name":"Lease Plan Nede",
		"description":"Lawman & Parq",
		"value":"546789"
	},{
		"images":"images/gray_car.jpg",
		"name":"Boyd ZandWjke",
		"description":"Stern Nieuwege",
		"value":"123456"
	}];

var carJson={
	    "Column1":property1,
		 "Column2":property2,
		"Column3":property3,
		"Column4":property4,
		"Column5":property5,
		"Column6":property6,
		"Column7":property7,
		"Column8":property8
	

};



$(function() {
	
	
	// CarShowCase();
});
$( window ).load(function() {
CarShowCase();
});
function CarShowCase()
{$( "#Contentdiv" ).load( "responsivegrid.html", function() {
	  for(var j=1;j<9;j++) 
	    {
	    	for(var k=0;k<carJson["Column"+j].length;k++)
	    	{
	    		var statusDiv=""
	    			if(carJson["Column"+j][k]["status"]){
	    			for(var st=0;st<carJson["Column"+j][k]["status"].length;st++)
	    				{
	    				statusDiv=statusDiv+"<img src=\""+carJson["Column"+j][k]["status"][st]
	    				          +  "\">";
	    				}
	    					
	    			}
	    			if(carJson["Column"+j][k]["images"])
	    		var carInnerHTML="<div class=\"carSection\">"
	    			+"<div class=\"inlinecarSection\" id=\"inlinecarSection"+"Column"+j+k+"\">"
	    			+statusDiv+"</div>"
	     +"<img src=\""+carJson["Column"+j][k]["images"]+"\" class=\"carImage\" alt=\"car\">"
	    +"<p style=\"text-indent:7px;\">"+carJson["Column"+j][k]["name"]+"</p>"
	    +"<p style=\"text-indent: 7px;\">"+carJson["Column"+j][k]["description"]+"</p>"
	    +"<p style=\"text-align: center;\">"+carJson["Column"+j][k]["value"]+"</p>"
	    +"</div>";
	    
	     $( "#column_cars"+j ).append(carInnerHTML) ;
	     if(statusDiv)
	    	 {
	    	 $("#inlinecarSectionColumn"+j+k).css({float:'right'});
	    	 
	    	 }
	    	}
	    	
	    }
	    
	  /*  $( "#column2_cars" ).append(j) ;
	    $( "#column2_cars" ).append(j) ;
	    $( "#column2_cars" ).append(j) ;*/	
});}


function HelpFaq()
{$( "#Contentdiv" ).load( "HelpFAQ.html"  )};

function ContactTraining()
{$( "#Contentdiv" ).load( "ContactTraining.html"  )

   // $("Contentdiv").empty();	
};

function quotation()
{$( "#Contentdiv" ).load( "quotation.html"  )};

