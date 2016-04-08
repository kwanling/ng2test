import {Component} from 'angular2/core';
import {AlbumsComponent} from './albums.component';
import {StarsComponent} from './stars.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Music Box</h1>
        <albums></albums>
        <stars [isStar]="post.isStar"></stars>
        <stars [isStar]="post1.isStar" (change)="onChange($event)"></stars>
    `,
    directives: [AlbumsComponent, StarsComponent]
})
export class AppComponent { 
    
    post = {
        name: "My Name",
        isStar: true
    };
    post1 = {
        name: "My Name",
        isStar: false
    };
    
    onChange($event) {
        console.log($event);
    }
}