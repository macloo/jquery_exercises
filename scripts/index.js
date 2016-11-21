$(document).ready(function(){  // do not delete
// ----------------------------------------------------------------------------

// this is all for mobile only

var ex01 = $('#ex01');
var ex02 = $('#ex02');
var ex03 = $('#ex03');
var hideslidefade = $('#hideslidefade');
var slideToggle = $('#slideToggle');
var drag = $('#drag');
var animate = $('#animate');
var states = $('#states');

// this part is to detext mobile width
var winWidth = $( window ).width();
if ( winWidth < 670 ) {
    $('ul').hide();
    $('p').append("<em> Click for link.</em>")
}


// handles the data attributes, which are inside tags in the HTML
$('p').click(function() {
    $('ul').hide();
	var exercise = $(this).data('descrip');
	$(exercise).show();
    $(this).after($(exercise));
});


// ----------------------------------------------------------------------------
}); // do not delete
