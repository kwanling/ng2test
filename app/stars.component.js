System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var StarsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarsComponent = (function () {
                function StarsComponent() {
                    this.isStar = false;
                    this.change = new core_1.EventEmitter();
                }
                StarsComponent.prototype.onClick = function () {
                    this.isStar = !this.isStar;
                    this.change.emit({ newValue: this.isStar });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], StarsComponent.prototype, "isStar", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StarsComponent.prototype, "change", void 0);
                StarsComponent = __decorate([
                    core_1.Component({
                        selector: 'stars',
                        template: "\n        <div>\n            <i class=\"glyphicon\" \n                [class.glyphicon-star]=\"isStar\"\n                [class.glyphicon-star-empty]=\"! isStar\"\n                (click)=\"onClick()\"\n                ></i>\n        </div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarsComponent);
                return StarsComponent;
            }());
            exports_1("StarsComponent", StarsComponent);
        }
    }
});
//# sourceMappingURL=stars.component.js.map