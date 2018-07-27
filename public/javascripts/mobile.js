var $asideMenu = $(".aside-menu");
var $subBanner = $(".subpage-banner");
var $subpageContent = $(".subpage-content");
enquire.register("screen and (max-width: 1000px)", {
  match: function() {
    moveSubMenu();
    // window.slideout.open();
  },
  unmatch: function() {
    resetMenu();
    window.slideout.close();
  }
});
// 处理左侧二级菜单
function moveSubMenu() {
  $subBanner.before($asideMenu);
}
// 处理左侧二级菜单
function resetMenu() {
  $subpageContent.before($asideMenu);
}
