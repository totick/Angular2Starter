import {Component} from 'angular2/core';



@Component({
    selector: 'my-app',
    template: `
    <h3>{{contact.lastName}}</h3>
    `
})
export class AppComponent {
    public contact = { firstName: 'John', lastName: 'Lundgren', phone: '0700490691', email: 'borracho@hotmail.com' };
}