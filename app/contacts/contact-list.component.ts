import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {ContactComponent} from "./contact.component";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.redText]="contact === selectedContact">{{contact.firstName}} {{contact.lastName}}</li>
    </ul>
    <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["../../resources/contact-list.css"]
})

export class ContactListComponent implements OnInit {
    
    public selectedContact = null;
    
    public contacts: Contact [];
    
    //Shortcut for assigning an attribute in the constructor e.g this._contactService = _contactService
    constructor(private _contactService: ContactService){}
    
    onSelect(contact) {
        this.selectedContact = contact;
    }
    
    getContacts(){
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }
    
    ngOnInit():any{
        this.getContacts();
    }
}
