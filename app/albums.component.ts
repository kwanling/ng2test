import {Component} from 'angular2/core';
import {AlbumService} from './album.service';

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
        `,
    providers: [AlbumService]
})
export class AlbumsComponent {
    title = "Selection";
    albums;
    
    constructor(albumService: AlbumService) {
        this.albums = albumService.getAlbums();
    }
}