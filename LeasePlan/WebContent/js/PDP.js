

var PDP = {
  product: {
    key: "",
    text: "Volkswagen Touran",
    description: "1.4 TSI 7-DSG Comfortline Executive, Automaat, Navigatie, Panoramadak",
    variant: "Benzine",
    km: "72.444",
    year: "2013"
  },

  init: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    this._oRootElement = document.createElement("div");
    this.addClass(this._oRootElement, "PDP");
    
    return this.render(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle);
  },

  addClass: function(ioElement, isClassName) {
    if (ioElement) {
      ioElement.className += ioElement.className ? isClassName : isClassName;
    }
  },

  rerender: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var loNode = this.getRootElement();
    while (loNode.hasChildNodes()) {
      loNode.removeChild(loNode.lastChild);
    }

    this.render(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle);
  },

  getRootElement: function() {
    return this._oRootElement;
  },

  render: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roPDP = this.getRootElement();
    roPDP.appendChild(this.createSlideshow(this.product));
    roPDP.appendChild(this.createProductDescription(this.product,laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));

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

  createProductDescription: function(product, laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roProductDescriptionWrapper = document.createElement("div");
    this.addClass(roProductDescriptionWrapper, "PDPProductDescriptionWrapper");

    var loBreadcrumWrapper = document.createElement("div");
    this.addClass(loBreadcrumWrapper, "PDPBreadcrumWrapper");
    roProductDescriptionWrapper.appendChild(loBreadcrumWrapper);
    loBreadcrumWrapper.appendChild(this.createBreadcrum());
    loBreadcrumWrapper.appendChild(this.createProductDetails(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));

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
    var _self = this;
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

  createProductDetails: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var laTabBar = [{
      key: "standardEquipments",
      text: "Standard Equipments",
      active: true
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
    loProductDetails.appendChild(this.createTabBar(laTabBar,laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));
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

  createTabBar: function(ioTabs,laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roTabBar = document.createElement("div");
    roTabBar.setAttribute("id", "tabs");
    this.addClass(roTabBar, "PDPTabBar");
    var loTabUl = document.createElement("ul");
    this.addClass(loTabUl, "PDPTabUl");
    roTabBar.appendChild(loTabUl);

    for (var i=0;i<ioTabs.length;i++) {
      loTabUl.appendChild(this.createTab(ioTabs[i], i));
      roTabBar.appendChild(this.createTabContentDiv(ioTabs[i], i,laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));
    }

    return roTabBar;
  },

  createTab: function(ioTab, i) {
    var roTabLi = document.createElement("li");
    this.addClass(roTabLi, "PDPTabLi");
    var loTabContent = document.createElement("a");
    this.addClass(loTabContent, "PDPTabContent_a");
    loTabContent.setAttribute("href", "#PDPTab" + i);
    roTabLi.appendChild(loTabContent);
    loTabContent.innerHTML = ioTab.text;

    return roTabLi;
  },

  createTabContentDiv: function(ioTab, i,laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roTabContentDiv = document.createElement("div");
    this.addClass(roTabContentDiv, "PDPTabContentDiv");
    roTabContentDiv.setAttribute("id", "PDPTab" + i);
    roTabContentDiv.appendChild(this.createContentTabHeader(ioTab.text));
    roTabContentDiv.appendChild(this.createTab1Content(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));

    return roTabContentDiv;
  },

  createContentTabHeader: function(isText) {
    var roTabContentHeader = document.createElement("div");
    this.addClass(roTabContentHeader, "PDPTabContentHeader");
    var loTabContentHeaderText = document.createElement("span");
    this.addClass(loTabContentHeaderText, "PDPTabContentHeaderText");
    roTabContentHeader.appendChild(loTabContentHeaderText);
    loTabContentHeaderText.innerHTML = isText;

    return roTabContentHeader;
  },

  //Create Tab1 Content
  createTab1Content: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roTabContent = document.createElement("div");
    this.addClass(roTabContent, "PDPTabContent");
    roTabContent.appendChild(this.createTab1ContentTop(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle));
    roTabContent.appendChild(document.createElement("hr"));
    roTabContent.appendChild(this.createTab1ContentBottom());

    return roTabContent;
  },

  createTab1ContentTop: function(laTab1ContentTopLeft,laTab1ContentTopRight,laTab1ContentTopMiddle) {
    var roTab1ContentTop = document.createElement("div");
    this.addClass(roTab1ContentTop, "PDPTab1ContentTop");
  /*  var laTab1ContentTopLeft = [{
      title: "Consumentenprijs",
      value: "&euro; 46.760,00"
    }, {
      title: "Fiscale waarde",
      value: "&euro; 46.760,37"
    }, {
      title: "Bijtelling",
      value: "22 %"
    }, {
      title: "Eigen risico",
      value: "&euro; 300,00"
    }, {
      title: "Looptijd",
      value: "60 maanden"
    }];
    var laTab1ContentTopRight = [{
      title: "Consumentenprijs"
    }, {
      title: "Fiscale waarde"
    }, {
      title: "Bijtelling"
    }, {
      title: "Eigen risico"
    }, {
      title: "Looptijd"
    }];
    var laTab1ContentTopMiddle = [{
      title: "Consumentenprijs"
    }, {
      title: "Fiscale waarde"
    }, {
      title: "Bijtelling"
    }, {
      title: "Eigen risico"
    }, {
      title: "Looptijd"
    }, {
      title: "Eigen risico"
    }, {
      title: "Looptijd"
    }, {
      title: "Eigen risico"
    }, {
      title: "Looptijd"
    }];*/
    roTab1ContentTop.appendChild(this.createTab1ContentTopLeft(laTab1ContentTopLeft));
    roTab1ContentTop.appendChild(this.createTab1ContentTopRight(laTab1ContentTopMiddle));
    roTab1ContentTop.appendChild(this.createTab1ContentTopRight(laTab1ContentTopRight));

    return roTab1ContentTop;
  },

  createTab1ContentTopLeft: function(iaTab1ContentTopLeft) {
    var roTab1ContentTopLeft = document.createElement("div");
    this.addClass(roTab1ContentTopLeft, "PDPTab1ContentTopLeft");

    var loTab1ContentTopLeftUl = document.createElement("ul");
    this.addClass(loTab1ContentTopLeftUl, "PDPTabUlTab1ContentTopLeftUl");
    roTab1ContentTopLeft.appendChild(loTab1ContentTopLeftUl);

    for (var i=0;i<iaTab1ContentTopLeft.length;i++) {
      var loTab1ContentTopLeftLi = document.createElement("li");
      this.addClass(loTab1ContentTopLeftLi, "PDPTabUlTab1ContentTopLeftLi");
      loTab1ContentTopLeftUl.appendChild(loTab1ContentTopLeftLi);

      var loTab1ContentTopLeftLiTitle = document.createElement("a");
      this.addClass(loTab1ContentTopLeftLiTitle, "PDPTabUlTab1ContentTopLeftLiTitle");
      loTab1ContentTopLeftLi.appendChild(loTab1ContentTopLeftLiTitle);
      loTab1ContentTopLeftLiTitle.innerHTML = iaTab1ContentTopLeft[i].title;

      var loTab1ContentTopLeftLiValue = document.createElement("a");
      this.addClass(loTab1ContentTopLeftLiValue, "PDPTabUlTab1ContentTopLeftLiValue");
      loTab1ContentTopLeftLi.appendChild(loTab1ContentTopLeftLiValue);
      loTab1ContentTopLeftLiValue.innerHTML = iaTab1ContentTopLeft[i].value;
    }

    return roTab1ContentTopLeft;
  },

  createTab1ContentTopMiddle: function(iaTab1ContentTopMiddle) {
    var roTab1ContentTopMiddle = document.createElement("div");
    this.addClass(roTab1ContentTopMiddle, "PDPTab1ContentTopMiddle");

    var loTab1ContentTopMiddleUl = document.createElement("ul");
    this.addClass(loTab1ContentTopMiddleUl, "PDPTabUlTab1ContentTopMiddleUl");
    roTab1ContentTopMiddle.appendChild(loTab1ContentTopMiddleUl);

    for (var i=0;i<iaTab1ContentTopMiddle.length;i++) {
      var loTab1ContentTopMiddleLi = document.createElement("li");
      this.addClass(loTab1ContentTopMiddleLi, "PDPTabUlTab1ContentTopMiddleLi");
      loTab1ContentTopMiddleUl.appendChild(loTab1ContentTopMiddleLi);

      var loTab1ContentTopMiddleLiTitle = document.createElement("a");
      this.addClass(loTab1ContentTopMiddleLiTitle, "PDPTabUlTab1ContentTopMiddleLiTitle");
      loTab1ContentTopMiddleLi.appendChild(loTab1ContentTopMiddleLiTitle);
      loTab1ContentTopMiddleLiTitle.innerHTML = iaTab1ContentTopMiddle[i].title;
    }

    return roTab1ContentTopMiddle;
  },

  createTab1ContentTopRight: function(iaTab1ContentTopRight) {
    var roTab1ContentTopRight = document.createElement("div");
    this.addClass(roTab1ContentTopRight, "PDPTab1ContentTopRight");

    var loTab1ContentTopRightUl = document.createElement("ul");
    this.addClass(loTab1ContentTopRightUl, "PDPTabUlTab1ContentTopRightUl");
    roTab1ContentTopRight.appendChild(loTab1ContentTopRightUl);

    for (var i=0;i<iaTab1ContentTopRight.length;i++) {
      var loTab1ContentTopRightLi = document.createElement("li");
      this.addClass(loTab1ContentTopRightLi, "PDPTabUlTab1ContentTopRightLi");
      loTab1ContentTopRightUl.appendChild(loTab1ContentTopRightLi);

      var loTab1ContentTopRightLiTitle = document.createElement("a");
      this.addClass(loTab1ContentTopRightLiTitle, "PDPTabUlTab1ContentTopRightLiTitle");
      loTab1ContentTopRightLi.appendChild(loTab1ContentTopRightLiTitle);
      loTab1ContentTopRightLiTitle.innerHTML = iaTab1ContentTopRight[i].title;
    }

    return roTab1ContentTopRight;
  },

  createTab1ContentBottom: function() {
      var roTab1ContentBottom = document.createElement("div");
      this.addClass(roTab1ContentBottom, "PDPTab1ContentBottom");

      var loTab1ContentBottomHeader = document.createElement("div");
      this.addClass(loTab1ContentBottomHeader, "PDPTab1ContentBottomHeader");
      loTab1ContentBottomHeader.innerHTML = "Standaard uitrusting";
      roTab1ContentBottom.appendChild(loTab1ContentBottomHeader);

      var laTab1ContentBottom = [{
        title: "Consumentenprijs"
      }, {
        title: "Fiscale waarde"
      }, {
        title: "Bijtelling"
      }, {
        title: "Eigen risico"
      }, {
        title: "Looptijd"
      }, {
        title: "Eigen risico"
      }, {
        title: "Looptijd"
      }, {
        title: "Eigen risico"
      }, {
        title: "Looptijd"
      }];

      var loTab1ContentBottomUl = document.createElement("ul");
      this.addClass(loTab1ContentBottomUl, "PDPTabUlTab1ContentBottomUl");
      roTab1ContentBottom.appendChild(loTab1ContentBottomUl);

      for (var i=0;i<laTab1ContentBottom.length;i++) {
        var loTab1ContentBottomLi = document.createElement("li");
        this.addClass(loTab1ContentBottomLi, "PDPTabUlTab1ContentBottomLi");
        loTab1ContentBottomUl.appendChild(loTab1ContentBottomLi);

        var loTab1ContentBottomLiTitle = document.createElement("a");
        this.addClass(loTab1ContentBottomLiTitle, "PDPTabUlTab1ContentBottomLiTitle");
        loTab1ContentBottomLi.appendChild(loTab1ContentBottomLiTitle);
        loTab1ContentBottomLiTitle.innerHTML = laTab1ContentBottom[i].title;
      }

      return roTab1ContentBottom;
  }
};
