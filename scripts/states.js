$(document).ready(function(){
// ----------------------------------------------------------------------------
// Suggestion: To figure out how the jQuery works, comment out one line,
// save, relaod the HTML in your browser, see what has changed. Come back
// to the jQuery, restore that line, and comment out another line. Save
// and repeat.
// ----------------------------------------------------------------------------


$('#states tr:odd').addClass('highlight');


$('#states tr').find('td').addClass('column-bar');
$('#states tr').find('td span').hide();


$('#states tr').on('mouseenter mouseleave', 'td', function(e) {
	$(this).toggleClass('column-bar');
	$(this).find('span').toggle();
});


// everything below is only for small screens, to hide columns --
// a great jQuery trick! -- to make table more usable on mobile

// get the width of the browser
var winWidth = $( window ).width();

// this will be appended if screen is small
var choices = "<p>Select:</p> " +
	"<div class='choice' id='capital'>Capital</div>" +
	"<div class='choice' id='city'>Largest City</div>" +
	"<div class='choice' id='bird'>Bird</div>" +
	"<div class='choice' id='flower'>Flower</div>";

// how we select a column from a table -- and put it into a variable
var	capitalCol = $('table tr > td:nth-child(2), table tr > th:nth-child(2)');
var	cityCol = $('table tr > td:nth-child(3), table tr > th:nth-child(3)');
var	birdCol = $('table tr > td:nth-child(4), table tr > th:nth-child(4)');
var	flowerCol = $('table tr > td:nth-child(5), table tr > th:nth-child(5)');

// nothing happens below unless browser width is less than 601 pixels 
if ( winWidth < 601 ) {
	$('#wrapper').append(choices);
	function hideAll() {
		$(capitalCol).hide();
		$(cityCol).hide();
		$(birdCol).hide();
		$(flowerCol).hide();
	}
	// first hide all the columns
	hideAll();
	// show the one that was clicked
	$(capitalCol).show();
	$("#capital").click(function() {
		hideAll();
		$(capitalCol).show();
	});
	$("#city").click(function() {
		hideAll();
		$(cityCol).show();
	});
	$("#bird").click(function() {
		hideAll();
		$(birdCol).show();
	});
	$("#flower").click(function() {
		hideAll();
		$(flowerCol).show();
	});
}

// ----------------------------------------------------------------------------
}); // do not delete
