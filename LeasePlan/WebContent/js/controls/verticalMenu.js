var VerticalMenu = {
  menuGroups: [{
    group: "Merck and Model",
    expanded: true,
    menus: [{
      name: "Audi",
      count: 10,
      checked: true
    }, {
      name: "BMW",
      count: 20
    }]
  }, {
    group: "Brandstof",
    menus: [{
      name: "Diesel",
      count: 1
    }, {
      name: "Benzine",
      count: 19,
      checked: true
    }]
  }],

  init: function() {
    this._oRootElement = document.createElement("div");
    this.addClass(this._oRootElement, "verticalMenu");

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
    var roVerticalMenu = this.getRootElement();

    var loTopCount = document.createElement("span");
    loTopCount.innerHTML = this.getSelections().count + " Results";
    this._oCountElement = loTopCount;
    this.addClass(loTopCount, "verticalMenuTopCount");

    var loHeader = document.createElement("span");
    loHeader.innerHTML = "Filters";
    this.addClass(loHeader, "verticalMenuHeader");

    roVerticalMenu.appendChild(loTopCount);
    roVerticalMenu.appendChild(loHeader);

    for (var i = 0; i < this.menuGroups.length; i++) {
      var loMenuGroup = this.addMenuGroup(this.menuGroups[i], i);
      roVerticalMenu.appendChild(loMenuGroup);
    }

    return roVerticalMenu;
  },

  updateCount: function(iiCount) {
    this._oCountElement.innerHTML = this.getSelections().count + " Results";
  },

  addClass: function(ioElement, isClassName) {
    if (ioElement) {
      ioElement.className += ioElement.className ? isClassName : isClassName;
    }
  },

  addMenuGroup: function(ioMenuBlock, iiGroup) {
    var _self = this;
    //Create the Group
    var roMenuGroup = document.createElement("div");
    roMenuGroup.setAttribute("data-context", "/group/" + iiGroup);
    this.addClass(roMenuGroup, "verticalMenuGroupContainer");
    roMenuGroup.onclick = function(ioEvent) {
      _self.onPressMenuGroup(ioEvent);
    };

    //Create Group Header
    var loGroupHeader = document.createElement("div");
    roMenuGroup.setAttribute("data-context", "/group/" + iiGroup);
    loGroupHeader.innerHTML = ioMenuBlock.group;
    this.addClass(loGroupHeader, "verticalMenuGroupHeader");
    roMenuGroup.appendChild(loGroupHeader);

    //Create Menu Item Ul
    var loMenuItemUl = document.createElement("ul");
    roMenuGroup.setAttribute("data-context", "/group/" + iiGroup);
    this.addClass(loMenuItemUl, "verticalMenuItemUl");
    roMenuGroup.appendChild(loMenuItemUl);

    if (ioMenuBlock.menus) {
      for (var j = 0; j < ioMenuBlock.menus.length; j++) {
        loMenuItemUl.appendChild(this.addMenuItem(ioMenuBlock.menus[j], iiGroup, j));
      }
    }

    return roMenuGroup;
  },

  addMenuItem: function(ioMenu, iiGroup, iiMenu) {
    var _self = this;
    //Create Menu Item Li
    var roMenuItemLi = document.createElement("li");
    roMenuItemLi.setAttribute("data-context", "/group/" + iiGroup + "/menu/" + iiMenu);
    this.addClass(roMenuItemLi, "verticalMenuItemLi");

    //Create Menu CB
    var loMenuCB = document.createElement("input");
    loMenuCB.type = "checkbox";
    loMenuCB.setAttribute("data-context", "/group/" + iiGroup + "/menu/" + iiMenu);
    loMenuCB.onclick = function(ioEvent) {
      _self.onCheckMenu(ioEvent);
    };
    if (ioMenu.checked) {
      loMenuCB.setAttribute("checked", true);
    } else {
      loMenuCB.removeAttribute("checked");
    }
    roMenuItemLi.appendChild(loMenuCB);

    //Create Menu Text
    var loMenuText = document.createElement("span");
    loMenuText.innerHTML = ioMenu.name;
    this.addClass(loMenuText, "verticalMenuItemText");
    roMenuItemLi.appendChild(loMenuText);

    //Create Menu Text Count
    var loMenuTextCount = document.createElement("span");
    loMenuTextCount.innerHTML = "(" + ioMenu.count + ")";
    this.addClass(loMenuTextCount, "verticalMenuItemTextCount");
    roMenuItemLi.appendChild(loMenuTextCount);

    return roMenuItemLi;
  },

  getSelections: function() {
    var riCount = 0;
    var laSelectedNodes = [];
    for (var i = 0; i < this.menuGroups.length; i++) {
      for (var j = 0; j < this.menuGroups[i].menus.length; j++) {
        if (this.menuGroups[i].menus[j].checked) {
          riCount = riCount + this.menuGroups[i].menus[j].count;
          laSelectedNodes.push({
            key: this.menuGroups[i].group + "_" + this.menuGroups[i].menus[j].name,
            text: this.menuGroups[i].menus[j].name
          });
        }
      }
    }

    return {
      count: riCount,
      menus: laSelectedNodes
    };
  },

  onCheckMenu: function(ioEvent) {
    var loSelctedContext = this.getBindingContext(ioEvent);
    var liMenu = loSelctedContext.sPath.split("/menu/")[1];
    var liGroup = loSelctedContext.sPath.split("/menu/")[0].split("/group/")[1];
    this.menuGroups[liGroup].menus[liMenu].checked = ioEvent.srcElement.checked;
    this.updateCount();

    this.fireMenuSelect(ioEvent);
  },

  fireMenuSelect: function(ioEvent) {},

  getBindingContext: function(ioEvent) {
    var _self = this;
    var roBindingContext = {
      sPath: ioEvent.srcElement.dataset.context,
      getObject: function() {
        var liMenu = this.sPath.split("/menu/")[1];
        var liGroup = this.sPath.split("/menu/")[0].split("/group/")[1];

        return _self.menuGroups[liMenu].menus[liMenu];
      }
    }
    return roBindingContext;
  },

  onPressMenuGroup: function(ioEvent) {
    if (ioEvent.srcElement.className === "verticalMenuGroupHeader") {
      var loMenuUl = ioEvent.srcElement.parentElement.children[1];
      if (loMenuUl.style.display === "none") {
        loMenuUl.style.display = "initial";
      } else {
        loMenuUl.style.display = "none";
      }
    }
  },

  dropMenuNode: function(isGroup, isMenu) {
    for (var i=0;i<this.menuGroups.length;i++) {
      if (this.menuGroups[i].group === isGroup) {
        for (var j=0;j<this.menuGroups[i].menus.length;j++) {
          if (this.menuGroups[i].menus[j].name === isMenu) {
            this.menuGroups[i].menus[j].checked = false;
            this.rerender();
            break;
          }
        }
        break;
      }
    }
  }
};
