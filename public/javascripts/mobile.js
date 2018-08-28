var $asideMenu = $(".aside-menu");
var $subBanner = $(".subpage-banner");
var $subpageContent = $(".subpage-content");
if (navigator.userAgent.indexOf("Mobile") >-1) {
  moveSubMenu()
}
// 处理左侧二级菜单
function moveSubMenu() {
  $subBanner.before($asideMenu);
}

