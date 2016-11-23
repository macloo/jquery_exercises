$(document).ready(function() {
// ---------------------------------------------------------------------------
// Inspired by Codecademy jQuery Part 4: 11/12
// http://www.codecademy.com/tracks/jquery
// It's a fine example of a switch statement, which is straight JavaScript.
// It saves us from writing lots of "if-else if-else" lines.
// NOTE: the position styles are in the CSS file.
// ---------------------------------------------------------------------------
// If you need to find key values for other keys, try this fiddle:
// https://jsfiddle.net/macloo/hzhx1hu2/
// ---------------------------------------------------------------------------
// EXERCISE
// 1. Can you figure out how to make the rocket move diagonally?
//    Hint: Diagonal is up and left, or down and right, etc.
// 2. Can you create a button that returns the rocket to its original
//    position?
// 3. Can you write jQuery that hides the #wrapper the first time any
//    key is pressed?
// ---------------------------------------------------------------------------

// e stands for "event" - in this case, the event is a keypress
// the arrow keys return: ArrowRight ArrowLeft ArrowUp ArrowDown
// they are strings - note the quotation marks below

$(document).on('keydown',function(e) {

	switch(e.key) {

		// left arrow pressed
		case "ArrowLeft":
			$('#rocket').animate({left: "-=10px"}, 'fast');
			break;
		// up arrow pressed
		case "ArrowUp":
			$('#rocket').animate({top: "-=10px"}, 'fast');
			break;
		// right arrow pressed
		case "ArrowRight":
			$('#rocket').animate({left: "+=10px"}, 'fast');
			break;
		// down arrow pressed
		case "ArrowDown":
			$('#rocket').animate({top: "+=10px"}, 'fast');
			break;
		}
	});


// ---------------------------------------------------------------------------
}); // do not delete
