/****************************/
/* Theme name  : Brave      */
/* Author name : Ashok      */
/****************************/

/* ****************** */
/* Tooltips & Popover */
/* ****************** */

$(".b-tooltip").tooltip();

$(".b-popover").popover();

/* ************** */
/* Magnific Popup */
/* ************** */

$(document).ready(function() {
  $('.lightbox').magnificPopup({type:'image'});
});

/* *************** */
/* Custom Dropdown */
/* *************** */

$(document).ready(function(){
	var hidden = true;
	$(".b-dropdown").click(function(e){
		e.preventDefault();
		if (hidden){
           $(this).next('.b-dropdown-block').slideToggle(400, function(){hidden = false;});
      }
	}); 
	$('html').click(function() {
        if (!hidden) {
            $('.b-dropdown-block').slideUp();
            hidden=true;
        }
   });
   $('.b-dropdown-block').click(function(event) {
        event.stopPropagation();
   }); 
});

/* ********************** */
/* Navigation - Mega menu */
/* ********************** */

$(document).ready(function($){
    $('#mgmenu1').universalMegaMenu({
        menu_effect: 'hover_slide',
        menu_speed_show: 100,
        menu_speed_hide: 200,
        menu_speed_delay: 100,
        menu_click_outside: true,
        menubar_trigger : false,
        menubar_hide : false,
        menu_responsive: true
    });
});

/* ************ */
/* Owl Carousel */
/* ************ */

$(document).ready(function() {	
	/* Owl carousel */
	$(".owl-carousel").owlCarousel({
		slideSpeed : 500,
		rewindSpeed : 1000,
		mouseDrag : true,
		stopOnHover : true
	});
	/* Own navigation */
	$(".owl-nav-prev").click(function(){
		$(this).parent().next(".owl-carousel").trigger('owl.prev');
	});
	$(".owl-nav-next").click(function(){
		$(this).parent().next(".owl-carousel").trigger('owl.next');
	});
});

/* ************* */
/* Scroll to top */
/* ************* */

$(document).ready(function() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});
	$(".totop a").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});