$(document).ready(function() {
	$(window).load(function() {
		$(".loader_inner").fadeOut();
		$(".loader").delay(600).fadeOut("slow");

		$(".top_text h1").animated("fadeInDown", "fadeOutUp");
		$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 
$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

});