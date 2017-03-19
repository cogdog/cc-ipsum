function get_sum( lines, paragraphs ) {
	// a place to put the generated stuff
	var stuff = '';

	// loop over the number of desired paragraphs
	for (i = 0; i < paragraphs; i++) { 
	
		// open that paragraph
		stuff += '<p>';
		// now loop for the number of desired sentences
		for (j = 0; j < lines; j++) { 
		
			// append a random line from the source array
			stuff +=  all_lines[Math.floor(Math.random()*all_lines.length)];
		}
		
		// close that paragraph
		stuff += '</p>';
	}
	
	// update the div in our page
	$("#lorem").html(stuff);
}

// A $( document ).ready() block.
$( document ).ready(function() {
    get_sum( $("#sent").val(), $("#para").val() );
    
    $( ".ipso" ).change(function() {
    
    	// do a little bounds check on the form input, and make sure
    	// we have a number
    
    	if ( $(this).val() > 10) $(this).val(10);
    	if ( $(this).val() < 1) $(this).val(1);
    	if ( isNaN( $(this).val() ) ) $(this).val(5);
    	
  		get_sum( $("#sent").val(), $("#para").val() );
	});
	
	
		$("#butt").click(function() {
            get_sum( $("#sent").val(), $("#para").val() );
		});

});


