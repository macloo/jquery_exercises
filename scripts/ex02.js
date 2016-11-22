$(document).ready(function(){  // do not delete
// EXERCISE 2

// this part is to resize the "viewer" div for mobile only
// it works for images with a 4:3 aspect ratio - specifically 800 x 600
var viewerWidth = $( '#viewer' ).width();
if (viewerWidth < 800) {
	$( '#viewer' ).height( viewerWidth * 0.75 );
}

// this adjusts the height of the "viewer" div dynamically as the user
// resizes the browser window
$( window ).resize(function() {
	var viewerWidth = $( '#viewer' ).width();
	if (viewerWidth < 800) {
		$( '#viewer' ).height( viewerWidth * 0.75 );
	}
});

// this makes the clicked image fade out and hide
// also, the faded image is moved with .append() to the end of the queue
// to make the slideshow endless
$('.fadeitem').on('click', function() {
	$(this).fadeOut('slow', function() {
		// move it to the end of the stack of photos
		$('#viewer').append(this);
		// make it visible again
		$(this).fadeIn('fast');
	});
});

}); // do not delete
