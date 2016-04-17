import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
import {UsernameValidators} from './username.validators';

@Component({
    selector: 'signin-form',
    templateUrl: 'app/signin-form.component.html'
})
export class SigninFormComponent {
    
    // model-driven form
    form = new ControlGroup({
        username: new Control('', Validators.compose([
            Validators.required,
            UsernameValidators.cannotContainSpace
            ]),
            UsernameValidators.shouldBeUnique
            ),
        password: new Control('', Validators.required)
    }); 
    
    signup() {
        //console.log(this.form.value);
        //var result = authSerivce.login(this.form.value)
        
        this.form.find('username').setErrors({
            invalidLogin: true
        });
    }
    
}