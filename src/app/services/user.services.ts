import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUserUrl: string;
    constructor(public httpClient: HttpClient) {
        this.getUserUrl = "https://reqres.in/api/users"
    }

    getUsers() {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');      
        return this.httpClient.get(this.getUserUrl, { headers: headers })
    }

}
