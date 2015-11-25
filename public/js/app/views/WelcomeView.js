define(['marionette',
        'handlebars',
        'models/Model',
        'text!templates/welcome.html'],

    function (Marionette, Handlebars, Model, template) {

        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend({
            //Template HTML string
            template: Handlebars.compile(template),

            initialize: function (options) {

                this.model = new Model({
                    mobile: options.mobile
                });
            },

            // View Event Handlers
            events: {}
        });
    });