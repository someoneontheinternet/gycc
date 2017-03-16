var view = $(window);
var pos = 0;

var navbar = $(".navigation");
var doc = $(".intro");

var navPos = doc.offset().top - 60;

view.on('scroll', function() {
  pos = view.scrollTop();

  if (pos > navPos) {
    navbar.addClass("black");
  } else {
    navbar.removeClass("black");
  }
});

$(document).ready(function() {
  hideLoader();

  // Loading Animation
  setTimeout(function() {
    $(".preload").removeClass("preload");
  }, 400);
  // End Loading Animation
});

function hideLoader() {
    $('#loader').fadeOut(700);

    $(".section-left").css("left", "-52%");
    $(".section-right").css("right", "-52%");

    setTimeout(function () {
        $('#loader-wrapper').remove();
    }, 2000);
}

var dropdownBtn = $(".dropdown-btn");
dropdownBtn.on("click", toggleDropdown);

function toggleDropdown() {
  if (navbar.hasClass("open")) {
    navbar.removeClass("open");
    dropdownBtn.removeClass("open");
  } else {
    navbar.addClass("open");
    dropdownBtn.addClass("open");
  }
}

var conContainer = $(".lan-container");
var contents = $(".lan-container .row").children();
var cont = $("#cont");

//console.log(contents);

var wrap = false;

resize();

view.on("resize", resize);

function resize() {
   navPos = doc.offset().top - 60;

   if (view.innerWidth() > 995 && wrap == true) {

     var rows = conContainer.children();

     for (var i = 1; i < rows.length; i++) {
       rows[i].remove();
     }

     conContainer.append('<div id="cont" class="row"></div>');

     for (var i = 0; i < contents.length; i++) {
       $(contents[i]).removeClass("col-xs-6");
       $(contents[i]).addClass("col-md-3");
     }

     $(".lan-container .row").append(contents);

     wrap = false;
   }

   if (view.innerWidth() < 995 && wrap == false) {

     cont.remove();

     conContainer.append('<div class="row"></div>');
     conContainer.append('<div class="row"></div>');

     var newCont = $(".lan-container .row");

     console.log(contents);

     for (var i = 0; i < contents.length; i++) {
       $(contents[i]).removeClass("col-md-3");
       $(contents[i]).addClass("col-xs-6");
     }

     newCont[0].append(contents[0]);
     newCont[0].append(contents[1]);
     newCont[1].append(contents[2]);
     newCont[1].append(contents[3]);

     wrap = true;
   }
}
























//
