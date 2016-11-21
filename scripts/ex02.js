$(document).ready(function(){  // do not delete
// EXERCISE 2

// this part is to resize the "viewer" div for mobile only
// it works for images with a 4:3 aspect ratio
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
$('.fadeitem').on('click', function() {
	$(this).fadeOut('slow', function() {
		$('#viewer').append(this);
		$(this).fadeIn('fast');
	});
});

}); // do not delete
