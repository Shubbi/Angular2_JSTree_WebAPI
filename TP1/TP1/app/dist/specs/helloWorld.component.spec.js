"use strict";
var rxjs_1 = require("rxjs");
require("rxjs");
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var helloWorld_component_1 = require("../scripts/HelloWorld/helloWorld.component");
var comp;
var fixture;
// provide our implementations or mocks to the dependency injector
beforeEach(function () { return testing_1.TestBed.configureTestingModule({
    providers: [
        // provide a better mock
        {
            provide: router_1.ActivatedRoute,
            useValue: {
                params: rxjs_1.Observable.of({ name: 'vishal11' })
            }
        },
        helloWorld_component_1.HelloWorldComponent
    ]
}); });
it('should have a defined component', testing_1.inject([helloWorld_component_1.HelloWorldComponent], function (app) {
    expect(app).toBeDefined();
    expect(app.name).toBeUndefined();
    app.ngOnInit();
    expect(app.name).toEqual('vishal11');
}));
//# sourceMappingURL=helloWorld.component.spec.js.map