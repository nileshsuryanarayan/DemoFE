import { Injectable } from "@angular/core";
import { BSENews } from '../app-models/BSENews.model';

@Injectable()
export class BSENewsService {
    /**
     * This service will fetch news related to bse and stocks from BE
     */

     private bseNews: BSENews[];

     getLatestNews(): BSENews[]{
        this.bseNews = [
            {
                imageUrl: '../../assets/bse-logo.png',
                heading: 'Heading 1',
                content: ''

            },
            {
                imageUrl: '../../assets/bse.jpg',
                heading: 'Heading 2',
                content: ''
            },
            {
                imageUrl: '../../assets/spbse.png',
                heading: 'Heading 3',
                content: ''
            },
            {
                imageUrl: '../../assets/errorimage.png',
                heading: 'Heading 4',
                content: ''
            }
        ]
        return this.bseNews;
     }
}