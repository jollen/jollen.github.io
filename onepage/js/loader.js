
requirejs.config({
    baseUrl: 'vendor/',
    paths: {
        'jquery': 'jquery/dist/jquery.min',
        'underscore': 'underscore/underscore',
        'backbone': 'backbone/backbone'
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore']
        },
        'js/app.js': {
            deps: ['backbone', 'jquery', 'underscore']
        }
    }
});

requirejs([
    'backbone',
    'js/app.js'
], function() {
    
    $(document).ready(function(){        
        var app = OneApp.getApp();

        app.postItemView = new app.PostItemView();
        app.postView = new app.PostView();
    });
    
});