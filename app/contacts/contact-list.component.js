System.register(["angular2/core", "./contact.component", "./contact.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                //Shortcut for assigning an attribute in the constructor e.g this._contactService = _contactService
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = {};
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n    <ul>\n        <li *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\" [class.redText]=\"contact === selectedContact\">{{contact.firstName}} {{contact.lastName}}</li>\n    </ul>\n    <contact [contact]=\"selectedContact\"></contact>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../../resources/contact-list.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            })();
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map