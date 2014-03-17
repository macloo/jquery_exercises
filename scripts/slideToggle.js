$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// Step 1:
//   Load the HTML in your browser, click all the gray bars, and 
//   notice the differences among them.
// Step 2: 
//   Here in the JS/jQuery, change ALL boxes to slideToggle at the 
//   Test it in your browser.
// Step 3:
//   Can you do exactly the same thing with ONE function instead of FOUR? 
//   Now that all four work the same way, can you control all with a 
//   single function?
// ----------------------------------------------------------------------------


$('.box').hide(); // hides all elements with class '.box' 


// script for box 1 
$('#b1').on('click', function() {
	$('.one').toggle();
});

// script for box 2 
$('#b2').on('click', function() {
	$('.two').slideToggle('fast');
});

// script for box 3 
$('#b3').on('click', function() {
	$('.three').toggle();
});

// script for box 4 
$('#b4').on('click', function() {
	$('.four').fadeToggle();
});
 


// ----------------------------------------------------------------------------
}); // do not delete 
