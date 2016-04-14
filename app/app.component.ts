import {Component} from 'angular2/core';
import {AlbumsComponent} from './albums.component';
import {StarsComponent} from './stars.component';
import {LikeComponent} from './like.component';
import {RecommendComponent} from './recommend.component';
import {TruncatePipe} from './truncate.pipe';

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
        </template>
        
        <div>
            {{ post.body | truncate:200 }}
        </div>
    `,
    directives: [AlbumsComponent, StarsComponent, LikeComponent, RecommendComponent],
    pipes: [TruncatePipe]
})
export class AppComponent { 
    post = {
        name: "My Name",
        isStar: true,
        totalVotes: 10,
        myVote: 0,
        totalStars: 2,
        viewMode: 'map',
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };

    albums = ['Album 1', 'Album 2', 'Album 3'];
        
    onChange($event) {
        console.log($event);
    }
}