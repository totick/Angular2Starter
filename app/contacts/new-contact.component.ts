import {Component} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";

@Component({
    template:`
     <div>
        First name: <input type="text" #firstName><br>
        Last name: <input type="text" #lastName><br>
        Phone: <input type="text" #phone><br>
        Email: <input type="text" #email><br>
        <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
    </div>
    `,
    providers: [ContactService]
})

export class NewContactComponent{
    
    public newContact: Contact;
    
    //The Router does not need to be added to the providers list because it is generated in the boot.ts file
    constructor(private _contactService: ContactService, private _router: Router) {}
    
    onAddContact(firstName, lastName, phone, email){
        this.newContact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }
    
}