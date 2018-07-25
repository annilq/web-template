$(".back-up").click(function() {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    300
  );
});
$("a").click(function(e) {
  var $tar = $(e.target);
  var href = $tar.attr("href");
  if (href.indexOf("http")<0&&href.indexOf("html")<0) {
    e.preventDefault();
    window.location.href = href + ".html";
  }
});
