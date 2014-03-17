$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// exercise based on Codecademy "Introducing jQuery" Part 1
// http://www.codecademy.com/tracks/jquery
// ----------------------------------------------------------------------------
// EXERCISE 1
// In the HTML file, replace the DIV that has class "fadeitem" with 
// any Vancouver image from the /images/ folder. Get the image to 
// fade in/out exactly like the circular DIV does.
// ----------------------------------------------------------------------------


// first line sets the item to a faded state immediately
$('.fadeitem').css('opacity', '0.25');

$('.fadeitem').mouseenter(function() {
	$(this).fadeTo('fast', 1)
});

$('.fadeitem').mouseleave(function() {
	$(this).fadeTo('fast', 0.25);
});


// ----------------------------------------------------------------------------
}); // do not delete
