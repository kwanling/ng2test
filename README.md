

# Topics

## Creating Component

```javascript
import {Component} from 'angular2/core';

@Component({
    selector: 'albums',
    template: `
        <h2>Albums</h2>
        `
})
export class AlbumsComponent { }
```

## Consuming Component

```javascript
import {AlbumsComponent} from './albums.component';

@Component({
    selector: 'my-app',
    template: `
        <albums></albums>
    `,
    directives: [AlbumsComponent]
})
```

## Template    

```html
        <ul>
            <li *ngFor="#album of albums">
            {{ album }}
            </li>
        </ul>
```

## Creating Service

```javascript
export class AlbumService { }
```
## Consuming Service (Dependency Injection)

```javascript
@Component({
    providers: [AlbumService]
})
export class AlbumsComponent {
    constructor(albumService: AlbumService) {
    }
}
```
## Creating Directive 

```javascript
import {Directive} from 'angular2/core';

@Directive({
    selector: '[speech]',
    host: {
        '(talkspurt)' : 'onTalkspurt()'
        '(silence)' : 'onSilence()'
    }
})
export class SpeechDirective {
    
    onTalkspurt() {
        // todo
    }

    onSilence() {
        // todo   
    }
        
}
```

## Consuming Directive 

```javascript
import {SpeechDirective} from './speech.directive';

@Component({
    selector: 'albums',
    template: `
        <input type="text" speech>
        `,
    directives: [SpeechDirective]
})

```
