$(document).ready(function(){  // do not delete
// ----------------------------------------------------------------------------
// using the DOM:
// when you click any h2 element, the next element (after it) that has
// the class "box" will slide open or closed
// in this version, only one paragraph is open at any time 
// ----------------------------------------------------------------------------

$('.box').hide(); // hides all elements with class '.box'

var currentOpen;

$('h2').on('click', function() {
	var newOpen = $(this).next('.box');

	if ( currentOpen === newOpen ) {
		$(currentOpen).slideUp();
	} else if ( currentOpen !== undefined ) {
		$(newOpen).slideDown();
		$(currentOpen).slideUp();
	} else {
		$(newOpen).slideDown();
	}
	// store the newly opened one for next time
	currentOpen = newOpen;
});


// ----------------------------------------------------------------------------
}); // do not delete
