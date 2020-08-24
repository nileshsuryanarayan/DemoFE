import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'language',
    templateUrl: './langauge.component.html',
    styleUrls: ['./langauge.component.css']
})
export class LanguageComponent implements OnInit {

    private display: boolean;

    ngOnInit() {
        this.display = false;
    }

    /**
     *
     * @param $event
     * @description listens to the respective element's click event
     */
    displayDropdown($event) {
        $event.stopPropagation();
        this.display = !this.display;
    }

    /**
     * @param event listens to document object
     * @description This method listens to document object,
     *              if user clicks anywhere on the screen except
     *              the button or the displayed ul, then the ul
     *              will be hidden
     */
    @HostListener('document:click', ['$event']) onDocumentClick(event) {
        this.display = false;
    }
}
