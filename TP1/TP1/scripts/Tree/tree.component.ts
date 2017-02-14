import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

declare var dartTreeApiUrl: any;

import * as $ from 'jquery';
import 'jsTree';
import { TreeService } from '../Tree/tree.service';
import { AngularTreeNode } from '../Tree/angularTreeNode';

@Component({
    moduleId: module.id,
    selector: 'my-app-tree',
    templateUrl: '/app/Views/Tree/Tree.html',
    providers: [TreeService]
}
)

export class TreeComponent
implements OnInit, AfterViewInit {
    nodesAngularTree: AngularTreeNode[];
    nodesJsTree: Object[];


    jsTreeurl = "/api/Tree/TreeNodes";

    constructor(
        private http: Http,
        private treeService: TreeService
    ) { }

    ngOnInit(): void {
        this.getAngularTreeNodes();
        this.getJsTreeNodes();
    }

    getAngularTreeNodes(): void {
        this.treeService.getAngularTreeNodes()
            .then(response => {
                this.nodesAngularTree = response.json() as AngularTreeNode[];
            });
    }


    getJsTreeNodes(): void {
        this.http.get(this.jsTreeurl)
            .toPromise()
            .then(response => {
                this.nodesJsTree = response.json();
                this.getJstree();
            });
    }

    getJstree(): void {
        $('#treeViewDiv').jstree({
            'core': {
                "multiple": true,
                'data': this.nodesJsTree,
                "check_callback": function (operation: any, node: any, node_parent: any, node_position: any) {
                    return true;
                }
            }
        });



    }

    ngAfterViewInit(): void {

    }
}