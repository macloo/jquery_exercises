$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// EXERCISE 
// Open the HTML page in your browser, play with each button, see 
// what the panel does. Then compare it to the jQuery here.
// Change each script below, one at a time, save, reload, play again.
// Don't change the CSS, though! It's used by other files.
// ----------------------------------------------------------------------------


// script for button 1 and panel 1 
$('#p1').click (function() {
	$('.one').toggle('fast');
});

// script for button 2 and panel 2 
$('#p2').click (function() {
	$('.two').slideToggle();
});

// script for button 3 and panel 3 
$('#p3').click (function() {
	$('.three').toggle();
});

// script for button 4 and panel 4 
$('#p4').click (function() {
	$('.four').fadeToggle();
});
 


// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
