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

app.FormView = Backbone.View.extend({
    el: '#form',
    events: {
        'click #save-post': 'save'
    },
    // constructor
    initialize: function() {
        this.model = new app.Message();        
    },
    save: function(e) {
        e.preventDefault();

        var title = this.$el.find('input[name="subject"]').val();
        var content = this.$el.find('textarea[name="content"]').val();
        
        this.model.save({
            title: title,
            message: content
        }, { 
            success: function(model, response, options) {
                app.contentView.model.fetch();
            }
        });
    }
});

$(document).ready(function(){
    app.contentView = new app.ContentView();
    app.formView = new app.FormView();
});
