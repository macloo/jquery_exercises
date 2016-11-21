$(document).ready(function(){  // do not delete
// ----------------------------------------------------------------------------
// EXERCISE 3
// In the HTML file, first look at the code to see what has been hidden
// with this jQuery.
// Then figure out how to make the appropriate character appear when we
// hover on his or her name in the main text.
//
// Hint: From Code School, do you remember this?
// var amount = $(this).closest('.vacation').data('price');
// ----------------------------------------------------------------------------


var rama = $('#rama');
var sita = $('#sita');
var hanuman = $('#hanuman');
var ravana = $('#ravana');
var lakshmana = $('#lakshmana');

$('.character').hide();

// handles the data attributes, which are inside tags in the HTML
$('.name').hover(function() {
	var person = $(this).closest('span').data('person');
	$(person).toggle();
});



// this part is to resize the "viewer" div for mobile only
var winWidth = $( window ).width();
if ( winWidth < 800 ) {
    $('.right').prepend("<p>Click a character's name above to learn more.</p>");
} else {
    $('.right').prepend("<p>Roll over a character's name at left to learn more.</p>");
}

// ----------------------------------------------------------------------------
}); // do not delete
