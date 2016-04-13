System.register(['angular2/core', './albums.component', './stars.component', './like.component', './recommend.component'], function(exports_1, context_1) {
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
    var core_1, albums_component_1, stars_component_1, like_component_1, recommend_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (stars_component_1_1) {
                stars_component_1 = stars_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (recommend_component_1_1) {
                recommend_component_1 = recommend_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        name: "My Name",
                        isStar: true,
                        totalVotes: 10,
                        myVote: 0,
                        totalStars: 2,
                        viewMode: 'map'
                    };
                    this.albums = ['Album 1', 'Album 2', 'Album 3'];
                }
                AppComponent.prototype.onChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Music Box</h1>\n        <albums></albums>\n        <stars [isStar]=\"post.isStar\"></stars>\n        <like [totalVotes]=\"post.totalVotes\" [myVote]=\"post.myVote\"></like>\n        <recommend [totalStars]=\"post.totalStars\"></recommend>\n        \n        <ul class=\"nav nav-pills\">\n            <li><a [class.active]=\"viewMode == 'map'\" (click)=\"viewMode='map'\">Map view</a></li>\n            <li><a [class.active]=\"viewMode == 'list'\" (click)=\"viewMode='list'\">List view</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\">Map view content</template>\n            <template [ngSwitchWhen]=\"'list'\">List view content</template>\n        </div>\n        \n        <div *ngFor=\"#album of albums\">\n            <albums [title]=\"album\"></albums>\n        </div>\n        \n        <template ngFor #album [ngForOf]=\"albums\">\n            <div>\n                <albums [title]=\"album\"></albums>\n            </div>\n        <template>\n    ",
                        directives: [albums_component_1.AlbumsComponent, stars_component_1.StarsComponent, like_component_1.LikeComponent, recommend_component_1.RecommendComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map