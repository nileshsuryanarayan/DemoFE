import { Component, HostListener } from "@angular/core";
// import {  }

@Component({
    selector: 'group-websites',
    templateUrl: './groupwebsites.component.html',
    styleUrls: ['./groupwebsites.component.css']
})
export class GroupWebsitesComponent {
    display: boolean;

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
        // LanguageComponent.display = false;
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