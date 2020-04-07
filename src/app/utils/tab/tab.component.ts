import { Component, Input } from "@angular/core";

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tabs.css']
})
export class TabComponent{

    @Input() active: boolean;
    @Input() title: string;

    public value: string = 'Tab done bhai!';

}