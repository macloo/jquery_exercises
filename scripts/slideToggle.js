$(document).ready(function(){  // do not delete
// ----------------------------------------------------------------------------
// using the DOM:
// when you click any h2 element, the next element (after it) that has
// the class "box" will slide open or closed
// in this version, all paragraphs may be open at the same time
// ----------------------------------------------------------------------------

$('.box').hide(); // hides all elements with class '.box'


$('h2').on('click', function() {
	$(this).next('.box').slideToggle();
});


// ----------------------------------------------------------------------------
}); // do not delete
