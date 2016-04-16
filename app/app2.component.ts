import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component';
import {ContactForm2Component} from './contact-form2.component';

@Component({
    selector: 'my-app2',
    template: `
        <contact-form2></contact-form2>
    `,
    directives: [ContactFormComponent, ContactForm2Component]
})
export class App2Component { 
    post = {
        name: "My Name",
        isStar: true,
        totalVotes: 10,
        myVote: 0,
        totalStars: 2,
        viewMode: 'map',
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };

}