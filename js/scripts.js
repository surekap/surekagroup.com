jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var $slider = jQuery("#home-slider");
	$slider.flexslider({
		'controlNav': true,
		'directionNav': false
	});

	jQuery('.s-prev').on("click", function(e) {
		$slider.flexslider('prev');
		e.preventDefault();
	});

	jQuery('.s-next').on("click", function(e) {
		$slider.flexslider('next');
		e.preventDefault();
	});

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('ul#navigation').superfish({
		delay:       300,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Responsive Menus Init with jPanelMenu
	 ----------------------------------------- */
	$("#mobilemenu").mmenu();

	$(".fb").fancybox();


	if ( $("#map").length ) {
		map_init();
	}
});


function map_init() {
	'use strict';
	var myLatlng = new google.maps.LatLng(33.59,-80);
	var mapOptions = {
		zoom: 8,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var contentString = '<div id="content">Change it to whatever your want! <strong>HTML</strong> too!</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello'
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}