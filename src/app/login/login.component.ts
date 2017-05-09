import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    private loginForm : FormGroup;
    
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 

        this.loginForm = new FormGroup({
            useremail: new FormControl("", [
                Validators.required, 
                Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")
            ]),
            password: new FormControl("", Validators.required),
        });
    } 
    
    login() {
        let model: any = {};
//        {"email":"q@email.com","username":"noname","password":"Qwerty1","confirmPassword":"Qwerty1"}
        model = JSON.stringify(this.loginForm.value);
//        model = {"email":"newuser@email.com",username":"newuser","password":"hello"};
         
        this.userService.create(model)
            .subscribe(
                (data: any) => {
                    console.log(data);
                    this.alertService.success('Login successful', true);
                    this.router.navigate(['/login']);
                },
                (error: any) => {
                    this.alertService.error(error);
                });
    }   
    
}