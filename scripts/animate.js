$(document).ready(function() {
// ---------------------------------------------------------------------------
// This comes from Codecademy jQuery Part 4: 11/12
// http://www.codecademy.com/tracks/jquery
// It's a fine example of a switch statement, which is straight JavaScript. 
// It saves us from writing lots of "if-else if-else" lines.
// NOTE position styles in the CSS file.
// ---------------------------------------------------------------------------
// If you need to find key codes for other keys, including the numbers 
// and letters, just look them up: 
// http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
// ---------------------------------------------------------------------------
// EXERCISE
// 1. Can you figure out how to make the rocket move diagonally? 
//    Hint: Diagonal is up and left, or down and right, etc.
// 2. Can you create a button that returns the rocket to its original 
//    position? 
// 3. Can you write jQuery that hides the #wrapper the first time any 
//    key is pressed?
// ---------------------------------------------------------------------------

$(document).keydown(function(key) {

	switch(parseInt(key.which,10)) { // see URL at bottom
	
		// left arrow pressed
		case 37:
			$('#rocket').animate({left: "-=10px"}, 'fast');
			break;
		// up arrow pressed
		case 38:
			$('#rocket').animate({top: "-=10px"}, 'fast');
			break;
		// right arrow pressed
		case 39:
			$('#rocket').animate({left: "+=10px"}, 'fast');
			break;
		// down arrow pressed
		case 40:
			$('#rocket').animate({top: "+=10px"}, 'fast');
			break;
		}
	});

// ---------------------------------------------------------------------------
// wondering about parseInt(key.which,10) ? See:
// http://www.codecademy.com/forum_questions/50be3aafdf438796710005f3
// ---------------------------------------------------------------------------
}); // do not delete
