$(function() {
  var imported = document.createElement('script');
  imported.src = 'js/controls/TagCloud.js';
  document.head.appendChild(imported);
  imported.onload = function() {
    document.getElementById("idTagCloudContainer").appendChild(TagCloud.init());
  };
});
