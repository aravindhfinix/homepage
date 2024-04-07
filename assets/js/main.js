function preloader_fade() {
  $("#preloader").fadeOut("slow");
}
$(document).ready(function () {
  window.setTimeout("preloader_fade();", 50);
  $(".drp_btn").click(function () {
    $(this).siblings(".sub_menu").slideToggle();
  });
  $("#frmae_slider").owlCarousel({
    loop: !0,
    margin: 10,
    autoplay: !0,
    smartSpeed: 1500,
    nav: !1,
    dots: !0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $("#company_slider").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !1,
    autoplay: !0,
    smartSpeed: 1500,
    dots: !0,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $("#testimonial_slider").owlCarousel({
    loop: !0,
    margin: 10,
    nav: !1,
    autoplay: !0,
    smartSpeed: 2500,
    dots: !0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // $("#screen_slider").owlCarousel({
  //   loop: !0,
  //   margin: 20,
  //   nav: !1,
  //   dots: !0,
  //   autoplay: true,
  //   smartSpeed: 2500,
  //   center: !0,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // });
  $('#app-screens-slide').owlCarousel( {
    loop: true,
    nav: !1,
    dots: !0,
    autoplay: true,
    smartSpeed: 2500,
    center: !0,
  responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });
  $("#simpleRouterView").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2500,
    center: !0,
    responsive: {
      0: {
        items: 1,
      },
        767: {
        items: 1,
      }                                                     
    },
  });
  $(".tog_block").click(function () {
    $(".tog_btn").toggleClass("month_active"), $(".month").toggleClass("active"), $(".years").toggleClass("active"), $(".monthly_plan").toggleClass("active"), $(".yearly_plan").toggleClass("active");
  });
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".icon_faq").addClass("bi bi-dash").removeClass("bi bi-plus");
  }),
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this).prev(".card-header").find(".icon_faq").removeClass("bi bi-plus").addClass("bi bi-dash");
      })
      .on("hide.bs.collapse", function () {
        $(this).prev(".card-header").find(".icon_faq").removeClass("bi bi-dash").addClass("bi bi-plus");
      }),
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this).prev(".card-header").children("h2").children(".btn").addClass("active");
      })
      .on("hide.bs.collapse", function () {
        $(this).prev(".card-header").children("h2").children(".btn").removeClass("active");
      });

  var e = $(".go_top");
  e.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("html, body").offset().top,
      },
      400
    );
  }),
    $(window).scroll(function () {
      $(this).scrollTop() > 750 ? $(e).css("opacity", "1") : $(e).css("opacity", "0");
    });
  $(".play-button").click(function (e) {
    $("<iframe>", {
      src: $(this).data("url"),
    }),
      $("#youtubevideo").attr("src", $(this).data("url"));
  }),
    $("#close-video").click(function (e) {
      $("#youtubevideo").attr("src", "");
    });
});
$(window).on("resize", function () {
  768 > $(window).width()
    ? window.addEventListener("scroll", function () {
        var e = document.querySelector(".mobile_mockup").getBoundingClientRect();
        e.top < window.innerHeight && e.bottom >= 0 ? $(".purple_backdrop").css("opacity", "1") : $(".purple_backdrop").css("opacity", "0");
      })
    : window.addEventListener("scroll", function () {
        var e = document.querySelector(".free_text").getBoundingClientRect();
        e.top < window.innerHeight && e.bottom >= 0 ? $(".purple_backdrop").css("opacity", "1") : $(".purple_backdrop").css("opacity", "0");
      });
});
$(window).scroll(function () {
  $(window).scrollTop() >= 250 ? $("header").addClass("fix_style") : $("header").removeClass("fix_style"), $(window).scrollTop() >= 260 ? $("header").addClass("fixed") : $("header").removeClass("fixed");
});

$(document).on("hidden.bs.modal", "#myModal", function () {
  $("#youtubevideo").attr("src", "");
});

//AOS.init();
let year = new Date().getFullYear();
document.querySelector("#Years").innerHTML = year;
