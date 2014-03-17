$(document).ready(function(){
// ----------------------------------------------------------------------------
// Step 1:
//   Figure out how to hide all the columns (except the state name) and 
//   show each cell only on hover. Do not show the entire row! Only 
//   reveal the text of one table cell when that one is hovered.
// Step 2:
//   Can you offer any options to the user? For example, can you allow the 
//   user to choose which columns to hide? Maybe users could click the 
//   column heading to cover or reveal a column's text.
// ----------------------------------------------------------------------------


$('#states tr:odd').addClass('highlight');


$('#states tr').find('td:first').addClass('column-bar');
$('#states tr').find('td:first span').hide();


$('#states tr').on('mouseenter mouseleave', 'td:first', function(e){
	$(this).toggleClass('column-bar');
	$(this).find('span').toggle();
});



// ----------------------------------------------------------------------------
}); // do not delete