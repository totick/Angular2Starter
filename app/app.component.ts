import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";

//Decorator to add configuration to a class
@Component({
    selector: 'my-app',
    template: `
    <contact-list></contact-list>
    `,
    directives: [ContactListComponent]
})

export class AppComponent {
    
}