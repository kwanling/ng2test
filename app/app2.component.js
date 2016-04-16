System.register(['angular2/core', './contact-form.component', './contact-form2.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_form_component_1, contact_form2_component_1;
    var App2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (contact_form2_component_1_1) {
                contact_form2_component_1 = contact_form2_component_1_1;
            }],
        execute: function() {
            App2Component = (function () {
                function App2Component() {
                    this.post = {
                        name: "My Name",
                        isStar: true,
                        totalVotes: 10,
                        myVote: 0,
                        totalStars: 2,
                        viewMode: 'map',
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    };
                }
                App2Component = __decorate([
                    core_1.Component({
                        selector: 'my-app2',
                        template: "\n        <contact-form2></contact-form2>\n    ",
                        directives: [contact_form_component_1.ContactFormComponent, contact_form2_component_1.ContactForm2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App2Component);
                return App2Component;
            }());
            exports_1("App2Component", App2Component);
        }
    }
});
//# sourceMappingURL=app2.component.js.map