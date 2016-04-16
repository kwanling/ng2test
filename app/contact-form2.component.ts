import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form2',
    templateUrl: 'app/contact-form2.component.html'
})
export class ContactForm2Component {
    
    onSubmit(form) {
        console.log(form);
    }
}