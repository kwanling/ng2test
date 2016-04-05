import {Component} from 'angular2/core';

@Component({
    selector: 'albums',
    template: `
        <h2>Albums</h2>
        {{ title }}
        <ul>
            <li *ngFor="#album of albums">
            {{ album }}
            </li>
        </ul>
        `
})
export class AlbumsComponent {
    title = "Selection";
    
    // http://jsonplaceholder.typicode.com/albums
    
    albums = ["quidem molestiae enim", "sunt qui excepturi placeat culpa", "omnis laborum odio"];
}