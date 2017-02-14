import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
        moduleId: module.id,
        selector: 'hello-world',
        template: `<h1>Hello World from {{ name }}</h1>`
    }
)

export class HelloWorldComponent implements OnInit{
    name : string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(p => this.name = p['name']);
    }
}
