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
    `,
    directives: [AlbumsComponent, StarsComponent, LikeComponent, RecommendComponent]
})
export class AppComponent { 
    
    post = {
        name: "My Name",
        isStar: true,
        totalVotes: 10,
        myVote: 0,
        totalStars: 2
    };
    
    onChange($event) {
        console.log($event);
    }
}