function numberOfViews(book) {
  return book.turn("pages");
}

function getViewNumber(book, page) {
  return parseInt((page || book.turn("page")) , 10);
}

function moveBar(yes) {
  $("#slider .ui-slider-handle").css({ zIndex: yes ? -1 : 10000 });
}

function setPreview(view) {  
  var previewWidth = 60,
    previewHeight = 73,
    previewSrc = "images/album/"+view+".png",
    preview = $(_thumbPreview.children(":first")),
    width =  previewWidth;
  _thumbPreview.addClass("no-transition").css({
    width: width + 15,
    height: previewHeight + 15
  });

  preview.css({
    width: width,
    height: previewHeight,
    backgroundSize:"100%"
  });
    preview.css({ backgroundImage: "url(" + previewSrc + ")" });
    preview.show()
    setTimeout(function() {
      _thumbPreview.removeClass("no-transition");
    }, 0);

}

function isChrome() {
  // Chrome's unsolved bug
  // http://code.google.com/p/chromium/issues/detail?id=128488

  return navigator.userAgent.indexOf("Chrome") != -1;
}
$(function(){
  function loadApp() {
    var flipbook = $(".sj-book");
    // URIs
    Hash.on("^page/([0-9]*)$", {
      yep: function(path, parts) {
        var page = parts[1];
  
        if (page !== undefined) {
          if ($(".sj-book").turn("is")) $(".sj-book").turn("page", page);
        }
      },
      nop: function(path) {
        if ($(".sj-book").turn("is")) $(".sj-book").turn("page", 1);
      }
    });
    // Flipbook
  
    flipbook.turn({
      acceleration: !isChrome(),
      autoCenter: true,
      duration: 1000,
      pages: 66,
      when: {
        turned: function(e, page, view) {
          var book = $(this);
  
          if (page == 2 || page == 3) {
            book.turn("peel", "br");
          }
          $(".prebtn,.nextbtn").show();
          if (page == 1) {
            $(".prebtn").hide();
          }
          if (page == 66) {
            $(".nextbtn").hide();
          }  
          $("#slider").slider("value", getViewNumber(book, page));
  
          book.turn("center");
        },
  
        start: function(e, pageObj) {
          moveBar(true);
        },
  
        end: function(e, pageObj) {
          var book = $(this);
    
          setTimeout(function() {
            $("#slider").slider("value", getViewNumber(book));
          }, 1);
  
          moveBar(false);
        }
      }
    });
    $(".prebtn").click(function(){
      flipbook.turn("previous");
    })
    $(".nextbtn").click(function(){
      flipbook.turn("next");
    })
  
    $("#slider").slider({
      min: 0,
      max: 65,
      start: function(event, ui) {
        if (!window._thumbPreview) {
          _thumbPreview = $("<div />", {
            class: "thumbnail"
          }).html("<div></div>");
          setPreview(ui.value);
          _thumbPreview.appendTo($(ui.handle));
        } else setPreview(ui.value);
  
        moveBar(false);
      },
  
      slide: function(event, ui) {              
        setPreview(ui.value);
      },
      stop: function() {
        if (window._thumbPreview) _thumbPreview.removeClass("show");      
        $(".sj-book").turn("page", Math.max(1, $(this).slider("value")+1));
      }
    });
    
    flipbook.addClass("animated");
  
    // Show canvas
  
    $("#canvas").css({
      visibility: ""
    });
  }
  
  $("#canvas").css({
    visibility: "hidden"
  });
  loadApp();
})