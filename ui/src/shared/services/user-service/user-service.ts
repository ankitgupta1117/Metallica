import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Configuration } from "../Configuration";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService{
    private userUrl: string = "/user";
    private logoutUrl: string = "/logout";

    constructor(private http: HttpClient, private  _config: Configuration){

    }

    public logout(): Observable<any>{
        let url: string = this._config.server + this.logoutUrl;
        console.log("logging out " + url);
        return this.http.post(url, {});
    }

    public getUserName(): Observable<string>{
        let url: string = this._config.server + this.userUrl;
        console.log("Getting User information");
        let headers: HttpHeaders = new HttpHeaders({
            'Content-Type':  'text/plain'
          });
        return this.http.get<string>(url);
    }
}