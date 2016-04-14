

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
## Binding

```javascript

// Property binding
// one-way binding from component to view.
<img src="{{ imageUrl }}" />
<img [src]="imageUrl" />
<img bind-src="imageUrl" />

// Class binding\
<span [class.badge]="showBadge">42</span>

// Style binding
<span [style.backgroundColor]="showBadge ? 'red' : 'blue'">42</span></a>

// Event binding
// handle events raised from the DOM
<button (click)="onClick()">Submit</button>
<button on-click="onClick()">Submit</button>

// ngModel & two-way binding

// explicit two-way binding
// one-way binding (component -> view): 
//   use property binding [] method to push component variable to DOM element
// one-way binding: (view -> component):
//   use event binding () method to push DOM event to component variable

<input type="text" [value]="title" (input)="onInput($event)" />
Preview: {{ title }}

onInput($event) {
    this.title = $event.target.value;
}

// ngModel
<input type="text" [(ngModel)]="title" />
<input type="text" bindon-ngModel="title" />
```

# Custom Component: Input

```javascript
import {Component, Input} from 'angular2/core';

@Input() myProperty = false;

```
# Custom Component: Output

```javascript
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Output change = new EventEmitter();

this.change.emit({ newValue: ... });
```

# Rendering Options

```javascript
// element will be removed from the DOM
<div *ngIf="">
some view
</div>

// element will appear in the DOM
<div [hidden]="">
another view
</div>

// element will display based on a condition
<div [ngSwitch]="...">
    <template [ngSwitchWhen]="'...'" ngSwitchDefault>Some view here</template>
    <template [ngSwitchWhen]="'...'">Another view here</template>
</div>

// element will display based on a condition
<div [ngSwitch]="...">
    <template [ngSwitchCase]="'...'" ngSwitchDefault>Some view here</template>
    <template [ngSwitchCase]="'...'">Another view here</template>
</div>

// proposal
<div [ngSwitch]="...">
    <template [ngCase]="'...'">Some view here</template>
    <template [ngCase]="'...'">Another view here</template>
</div>

// ngFor
<div *ngFor="#album of albums">
    {{ album }}
</div>

// ngClass
<div [ngClass]='{ }'>
</div>

// ngStyle
<div [ngStyle]='{ }'>
</div>

```

# Rendering ng-content directive

```javascript

// host can pass HTML markup to NG component.
<mycomponent>
    This is the body...
</mycomponent>

// use ng-content to mark the insertion point in component template.
// can have multiple insertion points with css selector. 
export class MyComponent {
    template: `
        <ng-content select=".."></ng-content>
    `

```