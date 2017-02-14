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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var $ = require("jquery");
require("jsTree");
var tree_service_1 = require("../Tree/tree.service");
var TreeComponent = (function () {
    function TreeComponent(http, treeService) {
        this.http = http;
        this.treeService = treeService;
        this.jsTreeurl = "/api/Tree/TreeNodes";
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.getAngularTreeNodes();
        this.getJsTreeNodes();
    };
    TreeComponent.prototype.getAngularTreeNodes = function () {
        var _this = this;
        this.treeService.getAngularTreeNodes()
            .then(function (response) {
            _this.nodesAngularTree = response.json();
        });
    };
    TreeComponent.prototype.getJsTreeNodes = function () {
        var _this = this;
        this.http.get(this.jsTreeurl)
            .toPromise()
            .then(function (response) {
            _this.nodesJsTree = response.json();
            _this.getJstree();
        });
    };
    TreeComponent.prototype.getJstree = function () {
        $('#treeViewDiv').jstree({
            'core': {
                "multiple": true,
                'data': this.nodesJsTree,
                "check_callback": function (operation, node, node_parent, node_position) {
                    return true;
                }
            }
        });
    };
    TreeComponent.prototype.ngAfterViewInit = function () {
    };
    return TreeComponent;
}());
TreeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app-tree',
        templateUrl: '/app/Views/Tree/Tree.html',
        providers: [tree_service_1.TreeService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        tree_service_1.TreeService])
], TreeComponent);
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map