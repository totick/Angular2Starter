System.register(["angular2/core", "./contact.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent() {
                    this.selectedContact = {};
                    this.contacts = [
                        { firstName: 'John', lastName: 'Lundgren', phone: '0700490691', email: 'borracho@hotmail.com' },
                        { firstName: 'Kalle', lastName: 'Anka', phone: '01231230691', email: 'perdido@hotmail.com' },
                        { firstName: 'Alexander', lastName: 'Lukas', phone: '465545640', email: 'vagabundo@hotmail.com' },
                        { firstName: 'Joakim', lastName: 'von anka', phone: '78946546', email: 'whatever@hotmail.com' }
                    ];
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n    <ul>\n        <li *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\" [class.redText]=\"contact === selectedContact\">{{contact.firstName}} {{contact.lastName}}</li>\n    </ul>\n    <contact [contact]=\"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        styleUrls: ["../../resources/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactListComponent);
                return ContactListComponent;
            })();
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map