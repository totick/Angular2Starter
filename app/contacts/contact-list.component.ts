import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.redText]="contact === selectedContact">{{contact.firstName}} {{contact.lastName}}</li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    styleUrls: ["../../resources/app.css"]
})

export class ContactListComponent {
    
    public selectedContact = {};
    
    public contacts = [
        { firstName: 'John', lastName: 'Lundgren', phone: '0700490691', email: 'borracho@hotmail.com' },
        { firstName: 'Kalle', lastName: 'Anka', phone: '01231230691', email: 'perdido@hotmail.com' },
        { firstName: 'Alexander', lastName: 'Lukas', phone: '465545640', email: 'vagabundo@hotmail.com' },
        { firstName: 'Joakim', lastName: 'von anka', phone: '78946546', email: 'whatever@hotmail.com' }
    ];
    
    onSelect(contact) {
        this.selectedContact = contact;
    }
}
