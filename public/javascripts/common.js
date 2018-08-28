$(".back-up").click(function() {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    300
  );
});
if (navigator.userAgent.indexOf("Mobile") >-1) {
  window.slideout = new Slideout({
    panel: document.getElementById("panel"),
    menu: document.getElementById("menu"),
    padding: 90,
    touch: false,
    tolerance: 70
  });
  $(".mobile-menu-icon").click(function(e) {
    window.slideout.toggle();
  });
} 

// 顶部menu交互
$(".menu .menu-item").hover(
  function(e) {
    clearTimeout(window.timer);
    var $tar = $(e.currentTarget),
      $submenu = $(".submenu");
    $(".sub-menu-container").show();
    var menuId = $tar[0].id;
    $submenu.hide();
    var $curSubmenu=$("#sub"+menuId);
    var offset = $tar.offset();
    var tarWidth = $tar.width();
    var menuWidth = $curSubmenu.width();
    var menuOffset = offset.left - menuWidth / 2 + tarWidth / 2;
    $curSubmenu.show();
    $curSubmenu.css("left", menuOffset);
  },
  function(e) {
    window.timer = setTimeout(function() {
      $(".sub-menu-container").hide();
    }, 200);
  }
);

// 底部footer事件
$(".sub-menu-container").hover(
  function(e) {
    clearTimeout(window.timer);
  },
  function(e) {
    $(e.currentTarget).hide();
  }
); // 底部footer事件
$(".link-items .link-item").hover(
  function(e) {
    clearTimeout(window.timer);
    var $target = $(e.currentTarget);
    var menuId = $target.data("menuid");
    $("[data-submenu]").hide();
    $("[data-submenu=" + menuId + "]").show();
  },
  function(e) {
    clearTimeout(window.timer);
    window.timer = setTimeout(function() {
      $("[data-submenu]").hide();
    }, 200);
  }
);
// 底部footer事件
$("[data-submenu]").hover(
  function(e) {
    clearTimeout(window.timer);
  },
  function(e) {
    $(e.currentTarget).hide();
  }
);
$("img").on("error","document",function(e){
  $(this).attr("src", "/static/web/images/yjgc-de-img.png");
})