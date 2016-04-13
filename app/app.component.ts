import {Component} from 'angular2/core';
import {AlbumsComponent} from './albums.component';
import {StarsComponent} from './stars.component';
import {LikeComponent} from './like.component';
import {RecommendComponent} from './recommend.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Music Box</h1>
        <albums></albums>
        <stars [isStar]="post.isStar"></stars>
        <like [totalVotes]="post.totalVotes" [myVote]="post.myVote"></like>
        <recommend [totalStars]="post.totalStars"></recommend>
        
        <ul class="nav nav-pills">
            <li><a [class.active]="viewMode == 'map'" (click)="viewMode='map'">Map view</a></li>
            <li><a [class.active]="viewMode == 'list'" (click)="viewMode='list'">List view</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'">Map view content</template>
            <template [ngSwitchWhen]="'list'">List view content</template>
        </div>
        
        <div *ngFor="#album of albums">
            <albums [title]="album"></albums>
        </div>
        
        <template ngFor #album [ngForOf]="albums">
            <div>
                <albums [title]="album"></albums>
            </div>
        <template>
    `,
    directives: [AlbumsComponent, StarsComponent, LikeComponent, RecommendComponent]
})
export class AppComponent { 
    
    post = {
        name: "My Name",
        isStar: true,
        totalVotes: 10,
        myVote: 0,
        totalStars: 2,
        viewMode: 'map'
    };

    albums = ['Album 1', 'Album 2', 'Album 3'];
        
    onChange($event) {
        console.log($event);
    }
}