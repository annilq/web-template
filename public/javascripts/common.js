$(".back-up").click(function() {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    300
  );
});
$("a").click(function(e) {
  var $tar = $(e.currentTarget);
  var href = $tar.attr("href");
  var protocol = window.location.protocol;
  if (href.indexOf("html") < 0 && protocol.indexOf("http") < 0) {
    e.preventDefault();
    window.location.href = href + ".html";
  }
});
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
// 顶部menu交互
$(".menu .menu-item").hover(
  function(e) {
    clearTimeout(window.timer);
    var $tar = $(e.currentTarget),
      $submenu = $(".submenu");
    $(".sub-menu-container").show();
    var offset = $tar.offset();
    var tarWidth = $tar.width();
    var menuWidth = $submenu.width();
    var menuOffset = offset.left - menuWidth / 2 + tarWidth / 2;
    $submenu.css("left", menuOffset);
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
