import {Component, Input} from 'angular2/core';
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
        
        <img [src]="imageUrl" />
        
        <div>
            <a href="#">Inbox <span>42</span></a>
            <a href="#">Inbox <span [class.badge]="!showBadge">42</span></a>
        </div>
        <div>            
            <a href="#">Inbox <span class="badge">42</span></a>
            <a href="#">Inbox <span [class.badge]="showBadge">42</span></a>
        </div>
        <div>            
            <a href="#">Inbox <span class="badge" style="background-color: red">42</span></a>
            <a href="#">Inbox <span [class.badge]="showBadge" 
            [style.backgroundColor]="showBadge ? 'red' : 'blue'">42</span></a>
        </div>
        
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit</button>
        </div>
        
        <div>
            <input type="text" [value]="title" (input)="onInput($event)" />
            Preview: {{ title }}
        </div>

        <div>
            <input type="text" [(ngModel)]="title" />
            Preview: {{ title }}
        </div>
        
        <div>
            <i class="glyphicon"></i>
            <i class="glyphicon glyphicon-star"></i>
            <i class="glyphicon glyphicon-star-empty"></i>
        </div>
        
        <div>
            <i class="glyphicon" 
                [class.glyphicon-star]="isStar"
                [class.glyphicon-star-empty]="! isStar"
                (click)="isStar = !isStar"
                ></i>
        </div>
        
        `,
    providers: [AlbumService],
    directives: [SpeechDirective]
})
export class AlbumsComponent {
    isStar = false;
    showBadge = true;
    @Input() title = "Selection";
    imageUrl = "http://lorempixel.com/200/200";
    
    albums;
    
    constructor(albumService: AlbumService) {
        this.albums = albumService.getAlbums();
    }
    
    onClick($event) {
        $event.stopPropagation();
        console.log('onclick', $event);
    }
    
    onDivClick() {
        console.log('onDivClick');        
    }
    
    onInput($event) {
        this.title = $event.target.value;
    }
}