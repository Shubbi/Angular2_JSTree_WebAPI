import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { TreeModule } from 'angular2-tree-component';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/helloWorld.component';
import { TreeComponent } from './Tree/tree.component';

//import * as $ from 'jquery';

//window["$"] = $;
//window["jQuery"] = $;

const routes: Routes = [
    { path: 'AngularTree', component: TreeComponent },
    { path: 'HelloWorld/:name', component: HelloWorldComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, TreeModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [AppComponent, HelloWorldComponent, TreeComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}