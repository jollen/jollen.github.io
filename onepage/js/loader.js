
requirejs.config({
    baseUrl: 'vendor/',
    paths: {
        'jquery': 'jquery/dist/jquery.min.js',
        'underscore': 'underscore/underscore.js',
        'backbone': 'backbone/backbone.js'
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
        app.postItemView = new app.PostItemView();
        app.postView = new app.PostView();
    });
    
});