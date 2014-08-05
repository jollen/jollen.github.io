var OneApp = (function(Backbone, $, _) {
	"use strict";
    
    /**
    * SETUP
    **/
    var app = app || {};


    /**
    * MODELS
    **/
    app.PostItem = Backbone.Model.extend({
        url: function() {
            return 'http://booklog.io/1/post';
        },
        defaults: {
            "success": true,
            "errors": [],
            "errfor": {},
            "posts": [
                {
                    "_id": {
                        "subject": "Hi There"
                    },
                    "subject": "Hi There",
                    "date": "2014-08-04T08:29:51.699Z",
                    "id": "53df447f5c9eb7ba5e00014a"
                },
                {
                    "_id": {
                        "subject": "學習重點"
                    },
                    "subject": "學習重點",
                    "date": "2014-07-27T08:27:14.832Z",
                    "id": "53d4b7e28ceee0942f000957"
                }
            ]
        }
    });

    app.Post = Backbone.Model.extend({
        url: function() {
            return 'http://booklog.io/1/post/' + this.get('id');
        },
        // no good
        id: '',
        defaults: {
            "success": true,
            "errors": [],
            "errfor": {},
            "post": {
                "_id": "53d4b7e28ceee0942f000957",
                "__v": 0,
                "userCreated": {
                    "id": "530223ee98b4052056000009",
                    "time": "2014-07-27T08:27:14.832Z",
                    "name": "jollenchen"
                },
                "wchars": 0,
                "date": "2014-07-27T08:27:14.832Z",
                "isActive": true,
                "tags": [],
                "html": "",
                "content": "* Backbone Model\n * url\n * save, fetch\n* Underscore (Template)\n* Backbone View\n * initialize()\n * render()",
                "subject": "學習重點"
            }
        }
    });


    app.PostCollection = Backbone.Collection.extend({
        model: app.Post
    });


    /**
    * VIEWS
    **/
    app.PostItemView = Backbone.View.extend({
        el: '#postitems',
        events: {
            'click [data-tag="postitem"]':  'syncUp'
        },
        syncUp: function(event) {
            var me = $(event.target),
                id = me.data('post-id'),
                post = this.collection.get({id: id});

            event.preventDefault();

            app.postView.model.set(post.attributes);
        },
        initialize: function() {
            var self = this;

            this.model = new app.PostItem();
            this.collection = new app.PostCollection();

            this.template = _.template($('#tmpl-postitem').html());
            this.model.bind('change', this.render, this);

            this.model.fetch({
                success: function() {	
                    self.prefetch();                
                    $('#status-loading').addClass('hide');
                }
            }); 
        },
        prefetch: function() {
            var self = this;

            $('[data-tag="postitem"]').each(function() {
                var me = $(this), 
                    id = me.data('post-id'),
                    post = new app.Post({id: id});

                post.fetch();

                self.collection.push(post);
            });
        },
        render: function() {
            var htmlCodes = this.template(this.model.attributes);
            this.$el.html(htmlCodes);
        }
    });

    app.PostView = Backbone.View.extend({
        el: '#post',
        initialize: function() {
            this.model = new app.Post();
            this.template = _.template($('#tmpl-post').html());
            this.model.bind('change', this.render, this);
        },
        render: function() {
            var htmlCodes = this.template(this.model.attributes);
            this.$el.html(htmlCodes);
        }
    });
    
    return {
        getApp: function() { return app; }
    }

}) (Backbone, $, _);