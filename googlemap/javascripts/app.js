/**
* SETUP
**/
var app = app || {};


/**
* MODELS
**/
app.Message = Backbone.Model.extend({
    url: function() {
         return 'http://localhost:3000/1/post' 
                    + ( this.id === null ? '' : '/' + this.id );
    },
    id: null,
    defaults: {
        success: false,
        errfor: {},
        posts: [],
        post: [],
        title: '',
        message: ''
    }
});

/**
* VIEWS
**/
app.ContentView = Backbone.View.extend({
    el: '#content',
    events: {
        'click #subject': 'read'
    },
    // constructor
    initialize: function() {
        this.model = new app.Message();
        this.model.bind('change', this.render, this);
        this.template = _.template($('#post-list').html());

        this.model.fetch();
    },
    render: function() {
        var html = this.template(this.model.attributes);
        this.$el.html(html);
    },
    read: function(e) {
        var id = $(e.target).data('id');
        var self = this;
        this.model.id = id;
        this.template = _.template($('#post-single').html());
        this.model.fetch();
    }
});

$(document).ready(function(){
    app.contentView = new app.ContentView();
});
