$(function() {
  var loVerticalMenu = document.createElement('script');
  loVerticalMenu.src = 'js/controls/verticalMenu.js';
  document.head.appendChild(loVerticalMenu);
  loVerticalMenu.onload = function() {
    var loTagCloud = document.createElement('script');
    loTagCloud.src = 'js/controls/TagCloud.js';
    document.head.appendChild(loTagCloud);
    loTagCloud.onload = function() {
      document.getElementById("idVerticalMenuDiv").appendChild(VerticalMenu.init());
      TagCloud.tags = VerticalMenu.getSelections().menus; //For nitial Display of Tags
      document.getElementById("idTagCloudContainer").appendChild(TagCloud.init());

      VerticalMenu.fireMenuSelect = function(ioEvent) {
        var loSelctedContext = this.getBindingContext(ioEvent);
        var liMenu = loSelctedContext.sPath.split("/menu/")[1];
        var liGroup = loSelctedContext.sPath.split("/menu/")[0].split("/group/")[1];

        TagCloud.tags = VerticalMenu.getSelections().menus;
        TagCloud.rerender();
      };

      TagCloud.fireCloseButtonPress = function(ioEvent) {
        var lsSelectedKey = ioEvent.srcElement.getAttribute("data-key");
        var lsGroup = lsSelectedKey.split("_")[0];
        var lsMenu = lsSelectedKey.split("_")[1];

        VerticalMenu.dropMenuNode(lsGroup, lsMenu);
      };
    };
  };
});
