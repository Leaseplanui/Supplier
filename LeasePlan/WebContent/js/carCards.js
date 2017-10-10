$(function() {
  var loUl = document.createElement("ul");
  addClass(loUl, "carShowcaseUl");
  document.getElementById("idCardContainerDiv").appendChild(loUl);

  var laCards = [{
    image: "images/gray_car.jpg",
    name: "BMW i3",
    description: "Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden.",
    price: "250",
    unit: "&euro;",
    highlightText: "New Model",
    color: ["red", "maroon", "blue"],
    priceDetails: "Ideal Voor Lange afstanden."
  }, {
    image: "images/red_car.jpg",
    name: "BMW i3",
    description: "Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden.",
    price: "250",
    unit: "&euro;",
    color: ["white", "black", "blue"],
    priceDetails: "Ideal Voor Lange afstanden."
  }, {
    image: "images/blue_car.jpg",
    name: "BMW i3",
    description: "Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden.",
    price: "250",
    unit: "&euro;",
    color: ["white", "black"],
    priceDetails: "Ideal Voor Lange afstanden."
  }, {
    image: "images/blue_car.jpg",
    name: "BMW i3",
    description: "Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden. Ideal Voor Lange afstanden.",
    price: "250",
    unit: "&euro;",
    highlightText: "Nice Car",
    priceDetails: "Ideal Voor Lange afstanden."
  }];

  for (var i = 0; i < laCards.length; i++) {
    var loLi = addCard(laCards[i]);
    loUl.appendChild(loLi);
  }

  function addClass(ioElement, isClassName) {
    if (ioElement) {
      ioElement.className += ioElement.className ? isClassName : isClassName;
    }
  }

  function addCard(ioCard) {
    //Create the Li
    var roLi = document.createElement("li");
    addClass(roLi, "carShowcaseLi");

    //Create Content Div
    var loContentMain = document.createElement("div");
    addClass(loContentMain, "carShowcaseContentMain");
    roLi.appendChild(loContentMain);

$( loContentMain ).click(function() {

	  $("#idContentDiv").load("PDP.html");
});
    //Create Image Container
    var loImageContainer = document.createElement("div");
    addClass(loImageContainer, "carShowcaseImgContainer");
    loContentMain.appendChild(loImageContainer);

    if (ioCard.highlightText) {
      //Create Image Tagline
      var loImageTagline = document.createElement("div");
      loImageTagline.innerHTML = "New Model";
      addClass(loImageTagline, "carShowcaseImgTagline");
      loImageContainer.appendChild(loImageTagline);
    }

    //Create Image
    var loImage = document.createElement("img");
    addClass(loImage, "carShowcaseImage");
    loImage.style.height = "100%";
    loImage.style.width = "100%";
    loImage.setAttribute("src", ioCard.image);
    loImageContainer.appendChild(loImage);

    //Create Detail Container
    var loDetailContainer = document.createElement("div");
    addClass(loDetailContainer, "carShowcaseDetailContainer");
    loContentMain.appendChild(loDetailContainer);

    var loCarName = document.createElement("div");
    loCarName.innerHTML = ioCard.name;
    addClass(loCarName, "carShowcaseBlockHeaderText");
    loDetailContainer.appendChild(loCarName);

    var loCarDescription = document.createElement("div");
    loCarDescription.innerHTML = ioCard.description;
    addClass(loCarDescription, "carShowcaseBlockTextDescription");
    loDetailContainer.appendChild(loCarDescription);

    if (ioCard.color) {
      //Add Color Line
      var loCarColorsDiv = document.createElement("div");
      addClass(loCarColorsDiv, "carShowcaseCarColorDiv");
      loDetailContainer.appendChild(loCarColorsDiv);

      //Add Color Text
      var loCarColorsText = document.createElement("span");
      loCarColorsText.innerHTML = "Available in Colors:";
      addClass(loCarColorsText, "carShowcaseCarColorText");
      loCarColorsDiv.appendChild(loCarColorsText);

      for (var i = 0; i < ioCard.color.length; i++) {
        var loColors = document.createElement("div");
        addClass(loColors, "carShowcaseCarColor");
        loColors.style.background = ioCard.color[i];
        loCarColorsDiv.appendChild(loColors);
      }
    }

    var loPrice = document.createElement("div");
    loPrice.innerHTML = ioCard.unit + " " + ioCard.price;
    addClass(loPrice, "carShowcaseBlockTextPrice");
    loDetailContainer.appendChild(loPrice);

    var loPriceDetails = document.createElement("div");
    loPriceDetails.innerHTML = ioCard.priceDetails;
    addClass(loPriceDetails, "carShowcaseBlockTextPriceDetails");
    loDetailContainer.appendChild(loPriceDetails);

    return roLi;
  }
});
