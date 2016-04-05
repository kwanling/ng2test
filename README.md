

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
