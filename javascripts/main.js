(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://booklog.io/1/post',
	    success: function(response) {
			$('#postTemplate')
				.tmpl(response.posts)
				.appendTo('#content');
	    }
	});
}) ($);