import {Component} from "angular2/core";

@Component({
    selector: 'contact',
    template: `
    <input [(ngModel)]="contact.firstName" type="text">
    <div>
        Phone: {{contact.phone}}<br>
        Email: {{contact.email}}<br>
    </div>    
    `,
    inputs: ["contact"]
})

export class ContactComponent {
    public contact = {};
}