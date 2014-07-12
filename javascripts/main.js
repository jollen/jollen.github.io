(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://booklog.io/1/post',
	    success: function(response, jqXHR, textStatus) {
			$('#postTemplate')
				.tmpl(response.posts)
				.appendTo('#content');
	    },
	    complete: function(jqXHR, textStatus) {
			$('[id=subject]').each(function(index) {
				var me = $(this);
				
				me.on('click', function() {
					var id = me.data('id');

					$.ajax({
						dataType: 'json',
						url: 'http://booklog.io/1/post/' + id,
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