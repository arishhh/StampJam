"use strict";

// TABLE OF CONTENTS
// 1. preloader
// 2. mega menu js
// 3. fixed navbar
// 4. scroll bottom to top
// 5. custom vps hosting plan js
// 6. monthly and yearly pricing switch
// 7. tooltip
// 8. magnify popup video
// 9. hero slider one
// 10. hero slider two
// 11. client-testimonial carousel
// 12. client logo item carousel
// 13. team member carousel
// 14. video background
// 15. wow js
// 16. countdown or coming soon
// 17. sticky sidebar
// 18. chat api js
// 19. image gallery js
// 20. contact form js

// Pricing Alert
$("#pricing_open").click(function () {
  $(".fixed_side1").addClass("fixed_side1_");
  $(".pricing_popup").addClass("pricing_popup_");
  $("body").addClass("scroll_stop")
});
$(".col5_close").click(function () {
  $(".fixed_side1").removeClass("fixed_side1_"),
    $(".pricing_popup").removeClass("pricing_popup_");
    $("body").removeClass("scroll_stop")
});

$(".close").click(function () {
  $(".alert").css("display", "none");
});


// Feature Request Alert
$("#feature_open").click(function () {
  $(".fixed_side1").addClass("fixed_side1_");
  $(".requestfeature_popup").addClass("requestfeature_popup_");
  $("body").addClass("scroll_stop")
});
$(".col5_close").click(function () {
  $(".fixed_side1").removeClass("fixed_side1_"),
    $(".requestfeature_popup").removeClass("requestfeature_popup_");
    $("body").removeClass("scroll_stop")
});

$(".close").click(function () {
  $(".alert").css("display", "none");
});

// Feedback Request Alert
$("#feedback_open").click(function () {
  $(".fixed_side1").addClass("fixed_side1_");
  $(".feedback_popup").addClass("feedback_popup_");
  $("body").addClass("scroll_stop")
});
$(".col5_close").click(function () {
  $(".fixed_side1").removeClass("fixed_side1_"),
    $(".feedback_popup").removeClass("feedback_popup_");
    $("body").removeClass("scroll_stop")
});

$(".close").click(function () {
  $(".alert").css("display", "none");
});
// Feedback Request Alert
$("#language_open").click(function () {
  $(".fixed_side1").addClass("fixed_side1_");
  $(".language_popup").addClass("language_popup_");
  $("body").addClass("scroll_stop")
});
$(".col5_close").click(function () {
  $(".fixed_side1").removeClass("fixed_side1_"),
    $(".language_popup").removeClass("language_popup_");
    $("body").removeClass("scroll_stop")
});

$(".close").click(function () {
  $(".alert").css("display", "none");
});


// New Tab Content
const $tabsToDropdown = $(".tabs-to-dropdown");

function generateDropdownMarkup(container) {
  const $navWrapper = container.find(".nav-wrapper");
  const $navPills = container.find(".nav-pills");
  const firstTextLink = $navPills.find("li:first-child a").text();
  const $items = $navPills.find("li");
  const markup = `
  <div class="dropdown d-md-none unq-drpdwn">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  ${firstTextLink}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
  ${generateDropdownLinksMarkup($items)}
  </div>
  </div>
  `;
  $navWrapper.prepend(markup);
}

function generateDropdownLinksMarkup(items) {
  let markup = "";
  items.each(function () {
    const textLink = $(this).find("a").text();
    markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
  });

  return markup;
}

function showDropdownHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const $dropdownToggle = $this.find(".dropdown-toggle");
  const dropdownToggleText = $dropdownToggle.text().trim();
  const $dropdownMenuLinks = $this.find(".dropdown-menu a");
  const dNoneClass = "d-none";
  $dropdownMenuLinks.each(function () {
    const $this = $(this);
    if ($this.text() == dropdownToggleText) {
      $this.addClass(dNoneClass);
    } else {
      $this.removeClass(dNoneClass);
    }
  });
}

function clickHandler(e) {
  e.preventDefault();
  const $this = $(this);
  const index = $this.index();
  const text = $this.text();
  $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
  $this
  .closest($tabsToDropdown)
  .find(`.nav-pills li:eq(${index}) a`)
  .tab("show");
}

function shownTabsHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const index = $this.parent().index();
  const $parent = $this.closest($tabsToDropdown);
  const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
  const targetDropdownLinkText = $targetDropdownLink.text();
  $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
}

$tabsToDropdown.each(function () {
  const $this = $(this);
  const $pills = $this.find('a[data-toggle="pill"]');
  
  generateDropdownMarkup($this);
  
  const $dropdown = $this.find(".dropdown");
  const $dropdownLinks = $this.find(".dropdown-menu a");
  
  $dropdown.on("show.bs.dropdown", showDropdownHandler);
  $dropdownLinks.on("click", clickHandler);
  $pills.on("shown.bs.tab", shownTabsHandler);
});

// Hamburger
$('.hamburger').click(function () {
  $(this).toggleClass("active");
});
$(document).ready(function () {
  $("#switch_theme_mode").click(function () {
    var stylesheet = $("#stylesheet");
    var altStylesheet = $("#alt-stylesheet");
    if (stylesheet.prop("disabled")) {
      stylesheet.prop("disabled", false);
      altStylesheet.prop("disabled", true);
    } else {
      stylesheet.prop("disabled", true);
      altStylesheet.prop("disabled", false);
    }
  });
});

// Navlinks active class

$(document).ready(function () {
  $('a.nav-link').click(function (e) {
    
    $('.nav-item.active');
    
    var $parent = $(this).parent();
    $parent.addClass('active');
  });
});

// steps section
$(".card-toggle").on("click", function () {
  
  // Card toggle state 	
  $(".card-toggle").removeClass("active");
  $(this).addClass("active");
  
  var isAnimating = false;
  
  if (!isAnimating) {
    isAnimating = true;
    
    $(".card").find(".card-content").css("z-index", 0);
    $(".card").removeClass("active");
    
    var that = $(this);
    
    $(this).siblings().css("z-index", 1);
    
    setTimeout(function () {
      that.parent().toggleClass("active").find(".card-content").on("transitionend", function () {
        isAnimating = false;
      });;

    }, 10);
  } else {
    return;
  }
});

$("input,textarea").blur(function () {
  if ($(this).val()) {
    $(this).parent().addClass("filled");
  } else {
    $(this).parent().removeClass("filled");
  }
});

$(".contact").on("click", function () {
  $(".contact-form").toggleClass("active");
});
$(".contact-form input[type=submit], .contact-form .close").on("click", function (e) {
  e.preventDefault();
  $(".contact-form").toggleClass("active")
});
jQuery(function ($) {
  'use strict'; // 1. preloader
  
  $(window).ready(function () {
    $('#preloader').delay(200).fadeOut('fade');
  }); // 2. mega menu js
  
  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 767.98,
    hideTimeOut: 0
  });
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }
    
    if ($('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        var new_time = new Date();
        
        if (!this.old_time || new_time - this.old_time > 1000) {
          // animate
          $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 500);
          this.old_time = new_time;
        }
      });
    }
  });
  
  // 7. tooltip
  $('.custom-map-location li span').tooltip('show'); // 8. magnify popup video
  
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  }); // 9. hero slider one
  
  $('.hero-slider-one').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown"
  }); // 10. hero slider two
  
  $('.hero-content-slider').owlCarousel({
    loop: false,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInDown"
  }); // 11. client-testimonial carousel
  
  $('.client-testimonial').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  }); // 12. client logo item carousel
  
  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }); // 13. team member carousel
  
  $('.team-member-carousel, .gallery-img-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  }); // 16. countdown or coming soon
  
  $('.clock').countdown('2022/01/30', function (event) {
    $(this).html(event.strftime('' + '<div class="row">' + '<div class="col">' + '<h2 class="mb-1">%-D</h2>' + '<h6>Day%!d</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%H</h2>' + '<h6>Hours</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%M</h2>' + '<h6>Minutes</h6>' + '</div>' + '<div class="col">' + '<h2 class="mb-1">%S</h2>' + '<h6>Seconds</h6>' + '</div>' + '</div>'));
  }); //new countdown

  $(function () {
    // document ready
    if ($('#countdown').length) {
      var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      set_time = "December 30, 2022 00:00:00";
      var countDown = new Date(set_time).getTime();
      var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor(distance % day / hour);
        document.getElementById("minutes").innerText = Math.floor(distance % hour / minute);
        document.getElementById("seconds").innerText = Math.floor(distance % minute / second); //do something later when date is reached
        
        if (distance < 0) {
          var countdown = document.getElementById("countdown");
          var content = document.getElementById("end-countdown");
          countdown.style.display = "none";
          content.style.display = "block";
          clearInterval(x);
        }
      }, second);
    }
  }); // 17. sticky sidebar
  
  $(function () {
    // document ready
    if ($('#sticky').length) {
      // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top; // returns number
      
      var stickyHeight = $('#sticky').height();
      $(window).scroll(function () {
        // scroll event
        var limit = $('#section-footer').offset().top - stickyHeight - 20;
        var windowTop = $(window).scrollTop(); // returns number
        
        if (stickyTop < windowTop) {
          el.css({
            position: 'fixed',
            top: 20,
            width: 350
          });
        } else {
          el.css('position', 'static');
        }
        
        if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({
            top: diff
          });
        }
      });
    }
  }); // 18. chat api js
  
  var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
  
  (function () {
    var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5e19bb9b27773e0d832d0621/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })(); // Domain extention filter

  
  $('.domain-filter-title').on('click', function () {
    $('.domain-filter-list').fadeToggle("slow");
  }); // 19. image gallery js
  
  $('.image-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  }); // 20. contact form
  
  if ($("#contactForm").length) {
    setCsrf();
    $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        submitMSG(false);
      } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
      }
    });
  }
});
// JQuery end

// Get the popup element
const popup = document.getElementById("popup");

// Function to close the popup
function closePopup() {
  $(".fixed_side1").removeClass("fixed_side1_"),
  $(".pricing_popup").removeClass("pricing_popup_");
  $(".feedback_popup").removeClass("feedback_popup_");
  $(".requestfeature_popup").removeClass("requestfeature_popup_");
  $(".email_popup").removeClass("email_popup_");
  $("body").removeClass("scroll_stop")
}

// Add event listener to the document object
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePopup();
  }
});


// Receipt close
function pay()
{
  $(".receipt").slideUp("slow");
  $(".paid").slideDown("slow");
}


// Open Email Sequel
$(".open_email_popup").click(function () {
  $(".pricing_popup").removeClass("pricing_popup_");
  $(".email_popup").addClass("email_popup_");
});
$(".col5_close").click(function () {
  $(".fixed_side1").removeClass("fixed_side1_"),
  $(".email_popup").removeClass("email_popup_");
  $("body").removeClass("scroll_stop")
});

// goBack Function
// Function to go back to the previous popup
function goBack() {
  // Hide the current popup
  var currentPopup = $('.email_popup');
  currentPopup.removeClass('email_popup_');
  // Show the previous popup, if there is one
  var prevPopup = currentPopup.prev('.pricing_popup');
  if (prevPopup.length > 0) {
    prevPopup.addClass('pricing_popup_');
  }
}

// Attach event listener to the back button
$('#goBack').click(goBack);



// payment_gobakc
function goBack2() {
  // Hide the current popup
  var currentPopup = $('.payment_popup');
  currentPopup.removeClass('payment_popup_');
  // Show the previous popup, if there is one
  var prevPopup = currentPopup.prev('.email_popup');
  if (prevPopup.length > 0) {
    prevPopup.addClass('email_popup_');
  }
}
// Attach event listener to the back button
$('#payment_goBack').click(goBack2);