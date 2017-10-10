var TagCloud = {
  tags: [{
    key: "",
    text: ""
  }],

  init: function() {
    this._oRootElement = document.createElement("div");
    this.addClass(this._oRootElement, "TagCloud");

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
    var roTagCloud = this.getRootElement();

    for (var i = 0; i < this.tags.length; i++) {
      roTagCloud.appendChild(this.createTag(this.tags[i]));
    }

    return roTagCloud;
  },

  createTag: function(ioTag) {
    var _self = this;
    var roTag = document.createElement("div");
    roTag.setAttribute("data-key", ioTag.key);
    this.addClass(roTag, "TagFilter");
    var loTagSpan = document.createElement("span");
    loTagSpan.setAttribute("data-key", ioTag.key);
    // this.addClass(loTagSpan, "TagFilter");
    loTagSpan.innerHTML = ioTag.text;
    roTag.appendChild(loTagSpan);

    var loTagCloseBtn = document.createElement("button");
    loTagCloseBtn.onclick = function(ioEvent) {
      _self.onPressCloseButton(ioEvent);
    };

    loTagCloseBtn.setAttribute("data-key", ioTag.key);
    this.addClass(loTagCloseBtn, "TagFilter__close-button");
    loTagCloseBtn.innerHTML = 'X';
    roTag.appendChild(loTagCloseBtn);

    return roTag;
  },

  onPressCloseButton: function(ioEvent) {
    var lsSelectedKey = ioEvent.srcElement.getAttribute("data-key");
    for (var i = 0; i < this.tags.length; i++) {
      if (this.tags[i].key === lsSelectedKey) {
        this.tags.splice(i, 1);
        break;
      }
    }
    this.rerender();

    this.fireCloseButtonPress(ioEvent);
  },

  fireCloseButtonPress: function() {

  }
};
