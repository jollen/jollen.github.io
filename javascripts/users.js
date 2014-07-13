(function($) {
	$.ajax({
		dataType: 'json',
		type: 'GET',
		url: 'http://localhost:3000/1/user',
	    success: function(response, jqXHR, textStatus) {
			$('#userTemplate')
				.tmpl(response)
				.appendTo('#user-list');
	    },
	    complete: function(jqXHR, textStatus) {
	    }
	});
}) ($);