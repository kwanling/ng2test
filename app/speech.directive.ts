
import {Directive} from 'angular2/core';
import {ElementRef, Renderer} from 'angular2/core';

@Directive({
    selector: '[speech]',
    host: {
        '(focus)' : 'onFocus()'
    }
})
export class SpeechDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }
    
    onFocus() {
        // todo
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red') ;
    }
}