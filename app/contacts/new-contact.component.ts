import {Component, OnInit} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router, RouteParams} from "angular2/router";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

@Component({
    template:`
     <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
        <div>
            <label>First name:</label>
            <input type="text" [ngFormControl]="myForm.controls['firstName']" #firstName="ngForm">
            <span *ngIf="!firstName.valid">Not valid</span>
        </div>
        <div>
            <label>Last name:</label>
            <input type="text" [ngFormControl]="myForm.controls['lastName']" #lastName="ngForm">
            <span *ngIf="!lastName.valid">Not valid</span>
        </div>
        <div>
            <label>Phone:</label>
            <input type="text" [ngFormControl]="myForm.controls['phone']" #phone="ngForm">
            <span *ngIf="!phone.valid">Not valid</span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" [ngFormControl]="myForm.controls['email']" #email="ngForm">
            <span *ngIf="!email.valid">Not valid</span>
        </div>
        <button type="submit" [disabled]="!myForm.valid">Create Contact</button>
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
    
    public myForm: ControlGroup;
    
    //The Router does not need to be added to the providers list because it is generated in the boot.ts file
    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder) {}
    
    onSubmit(formValue){
        this._contactService.insertContact(formValue);
        this._router.navigate(['Contacts']);
    }
    
    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: [this._routeParams.get('lastName'), Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }
    
}