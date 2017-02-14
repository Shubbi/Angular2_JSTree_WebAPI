import { ElementRef } from '@angular/core';
import { TreeModel } from './tree.model';
import { TreeOptions } from './tree-options.model';
import { ITreeNode } from '../defs/api';
export declare class TreeNode implements ITreeNode {
    data: any;
    parent: any;
    treeModel: TreeModel;
    isHidden: any;
    isExpanded: boolean;
    isActive: boolean;
    isFocused: boolean;
    level: number;
    path: string[];
    elementRef: ElementRef;
    children: TreeNode[];
    private _originalNode;
    originalNode: any;
    constructor(data: any, parent: any, treeModel: TreeModel);
    hasChildren: boolean;
    isCollapsed: boolean;
    isLeaf: boolean;
    isRoot: boolean;
    realParent: TreeNode;
    options: TreeOptions;
    fireEvent(event: any): void;
    context: any;
    displayField: any;
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
    private _getIndexInParent(skipHidden?);
    isDescendantOf(node: TreeNode): any;
    loadChildren(): void;
    expand(): this;
    collapse(): this;
    ensureVisible(): this;
    toggle(): this;
    toggleExpanded(): this;
    setIsExpanded(value: any): this;
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
