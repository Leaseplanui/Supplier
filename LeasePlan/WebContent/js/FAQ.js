$(function() {
  // var imported = document.createElement('script');
  // imported.src = 'js/controls/TagCloud.js';
  // document.head.appendChild(imported);
  // imported.onload = function() {
  //
  // };
  document.getElementById("idContentDiv").appendChild(FAQ.init());
});

var FAQ = {
  groups: [{
    text: "Insurance",
    questions: [{
      title: "What do I pay for damage or glass repair?",
      answer: 'You have a cover with a personal contribution of up to € 300 per non-recoverable damage.' +
        'Suppose there is a damage of € 800. Then you pay € 300 own contribution. Is the amount of damage lower than your own contribution? Then you pay only the damage amount.' +
        'With a diamond replacement you get € 68 off your own contribution of € 300. You will pay up to € 232 euros. In case of a resin repair of glass damage, no personal contribution will be charged.'
    }, {
      title: "What is all insured and what is covered by the casco cover?",
      answer: 'You have a cover with a personal contribution of up to € 300 per non-recoverable damage.'
    }]
  }, {
    text: "Car delivery",
    questions: [{
      title: "What do I Enter my own car?",
      answer: 'By the end of the term of your lease contract we will make an offer for a new contract. Do not you use this? Then your lease contract will be terminated. And do you return the car. That\'s how you do it:'
    }, {
      title: "When will I get my deposit back?",
      answer: 'After you have returned the car at the end of the lease contract, we will refund the deposit amount paid to your bank account, with deduction of amounts that you still have to pay. Such as outstanding delivery costs, outstanding fines and unpaid claims. This is called "set off".'
    }]
  }],

  init: function() {
    this._oRootElement = document.createElement("div");
    this.addClass(this._oRootElement, "FAQ");

    return this.render();
  },

  addClass: function(ioElement, isClassName) {
    if (ioElement) {
      if (ioElement.className) {
        ioElement.className = ioElement.className + " " + isClassName;
      } else {
        ioElement.className = isClassName;
      }
    }
  },

  rerender: function() {
    var loNode = this.getRootElement();
    while (loNode.hasChildNodes()) {
      loNode.removeChild(loNode.lastChild);
    }

    this.render();
  },

  createLeftSidebar: function() {
    var roLeftSidebar = document.createElement("div");
    this.addClass(roLeftSidebar, "FAQLeftSidebar");

    var loCategoryUl = document.createElement("ul");
    this.addClass(loCategoryUl, "FAQCategoryUl");
    roLeftSidebar.appendChild(loCategoryUl);

    for (var i = 0; i < this.groups.length; i++) {
      loCategoryUl.appendChild(this.createLeftSidebarItems(this.groups[i], i));
    }

    return roLeftSidebar;
  },

  createLeftSidebarItems: function(ioGroup, iiGroup) {
    var _self = this;
    var roCategoryLi = document.createElement("li");
    roCategoryLi.onclick = function(ioEvent) {
      _self.onPressGroup(ioEvent);
    };

    roCategoryLi.setAttribute("data-context", "/groups/" + iiGroup);
    this.addClass(roCategoryLi, "FAQCategoryLi");
    var loCategoryText = document.createElement("a");
    loCategoryText.setAttribute("data-context", "/groups/" + iiGroup);
    this.addClass(loCategoryText, "FAQCategoryText");
    roCategoryLi.appendChild(loCategoryText);
    loCategoryText.innerHTML = ioGroup.text + " (" + ioGroup.questions.length + ")";

    return roCategoryLi;
  },

  onPressGroup: function(ioEvent) {
    var loSelctedContext = this.getBindingContext(ioEvent);
    this.populateQuestions(loSelctedContext.getObject());
    console.log(loSelctedContext);
  },

  createContentArea: function() {
    var roContentArea = document.createElement("div");
    this.addClass(roContentArea, "FAQContentArea");

    var loQuestionsUl = document.createElement("ul");
    this._oQuestionsUl = loQuestionsUl;
    this.addClass(loQuestionsUl, "FAQQuestionsUl");
    roContentArea.appendChild(loQuestionsUl);

    return roContentArea;
  },

  populateQuestions: function(ioGroup) {
    var loNode = this._oQuestionsUl;
    while (loNode.hasChildNodes()) {
      loNode.removeChild(loNode.lastChild);
    }
    for (var i = 0; i < ioGroup.questions.length; i++) {
      this._oQuestionsUl.appendChild(this.createQuestionPanel(ioGroup.questions[i]));
    }
  },

  createQuestionPanel: function(ioQuestion) {
    var _self = this;
    var roQuestionLi = document.createElement("li");
    roQuestionLi.onclick = function(ioEvent) {
      _self.onPressPanelHeader(ioEvent);
    };
    this.addClass(roQuestionLi, "FAQQuestionsLi");
    var loPanelButton = document.createElement("button");
    this.addClass(loPanelButton, "FAQQuestionsPanelButton");
    loPanelButton.innerHTML = ioQuestion.title;
    roQuestionLi.appendChild(loPanelButton);

    var loAnswerDiv = document.createElement("div");
    this.addClass(loAnswerDiv, "FAQAnswerDiv");
    roQuestionLi.appendChild(loAnswerDiv);

    var loAnswer = document.createElement("a");
    this.addClass(loAnswer, "FAQAnswer");
    loAnswerDiv.appendChild(loAnswer);
    loAnswer.innerHTML = ioQuestion.answer;

    return roQuestionLi;
  },

  onPressPanelHeader: function(ioEvent) {
    var loAnswerDiv = ioEvent.srcElement.parentElement.children[1];
    if (loAnswerDiv.style.display === "none" || loAnswerDiv.style.display === "") {
      loAnswerDiv.style.display = "flex";
      this.addClass(ioEvent.srcElement, "FAQQuestionsPanelButton-open FAQQuestionsPanelButton");
    } else {
      ioEvent.srcElement.className = "FAQQuestionsPanelButton";
      loAnswerDiv.style.display = "none";
    }
  },

  getRootElement: function() {
    return this._oRootElement;
  },

  getBindingContext: function(ioEvent) {
    var _self = this;
    var roBindingContext = {
      sPath: ioEvent.srcElement.dataset.context,
      getObject: function() {
        var liGroup = this.sPath.split("/groups/")[1];

        return _self.groups[liGroup];
      }
    };

    return roBindingContext;
  },

  render: function() {
    var roFAQ = this.getRootElement();
    roFAQ.appendChild(this.createLeftSidebar());
    roFAQ.appendChild(this.createContentArea());

    return roFAQ;
  },
};
