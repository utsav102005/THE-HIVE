$(document).ready(function () {
  $(".toggel-bar").click(function () {
    $(".menu").toggleClass("active");
  });
});

// header scroll dow
// $(document).ready(function () {
//   $(window).on("scroll", function () {
//     if ($(window).scrollTop() > 30) {
//       $("header").addClass("header-change");
//     } else {
//       $("header").removeClass("header-change");
//     }
//   });
// });

// header scroll dow tow
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $(".res-open-heasder").addClass("res-header-change");
    } else {
      $(".res-open-heasder").removeClass("res-header-change");
    }
  });
});

var header = $("header").innerHeight() + "px";
console.log("Header Height : ", header);

$("body").css("--headerHeight", header);

// slick-slider
$(".slider-mainbox").slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// resources start
$(".resources-slider-box").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// resources end

// circle-data start
$(".circle-autoplay").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1000,
});
// circle-data end

// filter button app

$(document).ready(function () {
  var $filterButtons = $(".filter-btn li");
  var $resources = $(".filter-resources");
  $filterButtons.click(function () {
    $filterButtons.removeClass("is-active");
    $(this).addClass("is-active");
    var filterClass = $(this).attr("class").split(" ")[0];
    if (filterClass === "all") {
      $resources.fadeIn();
    } else {
      $resources.hide();
      $("." + filterClass + "-box").fadeIn();
    }
  });
});

// filter helping button app

$(document).ready(function () {
  var $filterButtons = $(".filter-btn li");
  var $resources = $(".help-img-box");

  $filterButtons.click(function () {
    $filterButtons.removeClass("is-active");
    $(this).addClass("is-active");
    var filterClass = $(this).attr("class").split(" ")[0];
    if (filterClass === "filter-all") {
      $resources.fadeIn();
    } else {
      $resources.hide();
      $("." + filterClass).fadeIn();
    }
  });
});

// img-slider

$(".fade").slick({
  dots: false,
  infinite: true,
  speed: 400,
  fade: true,
  cssEase: "linear",
  autoplay: true,
});

//modal box

$(".modal-toggle").on("click", function (e) {
  e.preventDefault();
  $(".modal").toggleClass("is-visible");

  if ($(".modal").hasClass("is-visible")) {
    $("body").addClass("noscroll"); // Disable scroll
  } else {
    $("body").removeClass("noscroll"); // Enable scroll
  }
});

//  Accrodian
$(document).ready(function () {
  $(".accordian").first().addClass("active-in").slideDown();
  $(".title-acodian").first().find(".frequently-img-box").addClass("rotate");

  $(".title-acodian").click(function () {
    var accordionContent = $(this).next(".accordian");
    var imgBox = $(this).find(".frequently-img-box");

    if (accordionContent.hasClass("active-in")) {
      accordionContent.removeClass("active-in").slideUp();
      imgBox.removeClass("rotate");
    } else {
      $(".accordian").removeClass("active-in").slideUp();
      $(".frequently-img-box").removeClass("rotate");

      accordionContent.addClass("active-in").slideDown();
      imgBox.addClass("rotate");
    }
  });
});

// filter dow
$(document).ready(function () {
  $(".download-box").show();

  $(".filter-btn").click(function () {
    var filter = $(this).data("filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".download-box").fadeIn();
    } else {
      $(".download-box").hide();
      $("." + filter).fadeIn();
    }
  });

  $(".download-img").click(function () {
    var fileUrl = $(this).data("file");
    var a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileUrl.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});

// nest-filter-box

$(document).ready(function () {
  $(".three-columnvideo-box").show();

  $(".filter-btn-nest").click(function () {
    var filter = $(this).data("filter");

    $(".filter-btn-nest").removeClass("active-nest");
    $(this).addClass("active-nest");

    if (filter === "all") {
      $(".three-columnvideo-box").fadeIn();
    } else {
      $(".three-columnvideo-box").hide();
      $("." + filter).fadeIn();
    }
  });
});
