define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars',
    'views/WelcomeView',
    'controllers/HeaderController'],

    /**
     *
     * @param $
     * @param Backbone
     * @param Marionette
     * @param _
     * @param Handlebars
     * @param {Function} WelcomeView
     * @param {HeaderController} HeaderController
     * @returns {*}
     */
    function ($, Backbone, Marionette, _, Handlebars, WelcomeView, HeaderController) {

        var LayoutView = Marionette.LayoutView.extend({
            el : '#main',

            template: Handlebars.compile('<div class="header"></div><div class="welcome"></div>'),

            regions: {
                headerRegion: ".header",
                mainRegion: ".welcome"
            },

            onRender: function () {
                this.headerController = new HeaderController({region: this.headerRegion});
                this.mainRegion.show(new WelcomeView());
            }
        });

        var App = new Backbone.Marionette.Application();
        App.layoutView = new LayoutView();

        App.on("start", function () {
            App.layout.render(); // ON APP START - RENDER LAYOUT VIEW
        });

        return App;
    }
);