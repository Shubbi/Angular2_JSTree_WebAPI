"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var angular2_tree_component_1 = require("angular2-tree-component");
var app_component_1 = require("./app.component");
var helloWorld_component_1 = require("./HelloWorld/helloWorld.component");
var tree_component_1 = require("./Tree/tree.component");
//import * as $ from 'jquery';
//window["$"] = $;
//window["jQuery"] = $;
var routes = [
    { path: 'AngularTree', component: tree_component_1.TreeComponent },
    { path: 'HelloWorld/:name', component: helloWorld_component_1.HelloWorldComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, angular2_tree_component_1.TreeModule, router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        declarations: [app_component_1.AppComponent, helloWorld_component_1.HelloWorldComponent, tree_component_1.TreeComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map