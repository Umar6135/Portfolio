// <------------------------------------NAVBAR-------------------------------->

$(document).ready(function () {
	const hamburger = $(".hamburger");
	const navlink = $(".nav-link");
	const layerWindow = $(".layer-window");

	hamburger.on("click", function () {
		hamburger.toggleClass("active");
		if (hamburger.hasClass("active")) {
			layerWindow.css("display", "block");
			navlink.css("height", navlink.prop("scrollHeight") + "px");
		} else {
			layerWindow.css("display", "none");
			navlink.css("height", "0px");
		}
	});

	layerWindow.on("click", function () {
		hamburger.removeClass("active");
		layerWindow.css("display", "none");
		navlink.css("height", "0px");
	});
});

// <------------------------------------NAVBAR End-------------------------------->




// <------------------------------------Carousal-------------------------------->
$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.carousel-item');
    var totalItems = items.length;
    var timeoutDelay = 5000; // 5 seconds delay
    var autoPlayInterval;

    // Function to start autoplay
    function startAutoPlay() {
        autoPlayInterval = setInterval(function () {
            nextSlide();
        }, timeoutDelay);
    }

    // Function to stop autoplay
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Check if carousel-inner has the class autoplay
    if ($('.carousel-inner').hasClass('autoplay')) {
        startAutoPlay();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        var newTransformValue = currentIndex * -100 + '%';
        $('.carousel-inner').css('transform', 'translateX(' + newTransformValue + ')');
        updateIndicators();
        resetAutoPlay();
    }

    function updateIndicators() {
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li[data-index="' + currentIndex + '"]').addClass('active');
    }

    function resetAutoPlay() {
        stopAutoPlay();
        if ($('.carousel-inner').hasClass('autoplay')) {
            startAutoPlay();
        }
    }

    // Add event listener to indicators
    $('.carousel-indicators li').click(function () {
        var index = $(this).data('index');
        currentIndex = index;
        updateCarousel();
    });
});


// <------------------------------------Carousal End-------------------------------->









// <-------------------------------- Tabs Start-------------------------------->
$('.tab-link').on('click', function (evt) {
	evt.preventDefault();
	$(this).toggleClass('active');
	var sel = this.getAttribute('data-toggle-target');
	$('.tab').removeClass('active').filter(sel).addClass('active');
});
$('.tech-tab-link').on('click', function (evt) {
	evt.preventDefault();
	$('.tech-tab-link').removeClass('active');
	$(this).addClass('active');
	var sel = this.getAttribute('data-toggle-target');
	$('.tech-tab').removeClass('active').filter(sel).addClass('active');
});

// <-------------------------------- Tabs End-------------------------------->










// <-------------------------------- Card Slider Start-------------------------------->

$(document).ready(function () {
	$('.cards-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,

			}

		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,

			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}]
	});
});

// <-------------------------------- Card Slider End-------------------------------->




// <-------------------------------- Client Satisfaction Start-------------------------------->
var animationRan = false;

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    var clientSatisfactionElements = $('.client-satisfaction');
    
    if (clientSatisfactionElements.length === 0) {
        // No elements with class .client-satisfaction found, so exit
        return;
    }

    var sectionOffset = clientSatisfactionElements.first().offset().top;
    var sectionHeight = clientSatisfactionElements.first().outerHeight();

    if (!animationRan && scrollDistance >= sectionOffset - $(window).height() + sectionHeight - 100) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        animationRan = true;
    }
});

// <-------------------------------- Client Satisfaction End-------------------------------->




$(function () {


	$("#contact-form").validate({

		/* @validation states + elements 
		------------------------------------------- */

		errorClass: "state-error",
		validClass: "state-success",
		errorElement: "li",

		/* @validation rules 
		------------------------------------------ */

		rules: {
			FirstName: {
				required: true
			},
			LastName: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			companyName: {
				required: true,
				
			},
			hearAboutUs: {
				required: true,
			},
			industry: {
				required: true,
			},
			projectDetail: {
				required: true,
			},
		},

		/* @validation error messages 
		---------------------------------------------- */

		messages: {
			FirstName: {
				required: "Please enter first name"
			},
			LastName: {
				required: "Please enter first name"
			},
			email: {
				required: "Please enter email address",
				email: "Please enter correct email address"
			},
			companyName: {
				required: "Please enter company name",
				
			},
			hearAboutUs: {
				required: "Select Where did you hear about us",
			},
			industry: {
				required: "Please select the Industry",
			},
			projectDetail: {
				required: "Please enter details of your project",
			},


		},

	});

});








// Reviews 
$('.team-slider').slick({
	centerMode: true,
	infinite: true,
	centerPadding: '0px',
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 500,
	variableWidth: true,
	prevArrow: $('.tS-prev'),
	nextArrow: $('.tS-next'),
  });
 
  








  $(function () {

	$('.partner-row').slick({
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 0,
	  loop: true,
	  speed: 6000,
	  cssEase: 'linear',
	  dots: false,
	  swipe: false,
	  pauseOnHover: false,
	  pauseOnFocus: false, 
	  responsive: [
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 2.5,
			slidesToScroll: 1,
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
  })