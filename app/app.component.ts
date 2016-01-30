import {Component} from 'angular2/core';

//Decorator to add configuration to a class
@Component({
    selector: 'my-app',
    template: `
    <h3 (click)="onSelect()" [class.redText]="showDetail === true">{{contact.firstName}} {{contact.lastName}}</h3>
    <input [(ngModel)]="contact.firstName" type="text">
    <div *ngIf="showDetail === true">
        Phone number: {{contact.phone}}<br>
        Email: {{contact.email}}
    </div>
    `,
    styleUrls: ["../resources/app.css"]
})

export class AppComponent {
    public contact = { firstName: 'John', lastName: 'Lundgren', phone: '0700490691', email: 'borracho@hotmail.com' };
    public showDetail = false;
    
    onSelect() {
        this.showDetail = true;
    }
}