System.register(['angular2/platform/browser', './app4.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app4_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app4_component_1_1) {
                app4_component_1 = app4_component_1_1;
            }],
        execute: function() {
            //bootstrap(AppComponent);
            //bootstrap(App2Component);
            //bootstrap(App3Component);
            browser_1.bootstrap(app4_component_1.App4Component);
        }
    }
});
//# sourceMappingURL=boot.js.map