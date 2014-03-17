// NOTE If you really need dragging, use jQuery UI. See:
// http://jqueryui.com/draggable/
// ---------------------------------------------------------------------------
$(document).ready(function() {
// ---------------------------------------------------------------------------
// EXERCISE
// 1. Try the HTML page as is. Drag the box! 
// 2. Make a second div on the HTML page and find out whether it can also 
//    be dragged. 
// 3. What if you want to make two divs that are each a different color? 
//    How would you change the code? Would you change the JS or the CSS?
// ---------------------------------------------------------------------------

    // $dragging is only a variable, could be $apple
    var $dragging = null;

    $(document).on('mousemove', function(e) {
    // NOTE e here stands for event; the position updates as the mouse moves
        if ($dragging) {
            $dragging.offset({
                top: e.pageY - 100, // do not use px here
                left: e.pageX - 100
            });
            // x.offset() is a JS method that works on any object
            // pageY - http://api.jquery.com/event.pagey/
            // pageX - http://api.jquery.com/event.pagex/
        }
    });


    $(document).on('mousedown', '.dragger', function(e) {
    	// value of $dragging becomes the div that you clicked
        $dragging = $(e.target);
    });

    $(document).on('mouseup', function(e) {
        $dragging = null;
    });

// ---------------------------
}); // do not delete
