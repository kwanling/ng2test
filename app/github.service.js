System.register(['angular2/http', 'rxjs/Rx', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, Rx_1, core_1;
    var GithubService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GithubService = (function () {
                function GithubService(_http) {
                    this._http = _http;
                }
                GithubService.prototype.getUser = function (username) {
                    var userUrl = "https://api.github.com/users/" + username;
                    console.log(userUrl);
                    return this._http.get(userUrl)
                        .map(function (res) { return res.json(); });
                };
                GithubService.prototype.getFollowers = function (username) {
                    var followersUrl = "https://api.github.com/users/" + username + "/followers";
                    console.log(followersUrl);
                    return this._http.get(followersUrl)
                        .map(function (res) { return res.json(); });
                };
                GithubService.prototype.getUserFollowers = function (username) {
                    var userStream = this.getUser(username);
                    var followersStream = this.getFollowers(username);
                    return Rx_1.Observable.forkJoin(userStream, followersStream)
                        .map(function (joined) { return new Object({ user: joined[0], followers: joined[1] }); });
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            }());
            exports_1("GithubService", GithubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map