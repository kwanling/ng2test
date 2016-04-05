System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AlbumService;
    return {
        setters:[],
        execute: function() {
            AlbumService = (function () {
                function AlbumService() {
                }
                AlbumService.prototype.getAlbums = function () {
                    // http://jsonplaceholder.typicode.com/albums
                    return ["quidem molestiae enim", "sunt qui excepturi placeat culpa", "omnis laborum odio"];
                };
                return AlbumService;
            }());
            exports_1("AlbumService", AlbumService);
        }
    }
});
//# sourceMappingURL=album.service.js.map