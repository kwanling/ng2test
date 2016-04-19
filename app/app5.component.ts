import {Component} from 'angular2/core';
import {GithubService} from "./github.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app5',
    template: `

<div *ngIf="isLoading">
<i class="fa fa-spinner fa-spin fa-3x"></i>
</div>

<div *ngIf="!isLoading">       
    <h3>User</h3>
    <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object"
                class="avatar" 
                [src]="userFollowers.user.avatar_url">
            </a>
        </div>
    </div>
    <h3>Followers</h3>
    <div class="media"  
        *ngFor="#follower of userFollowers.followers"
        class="media-left">
        <div>
            <a href="#">
            <img class="media-object"
                class="avatar" 
                [src]="follower.avatar_url">
            </a>
        </div>
    </div>
    
</div>
            
    `,
    styles: [`
    .avatar	{
        width:	100;
        height:	100;
        border-radius:	100%;
    }	
    `],
    providers: [GithubService, HTTP_PROVIDERS]
})
export class App5Component {
    isLoading = true;
    userFollowers;
    
    constructor(private _githubService: GithubService) {
        
    }

    ngOnInit() {
        this._githubService.getUserFollowers("octocat")
            .subscribe(userFollowers => {
                this.isLoading = false;
                this.userFollowers = userFollowers;
                /*
                console.log(userFollowers.user.avatar_url)
                console.log(userFollowers.followers[0].avatar_url);
                */
            });
    }    
}