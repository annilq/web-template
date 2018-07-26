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
  padding:90,
  tolerance: 70
});
$(".mobile-menu-icon").click(function(e) {
  window.slideout.toggle();
});
