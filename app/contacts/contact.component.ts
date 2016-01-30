import {Component} from "angular2/core";

@Component({
    selector: 'contact',
    template: `
    <div>
        First name: <input [(ngModel)]="contact.firstName" type="text"><br>
        Last name: <input [(ngModel)]="contact.lastName" type="text"><br>
        Phone: <input [(ngModel)]="contact.phone" type="text"><br>
        Email: <input [(ngModel)]="contact.email" type="text"><br>
    </div>
    `,
    inputs: ["contact"]
})

export class ContactComponent {
    public contact = {};
}