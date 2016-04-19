import {Component} from 'angular2/core';
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'my-app4',
    template: `
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class App4Component {
    constructor(private _postService: PostService) {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }   
}