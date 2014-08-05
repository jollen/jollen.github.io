/**
* SETUP
**/
var app = app || {};


/**
* MODELS
**/
app.PostItem = Backbone.Model.extend({
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


/**
* VIEWS
**/
app.PostItemView = Backbone.View.extend({
    el: '#postitems',
    initialize: function() {
		this.model = new app.PostItem();
        this.template = _.template($('#tmpl-postitem').html());
        
        this.render();
    },
    render: function() {
 		var htmlCodes = this.template(this.model.attributes);
        this.$el.html(htmlCodes);
    }
});


$(document).ready(function(){
    app.postItemView = new app.PostItemView();
});
