(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Taipei',
	    success: function(response, jqXHR, textStatus) {
            var data = [];
            
            data.push(response.main);
            
			$('#postTemplate')
				.tmpl(data)
				.appendTo('#content');
	    },
	    complete: function(jqXHR, textStatus) {
	    }
	});
}) ($);
