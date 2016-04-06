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
    var core_1, core_2;
    var SpeechDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            SpeechDirective = (function () {
                function SpeechDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                SpeechDirective.prototype.onFocus = function () {
                    // todo
                    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
                };
                SpeechDirective = __decorate([
                    core_1.Directive({
                        selector: '[speech]',
                        host: {
                            '(focus)': 'onFocus()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_2.Renderer])
                ], SpeechDirective);
                return SpeechDirective;
            }());
            exports_1("SpeechDirective", SpeechDirective);
        }
    }
});
//# sourceMappingURL=speech.directive.js.map