$(document).ready(function(){
// ----------------------------------------------------------------------------
// This version affects only one column in the #states table. Can you
// figure out which column?
// ----------------------------------------------------------------------------


$('#states tr:odd').addClass('highlight');


$('#states tr').find('td:nth-child(4)').addClass('column-bar');
$('#states tr').find('td:nth-child(4) span').hide();


$('#states tr').on('mouseenter mouseleave', 'td:nth-child(4)', function(e){
	$(this).toggleClass('column-bar');
	$(this).find('span').toggle();
});



// ----------------------------------------------------------------------------
}); // do not delete; closes (document).ready function 
