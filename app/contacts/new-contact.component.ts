import {Component, OnInit} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";

@Component({
    template:`
     <form #myForm="ngForm" (ngSubmit)="onSubmit()">
        <div>
            <label>First name:</label>
            <input type="text" required ngControl="firstName" [(ngModel)]="newContact.firstName" #firstName="ngForm">
            <span *ngIf="!firstName.valid">Not valid</span>
        </div>
        <div>
            <label>Last name:</label>
            <input type="text" required ngControl="lastName" [(ngModel)]="newContact.lastName" #lastName="ngForm">
            <span *ngIf="!lastName.valid">Not valid</span>
        </div>
        <div>
            <label>Phone:</label>
            <input type="text" required ngControl="phone" [(ngModel)]="newContact.phone" #phone="ngForm">
            <span *ngIf="!phone.valid">Not valid</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" required ngControl="email" [(ngModel)]="newContact.email" #email="ngForm">
            <span *ngIf="!email.valid">Not valid</span>
        </div>
        <button type="submit" [disabled]="!myForm.form.valid">Create Contact</button>
    </form>
    `,
    styles: [`
        .ng-invalid{
            border:1px solid red;
        }
        form div span{
            color: red;
        }
    `],
    providers: [ContactService]
})

export class NewContactComponent implements OnInit {
    
    public newContact: Contact;
    
    //The Router does not need to be added to the providers list because it is generated in the boot.ts file
    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}
    
    onSubmit(){
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }
    
    ngOnInit():any {
        this.newContact = {
            firstName: '',
            lastName: this._routeParams.get('lastName'),
            email: '',
            phone: ''
        };
    }
    
}