import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class TreeService {
    angularTreeUrl = "/api/Tree/AngularTreeNodes";
    constructor(private http: Http) {
        
    }

    getAngularTreeNodes(): Promise<Response> {
        return this.http.get(this.angularTreeUrl)
            .toPromise();
    }
}