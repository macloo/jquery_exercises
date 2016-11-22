$(document).ready(function(){  // do not delete
// EXERCISE 3
// Hint: From Code School, do you remember this?
// var amount = $(this).closest('.vacation').data('price');


// associate each character DIV with a new variable, named the same as
// the ID of that DIV
var rama = $('#rama');
var sita = $('#sita');
var hanuman = $('#hanuman');
var ravana = $('#ravana');
var lakshmana = $('#lakshmana');
var person = "";

// hide all the character DIVs
$('.character').hide();


// handles the data attributes, which are inside tags in the HTML
// like this:  data-person="#rama"
// each character's name is inside a span with class="name"
// so when you hover on a span, jQuery grabs the data attribute for person
// and toggles (shows) the associated DIV, using the variable defined above
$('.name').hover(function() {
	person = $(this).closest('span').data('person');
	$(person).toggle();
});


// this part is to resize the "viewer" div for mobile only
var winWidth = $( window ).width();
if ( winWidth < 800 ) {
    $('.right').prepend("<p>Click a character's name above to learn more.</p>");
} else {
    $('.right').prepend("<p>Roll over a character's name at left to learn more.</p>");
}
$('.name').click(function() {
	if ( winWidth < 800 ) {
		person = $(this).closest('span').data('person');
		$(person).show().prependTo( $(this).parent() );
	}
});
$('.character').click(function() {
	if ( winWidth < 800 ) {
		$(person).hide();
	}
});


// ----------------------------------------------------------------------------
}); // do not delete
