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



$('.character').hide();
$('.right').prepend("<p>Roll over a character's name to learn more.</p>");

$('.name').hover(function() {
	var person = $(this).closest('span').text().toLowerCase();
	$(eval("'#" + person + "'")).toggle(); // does not work w/o eval() 
});



// ----------------------------------------------------------------------------
}); // do not delete
