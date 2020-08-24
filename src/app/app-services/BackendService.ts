import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {

    private CapsRestURL: string = "";
    private request = 
    {
        INPUT_USER: "50191150020NSURY",
        INPUT_GRANTID: "PBSALL",
        INPUT_ACQ: "50191150557"
    };
    private header = 
    {
        headers: {
            "Authorization": "Basic VUFPODpBVUcyMDE5",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    // private JSONRequest = this.request | JsonPipe;
    constructor(private http: HttpClient) {}

    getCapsRestData(): Observable<Object> {

        // this.http.post<JSON>(this.CapsRestURL, this.request,);
        
        return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    }
}