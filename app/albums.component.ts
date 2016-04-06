import {Component} from 'angular2/core';
import {AlbumService} from './album.service';
import {SpeechDirective} from './speech.directive';

@Component({
    selector: 'albums',
    template: `
        <h2>Albums</h2>
        {{ title }}
        <input type="text" speech>
        <ul>
            <li *ngFor="#album of albums">
            {{ album }}
            </li>
        </ul>
        `,
    providers: [AlbumService],
    directives: [SpeechDirective]
})
export class AlbumsComponent {
    title = "Selection";
    albums;
    
    constructor(albumService: AlbumService) {
        this.albums = albumService.getAlbums();
    }
}