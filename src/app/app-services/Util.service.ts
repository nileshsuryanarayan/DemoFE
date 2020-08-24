import { Injectable } from '@angular/core';
import { Tab } from '../app-models/Tab.model';

@Injectable()
export class UtilService {

    private gainLoseTabs: Tab[];

    getGainLoseTabs(): Tab[] {
        this.gainLoseTabs = [
            {
                head: 'Indices',
                content: 'Indices content',
                isActive: true
            },
            {
                head: 'Gainers',
                content: 'Gainers content'
            },
            {
                head: 'Losers',
                content: 'Losers content'
            },
            {
                head: 'Top Turnover',
                content: 'Top content'
            },
            {
                head: 'Trending',
                content: 'Trending content'
            },
            {
                head: 'Listing',
                content: 'Listing content'
            },
            {
                head: 'Corporate Announcement',
                content: 'CA content'
            }
        ];
        return this.gainLoseTabs;
    }
}
