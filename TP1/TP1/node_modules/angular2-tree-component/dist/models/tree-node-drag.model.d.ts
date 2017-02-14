import { TreeNode } from './tree-node.model';
export declare class TreeNodeDrag {
    _dragNode: {
        node: TreeNode;
        index: number;
    };
    _dropLocation: {
        component: any;
        node: TreeNode;
        index: number;
    };
    setDragNode(dragNode: {
        node: TreeNode;
        index: number;
    }): void;
    getDragNode(): {
        node: TreeNode;
        index: number;
    };
    isDragging(): TreeNode;
    setDropLocation(dropLocation: {
        component: any;
        node: TreeNode;
        index: number;
    }): void;
    getDropLocation(): {
        component: any;
        node: TreeNode;
        index: number;
    };
    isDraggingOver(component: any): boolean;
    endDrag(): void;
}
