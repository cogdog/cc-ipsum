function get_sum( lines, paragraphs ) {

	var stuff = '';

	for (i = 0; i < paragraphs; i++) { 
	
	stuff += '<p>';
	
		for (j = 0; j < lines; j++) { 
			stuff +=  all_lines[Math.floor(Math.random()*all_lines.length)];
		}
		
	stuff += '</p>';
	}

	$("#lorem").html(stuff);
}

function checkSubmit(e) {
   if(e && e.keyCode == 13) {
      document.forms[0].submit();
   }
}

// A $( document ).ready() block.
$( document ).ready(function() {
    get_sum( $("#sent").val(), $("#para").val() );
    
    $( ".ipso" ).change(function() {
    
    	if ( $(this).val() > 10) $(this).val(10);
    	if ( $(this).val() < 1) $(this).val(1);
    	if ( isNaN( $(this).val() ) ) $(this).val(5);
    	
  		get_sum( $("#sent").val(), $("#para").val() );
	});
	
	
		$("#butt").click(function() {
            get_sum( $("#sent").val(), $("#para").val() );
		});

});


