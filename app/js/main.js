$(function () {
  
  $('.mobile__btn, .menu a').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  });

  $(".nav-link").fancybox({
		'hideOnContentClick': true
	});

  wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  );
  wow.init();

  $(".menu a, .logo, .intro__btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 150}, 1500);
    });


  $('.reviews__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg"></button>',
  });

});