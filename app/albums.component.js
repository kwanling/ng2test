System.register(['angular2/core', './album.service'], function(exports_1, context_1) {
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
    var core_1, album_service_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(albumService) {
                    this.title = "Selection";
                    this.albums = albumService.getAlbums();
                }
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: 'albums',
                        template: "\n        <h2>Albums</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor=\"#album of albums\">\n            {{ album }}\n            </li>\n        </ul>\n        ",
                        providers: [album_service_1.AlbumService]
                    }), 
                    __metadata('design:paramtypes', [album_service_1.AlbumService])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map