
var Base = {
  init: function() {

  },

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
  }

  return Base;
};
