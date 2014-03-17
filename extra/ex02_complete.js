$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// exercise based on Codecademy "Introducing jQuery" Part 2
// http://www.codecademy.com/tracks/jquery
// ----------------------------------------------------------------------------
// EXERCISE 2
// In the HTML file, first look at the whole page to see the layout.
// Then click the first image on the page. Click each one in turn until 
// all are gone.
// Come back here and study the jQuery code.
// 1. Look at the CSS file. Go to the HTML file, add the ID "viewer" to the 
//    DIV holding the four photos. Reload and look at the whole page again.
//    Click each image. Figure out how/why this works.
// 2. Can you add something in the jQuery to make each hidden photo reappear
//    at the end of the queue? This would make the slideshow never-ending.
// ----------------------------------------------------------------------------



$('.fadeitem').on('click', function() {
	$(this).fadeOut('slow', function() {
		$('#viewer').append(this);
		$(this).fadeIn('fast');
	});
});



// ----------------------------------------------------------------------------
}); // do not delete 
