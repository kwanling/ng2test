System.register(['angular2/platform/browser', './app2.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app2_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app2_component_1_1) {
                app2_component_1 = app2_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            browser_1.bootstrap(app2_component_1.App2Component);
        }
    }
});
//# sourceMappingURL=boot.js.map