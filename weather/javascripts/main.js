(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Taipei',
	    success: function(response, jqXHR, textStatus) {
            var data = [];
            var obj = {};
            
            obj.temp = response.main.temp;
            obj.humidity = response.main.humidity;
            
            // Weather Icons
            switch (response.weather[0].main) {
                case "Clouds": obj.weatherIcon = "wi-day-cloudy";
            }
            
            // Celsius
            obj.celsius = parseInt(response.main.temp - 273.15);
            
            
            data.push(obj);
            
			$('#postTemplate')
				.tmpl(data)
				.appendTo('#content');
            
            $('#weather-icon').addClass('wi-day-cloudy');
	    },
	    complete: function(jqXHR, textStatus) {
            $(document).createWebSocket();
	    }
	});
}) ($);
