System.register(['angular2/core', './album.service', './speech.directive'], function(exports_1, context_1) {
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
    var core_1, album_service_1, speech_directive_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (album_service_1_1) {
                album_service_1 = album_service_1_1;
            },
            function (speech_directive_1_1) {
                speech_directive_1 = speech_directive_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(albumService) {
                    this.isStar = false;
                    this.showBadge = true;
                    this.title = "Selection";
                    this.imageUrl = "http://lorempixel.com/200/200";
                    this.albums = albumService.getAlbums();
                }
                AlbumsComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('onclick', $event);
                };
                AlbumsComponent.prototype.onDivClick = function () {
                    console.log('onDivClick');
                };
                AlbumsComponent.prototype.onInput = function ($event) {
                    this.title = $event.target.value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AlbumsComponent.prototype, "title", void 0);
                AlbumsComponent = __decorate([
                    core_1.Component({
                        selector: 'albums',
                        template: "\n        <h2>Albums</h2>\n        {{ title }}\n        <input type=\"text\" speech>\n        <ul>\n            <li *ngFor=\"#album of albums\">\n            {{ album }}\n            </li>\n        </ul>\n        \n        <img [src]=\"imageUrl\" />\n        \n        <div>\n            <a href=\"#\">Inbox <span>42</span></a>\n            <a href=\"#\">Inbox <span [class.badge]=\"!showBadge\">42</span></a>\n        </div>\n        <div>            \n            <a href=\"#\">Inbox <span class=\"badge\">42</span></a>\n            <a href=\"#\">Inbox <span [class.badge]=\"showBadge\">42</span></a>\n        </div>\n        <div>            \n            <a href=\"#\">Inbox <span class=\"badge\" style=\"background-color: red\">42</span></a>\n            <a href=\"#\">Inbox <span [class.badge]=\"showBadge\" \n            [style.backgroundColor]=\"showBadge ? 'red' : 'blue'\">42</span></a>\n        </div>\n        \n        <div (click)=\"onDivClick()\">\n            <button (click)=\"onClick($event)\">Submit</button>\n        </div>\n        \n        <div>\n            <input type=\"text\" [value]=\"title\" (input)=\"onInput($event)\" />\n            Preview: {{ title }}\n        </div>\n\n        <div>\n            <input type=\"text\" [(ngModel)]=\"title\" />\n            Preview: {{ title }}\n        </div>\n        \n        <div>\n            <i class=\"glyphicon\"></i>\n            <i class=\"glyphicon glyphicon-star\"></i>\n            <i class=\"glyphicon glyphicon-star-empty\"></i>\n        </div>\n        \n        <div>\n            <i class=\"glyphicon\" \n                [class.glyphicon-star]=\"isStar\"\n                [class.glyphicon-star-empty]=\"! isStar\"\n                (click)=\"isStar = !isStar\"\n                ></i>\n        </div>\n        \n        ",
                        providers: [album_service_1.AlbumService],
                        directives: [speech_directive_1.SpeechDirective]
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