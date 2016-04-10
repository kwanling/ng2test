import {Component, Input} from 'angular2/core';

@Component({
    selector: 'recommend',
    template: `
        <i class="glyphicon glyphicon-star"
            *ngIf="totalStars >= 1"
            (click)="onClick()"
        ></i>
    `,
})
export class RecommendComponent {
    @Input() totalStars = 0;
 
    onClick() {
        this.totalStars += 1;
    }   
}