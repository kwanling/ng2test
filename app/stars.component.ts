
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'stars',
    template: `
        <div>
            <i class="glyphicon" 
                [class.glyphicon-star]="isStar"
                [class.glyphicon-star-empty]="! isStar"
                (click)="onClick()"
                ></i>
        </div>    
    `
})
export class StarsComponent {
    @Input() isStar = false;
    
    @Output() change = new EventEmitter();

    onClick() {
        this.isStar = !this.isStar;
        this.change.emit({ newValue: this.isStar });
    }
}