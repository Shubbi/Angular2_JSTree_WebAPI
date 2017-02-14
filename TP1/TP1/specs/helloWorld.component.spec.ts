import { Observable } from 'rxjs';
import 'rxjs';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HelloWorldComponent } from '../scripts/HelloWorld/helloWorld.component';


let comp: HelloWorldComponent;
let fixture: ComponentFixture<HelloWorldComponent>;

// provide our implementations or mocks to the dependency injector
beforeEach(() => TestBed.configureTestingModule({
    providers: [
        // provide a better mock
        {
            provide: ActivatedRoute,
            useValue: {
                params: Observable.of({ name: 'vishal11' })
            }
        },
        HelloWorldComponent
    ]
}));

it('should have a defined component', inject([HelloWorldComponent], (app: HelloWorldComponent) => {
    expect(app).toBeDefined();
    expect(app.name).toBeUndefined();
    app.ngOnInit();
    expect(app.name).toEqual('vishal11');
    
}));