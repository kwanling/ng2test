import {Component} from 'angular2/core';
import {AlbumsComponent} from './albums.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Music Box</h1>
        <albums></albums>
    `,
    directives: [AlbumsComponent]
})
export class AppComponent { }