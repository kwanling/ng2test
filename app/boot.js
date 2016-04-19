System.register(['angular2/platform/browser', './app5.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app5_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app5_component_1_1) {
                app5_component_1 = app5_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            //bootstrap(App2Component);
            //bootstrap(App3Component);
            //bootstrap(App4Component);
            browser_1.bootstrap(app5_component_1.App5Component);
        }
    }
});
//# sourceMappingURL=boot.js.map