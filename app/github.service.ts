import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()
export class GithubService {
    
    constructor(private _http: Http) {
        
    }    
    
    getUser(username: string) {
        var userUrl = "https://api.github.com/users/" + username;
        console.log(userUrl);
        
        return this._http.get(userUrl)
            .map(res => res.json());
    }
    
    getFollowers(username: string) {
        var followersUrl = "https://api.github.com/users/" + username + "/followers";
        console.log(followersUrl);

        return this._http.get(followersUrl)
            .map(res => res.json());
    }
    
    getUserFollowers(username: string) {
        var userStream = this.getUser(username);
        var followersStream = this.getFollowers(username);
        
        return Observable.forkJoin(userStream, followersStream)
            .map(joined => new Object({user: joined[0], followers: joined[1]}));
    }
}