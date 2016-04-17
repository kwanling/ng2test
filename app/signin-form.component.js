System.register(['angular2/core', 'angular2/common', './username.validators'], function(exports_1, context_1) {
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
    var core_1, common_1, username_validators_1;
    var SigninFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (username_validators_1_1) {
                username_validators_1 = username_validators_1_1;
            }],
        execute: function() {
            SigninFormComponent = (function () {
                function SigninFormComponent() {
                    // model-driven form
                    this.form = new common_1.ControlGroup({
                        username: new common_1.Control('', common_1.Validators.compose([
                            common_1.Validators.required,
                            username_validators_1.UsernameValidators.cannotContainSpace
                        ]), username_validators_1.UsernameValidators.shouldBeUnique),
                        password: new common_1.Control('', common_1.Validators.required)
                    });
                }
                SigninFormComponent.prototype.signup = function () {
                    //console.log(this.form.value);
                    //var result = authSerivce.login(this.form.value)
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                };
                SigninFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signin-form',
                        templateUrl: 'app/signin-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SigninFormComponent);
                return SigninFormComponent;
            }());
            exports_1("SigninFormComponent", SigninFormComponent);
        }
    }
});
//# sourceMappingURL=signin-form.component.js.map