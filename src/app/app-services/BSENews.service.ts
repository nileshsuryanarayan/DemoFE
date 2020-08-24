import { Injectable } from '@angular/core';
import { BSENews } from '../app-models/BSENews.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as env from '../../environments/environment';

@Injectable()
export class BSENewsService {
    /**
     * This service will fetch news related to bse and stocks from BE
     */

     private bseNews: BSENews[];
     private newsServURL: string = env.environment.newsWSUrl; // '../../assets/data/news.data.json'

     constructor(private http: HttpClient) {}

     getNews(): Observable<BSENews[]> {
        return this.http.get<BSENews[]>(this.newsServURL);
     }
}
