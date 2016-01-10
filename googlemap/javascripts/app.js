/**
* SETUP
**/
var app = app || {};


/**
* MODELS
**/
app.Message = Backbone.Model.extend({
    url: function() {
         return 'http://localhost:3000/1/weather/latest';
    },
    id: null,
    defaults: {
        success: false,
        errfor: {},

        coord: {
          lon: 0,
          lat: 0
        },
        main: {
            temp: 0,
            humidity: 0
        }
    }
});

/**
* VIEWS
**/
app.ContentView = Backbone.View.extend({
    el: '#map',
    events: {
    },
    // constructor
    initialize: function() {
        this.model = new app.Message();
        this.model.bind('change', this.render, this);

        this.model.fetch();
    },
    render: function() {
        // get object from model
        var coord = this.model.get('coord');

        var myLatLng = {lat: coord.lat, lng: coord.lon};

        var temp = this.model.get('main').temp - 273.15;

        var map = new google.maps.Map(this.el, {
          zoom: 16,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Temp: ' + temp
        });
    }
});

$(document).ready(function(){
    app.contentView = new app.ContentView();
});
