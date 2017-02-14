import { ElementRef } from '@angular/core';
import { TreeModel } from './tree.model';
import { TreeOptions } from './tree-options.model';
import { ITreeNode } from '../defs/api';
export declare class TreeNode implements ITreeNode {
    data: any;
    parent: TreeNode;
    treeModel: TreeModel;
    isHidden: any;
    readonly isExpanded: boolean;
    readonly isActive: boolean;
    readonly isFocused: boolean;
    level: number;
    path: string[];
    elementRef: ElementRef;
    children: TreeNode[];
    private _originalNode;
    readonly originalNode: any;
    constructor(data: any, parent: TreeNode, treeModel: TreeModel);
    readonly hasChildren: boolean;
    readonly isCollapsed: boolean;
    readonly isLeaf: boolean;
    readonly isRoot: boolean;
    readonly realParent: TreeNode;
    readonly options: TreeOptions;
    fireEvent(event: any): void;
    readonly context: any;
    readonly displayField: any;
    id: any;
    getField(key: any): any;
    setField(key: any, value: any): void;
    _findAdjacentSibling(steps: any, skipHidden?: boolean): any;
    findNextSibling(skipHidden?: boolean): any;
    findPreviousSibling(skipHidden?: boolean): any;
    getVisibleChildren(): TreeNode[];
    getFirstChild(skipHidden?: boolean): TreeNode;
    getLastChild(skipHidden?: boolean): TreeNode;
    findNextNode(goInside?: boolean, skipHidden?: boolean): any;
    findPreviousNode(skipHidden?: boolean): any;
    _getLastOpenDescendant(skipHidden?: boolean): any;
    private _getParentsChildren(skipHidden?);
    private getIndexInParent(skipHidden?);
    isDescendantOf(node: TreeNode): any;
    getNodePadding(): string;
    getClass(): string;
    onDrop($event: any): void;
    allowDrop(element: any): boolean;
    loadChildren(): Promise<void>;
    expand(): any;
    collapse(): this;
    ensureVisible(): this;
    toggle(): any;
    toggleExpanded(): any;
    setIsExpanded(value: any): any;
    setIsActive(value: any, multi?: boolean): this;
    toggleActivated(multi?: boolean): this;
    setActiveAndVisible(multi?: boolean): this;
    scrollIntoView(): this;
    focus(): this;
    blur(): this;
    filter(filterFn: any, autoShow?: boolean): void;
    clearFilter(): void;
    allowDrag(): boolean;
    mouseAction(actionName: string, $event: any, data?: any): void;
    _initChildren(): void;
}
