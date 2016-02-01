System.register(["angular2/core", "./contact.service", "angular2/router", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contact_service_1, router_1, common_1;
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
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                //The Router does not need to be added to the providers list because it is generated in the boot.ts file
                function NewContactComponent(_contactService, _router, _routeParams, _formBuilder) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._formBuilder = _formBuilder;
                }
                NewContactComponent.prototype.onSubmit = function (formValue) {
                    this._contactService.insertContact(formValue);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        firstName: ['', common_1.Validators.required],
                        lastName: [this._routeParams.get('lastName'), common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: ['', common_1.Validators.required]
                    });
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n     <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit(myForm.value)\">\n        <div>\n            <label>First name:</label>\n            <input type=\"text\" [ngFormControl]=\"myForm.controls['firstName']\" #firstName=\"ngForm\">\n            <span *ngIf=\"!firstName.valid\">Not valid</span>\n        </div>\n        <div>\n            <label>Last name:</label>\n            <input type=\"text\" [ngFormControl]=\"myForm.controls['lastName']\" #lastName=\"ngForm\">\n            <span *ngIf=\"!lastName.valid\">Not valid</span>\n        </div>\n        <div>\n            <label>Phone:</label>\n            <input type=\"text\" [ngFormControl]=\"myForm.controls['phone']\" #phone=\"ngForm\">\n            <span *ngIf=\"!phone.valid\">Not valid</span>\n        </div>\n        <div>\n            <label>Email:</label>\n            <input type=\"text\" [ngFormControl]=\"myForm.controls['email']\" #email=\"ngForm\">\n            <span *ngIf=\"!email.valid\">Not valid</span>\n        </div>\n        <button type=\"submit\" [disabled]=\"!myForm.valid\">Create Contact</button>\n    </form>\n    ",
                        styles: ["\n        .ng-invalid{\n            border:1px solid red;\n        }\n        form div span{\n            color: red;\n        }\n    "],
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], NewContactComponent);
                return NewContactComponent;
            })();
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});
//# sourceMappingURL=new-contact.component.js.map