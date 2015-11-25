define([
    'marionette',
    'views/HeaderView'
],
function (Marionette, HeaderView) {
    /**
     * @class HeaderController
     */
     var HeaderController =  Marionette.Object.extend(
        /** @lends HeaderController.prototype **/
        {

            /**
             * @constructs
             * @param {Object} options
             * @param {Marionette.Region} options.region region to show in
             */
            initialize: function(options){
                this.region = options.region;
                this.region.show(new HeaderView({mobile: true})); // start view
            }
        });

        return HeaderController;
    }
);