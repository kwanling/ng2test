System.register(['angular2/core', "./github.service", 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1;
    var App5Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            App5Component = (function () {
                function App5Component(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                }
                App5Component.prototype.ngOnInit = function () {
                    var _this = this;
                    this._githubService.getUserFollowers("octocat")
                        .subscribe(function (userFollowers) {
                        _this.isLoading = false;
                        _this.userFollowers = userFollowers;
                        /*
                        console.log(userFollowers.user.avatar_url)
                        console.log(userFollowers.followers[0].avatar_url);
                        */
                    });
                };
                App5Component = __decorate([
                    core_1.Component({
                        selector: 'my-app5',
                        template: "\n\n<div *ngIf=\"isLoading\">\n<i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n</div>\n\n<div *ngIf=\"!isLoading\">       \n    <h3>User</h3>\n    <div class=\"media\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n            <img class=\"media-object\"\n                class=\"avatar\" \n                [src]=\"userFollowers.user.avatar_url\">\n            </a>\n        </div>\n    </div>\n    <h3>Followers</h3>\n    <div class=\"media\"  \n        *ngFor=\"#follower of userFollowers.followers\"\n        class=\"media-left\">\n        <div>\n            <a href=\"#\">\n            <img class=\"media-object\"\n                class=\"avatar\" \n                [src]=\"follower.avatar_url\">\n            </a>\n        </div>\n    </div>\n    \n</div>\n            \n    ",
                        styles: ["\n    .avatar\t{\n        width:\t100;\n        height:\t100;\n        border-radius:\t100%;\n    }\t\n    "],
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], App5Component);
                return App5Component;
            }());
            exports_1("App5Component", App5Component);
        }
    }
});
//# sourceMappingURL=app5.component.js.map