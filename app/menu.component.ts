import {Component, Input} from 'angular2/core';

/*
<menu title="this is the title">
    Here is the content
</menu>
glyphicon-chevron-down
glyphicon-chevron-up
*/

@Component({
    selector: 'menu',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                {{ title }}
                <i class="pull-right glyphicon"                    
                    (click)="onToggle()"
                    [ngClass]="{
                        'glyphicon-chevron-down': !expand,
                        'glyphicon-chevron-up': expand
                    }"></i>
            </div>
            <div *ngIf="expand" class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class MenuComponent {
    @Input() title: string;
    expand = false;
    
    onToggle() {
        this.expand = !this.expand;        
    }
}