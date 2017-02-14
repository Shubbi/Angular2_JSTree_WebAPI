import { Component } from '@angular/core';
declare var dartTreeApiUrl: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
                <a routerLink="/AngularTree">AngularTree</a>
                <br/>
                <a [routerLink]="['/HelloWorld', name]">Hello World</a>
                <router-outlet></router-outlet>`
}
)
export class AppComponent
{
    name : string = "vvv";
}
