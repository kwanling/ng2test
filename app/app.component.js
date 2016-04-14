System.register(['angular2/core', './albums.component', './stars.component', './like.component', './recommend.component', './truncate.pipe', './menu.component'], function(exports_1, context_1) {
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
    var core_1, albums_component_1, stars_component_1, like_component_1, recommend_component_1, truncate_pipe_1, menu_component_1;
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
            },
            function (truncate_pipe_1_1) {
                truncate_pipe_1 = truncate_pipe_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
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
                        viewMode: 'map',
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    };
                    this.albums = ['Album 1', 'Album 2', 'Album 3'];
                }
                AppComponent.prototype.onChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <menu title='this is the title'>\n            Here is the content\n        </menu>\n\n        <h1>Music Box</h1>\n        <albums></albums>\n        <stars [isStar]=\"post.isStar\"></stars>\n        <like [totalVotes]=\"post.totalVotes\" [myVote]=\"post.myVote\"></like>\n        <recommend [totalStars]=\"post.totalStars\"></recommend>\n        \n        <ul class=\"nav nav-pills\">\n            <li><a [class.active]=\"viewMode == 'map'\" (click)=\"viewMode='map'\">Map view</a></li>\n            <li><a [class.active]=\"viewMode == 'list'\" (click)=\"viewMode='list'\">List view</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\">Map view content</template>\n            <template [ngSwitchWhen]=\"'list'\">List view content</template>\n        </div>\n        \n        <div *ngFor=\"#album of albums\">\n            <albums [title]=\"album\"></albums>\n        </div>\n        \n        <template ngFor #album [ngForOf]=\"albums\">\n            <div>\n                <albums [title]=\"album\"></albums>\n            </div>\n        </template>\n        \n        <div>\n            {{ post.body | truncate:200 }}\n        </div>\n    ",
                        directives: [albums_component_1.AlbumsComponent, stars_component_1.StarsComponent, like_component_1.LikeComponent, recommend_component_1.RecommendComponent, menu_component_1.MenuComponent],
                        pipes: [truncate_pipe_1.TruncatePipe]
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