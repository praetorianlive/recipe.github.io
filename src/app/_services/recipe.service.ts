import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class RecipeService implements OnInit {
    private host: string = 'http://localhost:8080';
//    private host: string = 'http://year-week.date';
    private headers: Headers;
    
    constructor (private http: Http) {
    }    
    
    ngOnInit() { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            this.headers.append('Authorization', 'Bearer ' + currentUser.token);    
        }
    }
    
    getRecipe(url: string): any {
        return this.http
            .get(`${this.host}/${url}`, {headers : this.headers})
            .map((response: Response) => response.json());
    }
    
    createRecipe(url: string, content: string): any {
        return this.http
            .post(`${this.host}/${url}`, content, {headers: this.headers})
            .map((response: Response) => response.json());
    }

}