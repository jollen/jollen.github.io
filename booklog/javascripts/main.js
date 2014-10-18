(function($) {
	$.ajax({
		dataType: 'json',
		url: 'https://www.mokoversity.com/1/post/tags/startup',
	    success: function(response, jqXHR, textStatus) {
			$('#postTemplate')
				.tmpl(response.posts)
				.appendTo('#content');
	    },
	    complete: function(jqXHR, textStatus) {
					$.ajax({
						dataType: 'json',
						url: 'http://localhost:3000/1/post/' + id,
						success: function(response, jqXHR, textStatus) {
							$('#content').html('<h2>' 
								+ response.post.content 
								+ '</h2>');
						},
					});
				});
			});
	    }
	});
}) ($);
