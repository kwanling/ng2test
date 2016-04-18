import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'observables-test',
    template: `
    `
})
export class App3Component {
    // notify completion of observable.
    constructor() {

        var d1 = Observable.throw(new Error("error"));
        d1.subscribe(
            x => console.log(x),
            err => console.error(err),
            () => console.log("completed")
        );

        var d2 = Observable.range(1,10);
        d2.subscribe(
            x => console.log(x),
            err => console.error(err),
            () => console.log("completed")
        );

        // // own counter
        // var counter = 0;
        // var d3 = Observable
        //     .interval(1000)
        //     .flatMap(x => counter < 10 ? Observable.of(counter++) : Observable.throw("error"));
        // d3.subscribe(
        //     x => console.log(x),
        //     err => console.error(err),
        //     () => console.log("completed")
        // );

        var c = 0;
        var d4 = Observable
            .interval(1000)
            .take(10)
            .map(x => c++);
        d4.subscribe(
            x => console.log(x),
            err => console.error(err),
            () => console.log("completed")
        );
                
    }

    // timeout pattern
    constructor9() {
        var remoteDataStream = Observable.of([1,2,3,4,5,6]).delay(5000);
        remoteDataStream
            .timeout(10000)
            .subscribe(
                x => console.log(x),
                err => console.error(err)
            );
    }

    // try-A-catch-error-try-B pattern
    constructor8() {
        var remoteDataStream = Observable.throw(new Error("something failed"));
        remoteDataStream
            //.delay(5000)
            .catch( err => {
                var localDataStream = Observable.of([1,2,3,4,5]);
                return localDataStream;
            })
            .delay(5000)
            .subscribe(x => console.log(x));        
    }

    // retry pattern    
    constructor7() {
        var counter = 0;
        
        var ajaxCall = Observable.of('url')
            .delay(2000)
            .flatMap( () => {
                if (counter++ < 2) {
                    console.log("counter =", counter);                    
                    return Observable.throw(new Error("Request failed"));
                }
                return Observable.of([1,2,3]);
            });
        ajaxCall
            .retry(3)
            .subscribe(
            x => console.log(x),
            e => console.error(e)
        );        
    }

    // catch observable error pattern    
    constructor6() {
        console.log(new Observable());
        
        var userStream = Observable.throw(new Error("Something failed"));
        
        var tweetStream = Observable.of([1,2,3]).delay(1500);
        
        var c = Observable.forkJoin(userStream, tweetStream)
            .map(joined => new Object({user: joined[0], tweet: joined[1]}));
            
        //c.subscribe(x => console.log(x));   
        c.subscribe(
            x => console.log(x.user),
            error => console.error(error)
            );  
    }

    // forkJoin pattern    
    constructor5() {
        console.log(new Observable());
        
        var userStream = Observable.of({
            userId: 1, username: 'kling'
        }).delay(2000);
        
        var tweetStream = Observable.of([1,2,3]).delay(1500);
        
        var c = Observable.forkJoin(userStream, tweetStream)
            .map(joined => new Object({user: joined[0], tweet: joined[1]});
        //c.subscribe(x => console.log(x));   
        c.subscribe(x => console.log(x.user));  
    }

    // timer interval    
    constructor4() {
        console.log(new Observable());
        
        // var timer = Observable.interval(1000)
        //     .map(x => {
        //         console.log("calling the server to get the latest news");
        //         //return "calling the server to get the latest news" + Date.now();
        //         return [1,2,3];
        //     });
        // timer.subscribe(news => console.log(news));        

        var timer = Observable.interval(1000)
            .flatMap(x => {
                console.log("calling the server to get the latest news");
                //return "calling the server to get the latest news" + Date.now();
                return Observable.of([Observable.of(1),2,3]);
            });
        timer.subscribe(news => console.log(news));        
        
    }
    
    constructor3() {
        console.log(new Observable());
        
        var d1 = Observable.empty();
        d1.subscribe(x => console.log(x));

        var d2 = Observable.range(1, 5);
        d2.subscribe(x => console.log(x));

        var d3 = Observable.fromArray([1,2,3]);
        d3.subscribe(x => console.log(x));

        var d4 = Observable.of(1);
        d4.subscribe(x => console.log(x));

        var d5 = Observable.of(1,2,3);
        d5.subscribe(x => console.log(x));

        var d6 = Observable.of([1,2,3]);
        d6.subscribe(x => console.log(x));
                
    }
    
    // fromArray pattern
    constructor2() {
        console.log(new Observable());
        
        var startDates = [];
        var startDate = new Date();
        
        for (var day = -2; day <=2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day);
            startDates.push(date);
        }

        //console.log(startDates);  
        
        var d = Observable.fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date" + date);
                return [1, 2, 3];
            });
            
        d.subscribe(x => console.log(x));        
        
        
    }    
   
}