

var PDP = {
  product: {
    key: "",
    text: "Volkswagen Touran",
    description: "1.4 TSI 7-DSG Comfortline Executive, Automaat, Navigatie, Panoramadak",
    variant: "Benzine",
    km: "72.444",
    year: "2013"
  },

  init: function() {
    this._oRootElement = document.createElement("div");
    this.addClass(this._oRootElement, "PDP");
  
    return this.render();
  },

  addClass: function(ioElement, isClassName) {
    if (ioElement) {
      ioElement.className += ioElement.className ? isClassName : isClassName;
    }
  },

  rerender: function() {
    var loNode = this.getRootElement();
    while (loNode.hasChildNodes()) {
      loNode.removeChild(loNode.lastChild);
    }

    this.render();
  },

  getRootElement: function() {
    return this._oRootElement;
  },

  render: function() {
    var roPDP = this.getRootElement();
    roPDP.appendChild(this.createSlideshow(this.product));
    roPDP.appendChild(this.createProductDescription(this.product));

    return roPDP;
  },

  createSlideshow: function(ioProduct) {
    var roSlideshow = document.createElement("div");
    this.addClass(roSlideshow, "PDPSlideshow");
    var loCarMainImage = document.createElement("img");
    this.addClass(loCarMainImage, "PDPCarMainImage");
    loCarMainImage.setAttribute("src", "images/PDPCar1.jpg");
    roSlideshow.appendChild(loCarMainImage);
    roSlideshow.appendChild(this.createSlideshowInformation(ioProduct));

    return roSlideshow;
  },

  createSlideshowInformation: function(ioProduct) {
    var roSlideshowInformation = document.createElement("div");
    this.addClass(roSlideshowInformation, "PDPSlideshowInformation");
    var loSlideshowInformationHeader = document.createElement("span");
    this.addClass(loSlideshowInformationHeader, "PDPSlideshowInformationHeader");
    loSlideshowInformationHeader.innerHTML = ioProduct.text;
    roSlideshowInformation.appendChild(loSlideshowInformationHeader);

    var loSlideshowInformationDescription1 = document.createElement("span");
    this.addClass(loSlideshowInformationDescription1, "PDPSlideshowInformationDescription1");
    loSlideshowInformationDescription1.innerHTML = ioProduct.description;
    roSlideshowInformation.appendChild(loSlideshowInformationDescription1);

    var loSlideshowInformationDescription2 = document.createElement("span");
    this.addClass(loSlideshowInformationDescription2, "PDPSlideshowInformationDescription2");
    loSlideshowInformationDescription2.innerHTML = ioProduct.variant + " | " + ioProduct.km + " | " + ioProduct.year;
    roSlideshowInformation.appendChild(loSlideshowInformationDescription2);

    return roSlideshowInformation;
  },

  productDetailsStickyRightBlock: function() {

  },

  createProductDescription: function() {
    var roProductDescriptionWrapper = document.createElement("div");
    this.addClass(roProductDescriptionWrapper, "PDPProductDescriptionWrapper");

    var loBreadcrumWrapper = document.createElement("div");
    this.addClass(loBreadcrumWrapper, "PDPBreadcrumWrapper");
    roProductDescriptionWrapper.appendChild(loBreadcrumWrapper);
    loBreadcrumWrapper.appendChild(this.createBreadcrum());
    loBreadcrumWrapper.appendChild(this.createProductDetails());

    return roProductDescriptionWrapper;
  },

  createBreadcrum: function() {
    var roBreadcrum = document.createElement("div");
    this.addClass(roBreadcrum, "Breadcrum");

    var loBreadcrumUl = document.createElement("ul");
    this.addClass(loBreadcrumUl, "BreadcrumUl");
    roBreadcrum.appendChild(loBreadcrumUl);

    var laBreadcrum = [{
      key: "Occasions",
      text: "Occasions"
    }, {
      key: "Zoeken",
      text: "Zoeken"
    }];

    for (var i = 0; i < laBreadcrum.length; i++) {
      loBreadcrumUl.appendChild(this.createBreadcrumItem(laBreadcrum[i]));
    }

    return roBreadcrum;
  },

  createBreadcrumItem: function(ioNode) {
    var roBreadcrumLi = document.createElement("li");
    this.addClass(roBreadcrumLi, "BreadcrumLi");
    var loBreadcrumText = document.createElement("a");
    loBreadcrumText.onclick = function(ioEvent) {
      _self.onPressBreadcrumLink(ioEvent);
    };
    loBreadcrumText.setAttribute("data-key", ioNode.key);
    roBreadcrumLi.appendChild(loBreadcrumText);
    loBreadcrumText.innerHTML = ioNode.text;

    return roBreadcrumLi;
  },

  onPressBreadcrumLink: function(ioEvent) {

  },

  createProductDetails: function() {
    var laTabBar = [{
      key: "standardEquipments",
      text: "Standard Equipments"
    }, {
      key: "lacquerCoatings",
      text: "Lacquer & Coatings"
    }, {
      key: "packages",
      text: "packages"
    }, {
      key: "optionsAccessories",
      text: "Options and Accessories"
    }, {
      key: "leasepakket",
      text: "Leasepakket"
    }];
    var roProductDetailsWrapper = document.createElement("div");
    this.addClass(roProductDetailsWrapper, "PDPProductDetailsWrapper");

    var loProductDetails = document.createElement("div");
    this.addClass(loProductDetails, "PDPProductDetails");
    roProductDetailsWrapper.appendChild(loProductDetails);
    loProductDetails.appendChild(this.createTabBar(laTabBar));
    $("#tabs" ).tabs();
    var loStickyCardWrapper = document.createElement("div");
    this.addClass(loStickyCardWrapper, "PDPStickyCardWrapper");
    roProductDetailsWrapper.appendChild(loStickyCardWrapper);
    loStickyCardWrapper.appendChild(this.createStickyCard());

    return roProductDetailsWrapper;
  },

  createStickyCard: function(ioCard) {
    var roStickyOuterWrapper = document.createElement("div");
    this.addClass(roStickyOuterWrapper, "PDPStickyOuterWrapper");

    var loStickyInnerWrapper = document.createElement("div");
    this.addClass(loStickyInnerWrapper, "PDPStickyInnerWrapper");
    roStickyOuterWrapper.appendChild(loStickyInnerWrapper);

    var loStickyCard = document.createElement("div");
    this.addClass(loStickyCard, "PDPStickyCard");
    loStickyInnerWrapper.appendChild(loStickyCard);

    return roStickyOuterWrapper;
  },

  createTabBar: function(ioTabs) {
    var roTabBar = document.createElement("div");
    roTabBar.setAttribute("id", "tabs");
    this.addClass(roTabBar, "PDPTabBar");
    var loTabUl = document.createElement("ul");
    this.addClass(loTabUl, "PDPTabUl");
    roTabBar.appendChild(loTabUl);

    for (var i=0;i<ioTabs.length;i++) {
      loTabUl.appendChild(this.createTab(ioTabs[i], i));
      roTabBar.appendChild(this.createTabContent(ioTabs[i], i));
    }

    return roTabBar;
  },

  createTab: function(ioTab, i) {
    var roTabLi = document.createElement("li");
    this.addClass(roTabLi, "PDPTabLi");
    var loTabContent = document.createElement("a");
    loTabContent.setAttribute("href", "#PDPTab" + i);
    roTabLi.appendChild(loTabContent);
    loTabContent.innerHTML = ioTab.text;

    return roTabLi;
  },

  createTabContent: function(ioTab, i) {
    var roTabContent = document.createElement("div");
    this.addClass(roTabContent, "PDPTabContent");
    roTabContent.setAttribute("id", "PDPTab" + i);

    return roTabContent;
  }
};
