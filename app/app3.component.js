System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var App3Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            App3Component = (function () {
                // notify completion of observable.
                function App3Component() {
                    var d1 = Rx_1.Observable.throw(new Error("error"));
                    d1.subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); }, function () { return console.log("completed"); });
                    var d2 = Rx_1.Observable.range(1, 10);
                    d2.subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); }, function () { return console.log("completed"); });
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
                    var d4 = Rx_1.Observable
                        .interval(1000)
                        .take(10)
                        .map(function (x) { return c++; });
                    d4.subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); }, function () { return console.log("completed"); });
                }
                // timeout pattern
                App3Component.prototype.constructor9 = function () {
                    var remoteDataStream = Rx_1.Observable.of([1, 2, 3, 4, 5, 6]).delay(5000);
                    remoteDataStream
                        .timeout(10000)
                        .subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
                };
                // try-A-catch-error-try-B pattern
                App3Component.prototype.constructor8 = function () {
                    var remoteDataStream = Rx_1.Observable.throw(new Error("something failed"));
                    remoteDataStream
                        .catch(function (err) {
                        var localDataStream = Rx_1.Observable.of([1, 2, 3, 4, 5]);
                        return localDataStream;
                    })
                        .delay(5000)
                        .subscribe(function (x) { return console.log(x); });
                };
                // retry pattern    
                App3Component.prototype.constructor7 = function () {
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable.of('url')
                        .delay(2000)
                        .flatMap(function () {
                        if (counter++ < 2) {
                            console.log("counter =", counter);
                            return Rx_1.Observable.throw(new Error("Request failed"));
                        }
                        return Rx_1.Observable.of([1, 2, 3]);
                    });
                    ajaxCall
                        .retry(3)
                        .subscribe(function (x) { return console.log(x); }, function (e) { return console.error(e); });
                };
                // catch observable error pattern    
                App3Component.prototype.constructor6 = function () {
                    console.log(new Rx_1.Observable());
                    var userStream = Rx_1.Observable.throw(new Error("Something failed"));
                    var tweetStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    var c = Rx_1.Observable.forkJoin(userStream, tweetStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweet: joined[1] }); });
                    //c.subscribe(x => console.log(x));   
                    c.subscribe(function (x) { return console.log(x.user); }, function (error) { return console.error(error); });
                };
                // forkJoin pattern    
                App3Component.prototype.constructor5 = function () {
                    console.log(new Rx_1.Observable());
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'kling'
                    }).delay(2000);
                    var tweetStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    var c = Rx_1.Observable.forkJoin(userStream, tweetStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweet: joined[1] }); });
                    //c.subscribe(x => console.log(x));   
                    c.subscribe(function (x) { return console.log(x.user); });
                };
                // timer interval    
                App3Component.prototype.constructor4 = function () {
                    console.log(new Rx_1.Observable());
                    // var timer = Observable.interval(1000)
                    //     .map(x => {
                    //         console.log("calling the server to get the latest news");
                    //         //return "calling the server to get the latest news" + Date.now();
                    //         return [1,2,3];
                    //     });
                    // timer.subscribe(news => console.log(news));        
                    var timer = Rx_1.Observable.interval(1000)
                        .flatMap(function (x) {
                        console.log("calling the server to get the latest news");
                        //return "calling the server to get the latest news" + Date.now();
                        return Rx_1.Observable.of([Rx_1.Observable.of(1), 2, 3]);
                    });
                    timer.subscribe(function (news) { return console.log(news); });
                };
                App3Component.prototype.constructor3 = function () {
                    console.log(new Rx_1.Observable());
                    var d1 = Rx_1.Observable.empty();
                    d1.subscribe(function (x) { return console.log(x); });
                    var d2 = Rx_1.Observable.range(1, 5);
                    d2.subscribe(function (x) { return console.log(x); });
                    var d3 = Rx_1.Observable.fromArray([1, 2, 3]);
                    d3.subscribe(function (x) { return console.log(x); });
                    var d4 = Rx_1.Observable.of(1);
                    d4.subscribe(function (x) { return console.log(x); });
                    var d5 = Rx_1.Observable.of(1, 2, 3);
                    d5.subscribe(function (x) { return console.log(x); });
                    var d6 = Rx_1.Observable.of([1, 2, 3]);
                    d6.subscribe(function (x) { return console.log(x); });
                };
                // fromArray pattern
                App3Component.prototype.constructor2 = function () {
                    console.log(new Rx_1.Observable());
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    //console.log(startDates);  
                    var d = Rx_1.Observable.fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date" + date);
                        return [1, 2, 3];
                    });
                    d.subscribe(function (x) { return console.log(x); });
                };
                App3Component = __decorate([
                    core_1.Component({
                        selector: 'my-app3',
                        template: "\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App3Component);
                return App3Component;
            }());
            exports_1("App3Component", App3Component);
        }
    }
});
//# sourceMappingURL=app3.component.js.map