import { Renderer, ElementRef } from '@angular/core';
import { TreeNodeDrag } from '../models/tree-node-drag.model';
export declare class TreeNodeDrop {
    private el;
    private renderer;
    private treeNodeDrag;
    treeNodeDrop: any;
    constructor(el: ElementRef, renderer: Renderer, treeNodeDrag: TreeNodeDrag);
    onDragOver($event: any): void;
    onDragLeave($event: any): void;
    onDrop($event: any): void;
    private addClass();
    private removeClass();
}
