import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <div>
            <i 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="myVote == 1 ? true: false"
            (click)="onClick()"> 
            </i>
            <span>
            {{ totalVotes + myVote }} 
            </span>
        </div>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() totalVotes = 0;
    @Input() myVote = 0;
    
    onClick() {
        this.myVote = this.myVote == 0 ? 1 : 0;
    }
}