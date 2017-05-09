import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {
    private registerForm : FormGroup;
    
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 

        this.registerForm = new FormGroup({
            useremail: new FormControl("", [
                Validators.required, 
                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
            ]),
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required),
            confirmPassword: new FormControl("", Validators.required)
        });
    } 
    
    registration() {
        let model: any = JSON.stringify(this.registerForm.value);
//        model = {"email":"newuser@email.com","username":"newuser","password":"hello"};
         
        this.userService.create(model)
            .subscribe(
                (data: any) => {
                    console.log(data);
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                (error: any) => {
                    this.alertService.error(error);
                });
    }   
    
}