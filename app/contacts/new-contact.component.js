System.register(["angular2/core", "./contact.service", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                //The Router does not need to be added to the providers list because it is generated in the boot.ts file
                function NewContactComponent(_contactService, _router) {
                    this._contactService = _contactService;
                    this._router = _router;
                }
                NewContactComponent.prototype.onAddContact = function (firstName, lastName, phone, email) {
                    this.newContact = { firstName: firstName, lastName: lastName, phone: phone, email: email };
                    this._contactService.insertContact(this.newContact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n     <div>\n        First name: <input type=\"text\" #firstName><br>\n        Last name: <input type=\"text\" #lastName><br>\n        Phone: <input type=\"text\" #phone><br>\n        Email: <input type=\"text\" #email><br>\n        <button (click)=\"onAddContact(firstName.value, lastName.value, phone.value, email.value)\">Create Contact</button>\n    </div>\n    ",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
                ], NewContactComponent);
                return NewContactComponent;
            })();
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});
//# sourceMappingURL=new-contact.component.js.map