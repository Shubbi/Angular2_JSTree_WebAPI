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
var tree_node_model_1 = require("../models/tree-node.model");
var TreeNodeChildrenComponent = (function () {
    function TreeNodeChildrenComponent() {
    }
    return TreeNodeChildrenComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tree_node_model_1.TreeNode)
], TreeNodeChildrenComponent.prototype, "node", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeNodeChildrenComponent.prototype, "templates", void 0);
TreeNodeChildrenComponent = __decorate([
    core_1.Component({
        selector: 'TreeNodeChildren',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            '.tree-children.tree-children-no-padding { padding-left: 0 }',
            '.tree-children { padding-left: 20px }'
        ],
        template: "\n    <div [class.tree-children]=\"true\"\n         [class.tree-children-no-padding]=\"node.options.levelPadding\"\n         *ngIf=\"node.isExpanded\">\n      <div *ngIf=\"node.children\">\n        <TreeNode\n          *ngFor=\"let node of node.children; let i = index\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </TreeNode>\n      </div>\n      <LoadingComponent\n        [style.padding-left]=\"node.getNodePadding()\"\n        class=\"tree-node-loading\"\n        *ngIf=\"!node.children\"\n        [template]=\"templates.loadingTemplate\"\n      ></LoadingComponent>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TreeNodeChildrenComponent);
exports.TreeNodeChildrenComponent = TreeNodeChildrenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFvRTtBQUNwRSw2REFBcUQ7QUE4QnJELElBQWEseUJBQXlCO0lBQXRDO0lBR0EsQ0FBQztJQUFELGdDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFGVTtJQUFSLFlBQUssRUFBRTs4QkFBTSwwQkFBUTt1REFBQztBQUNkO0lBQVIsWUFBSyxFQUFFOzs0REFBZ0I7QUFGYix5QkFBeUI7SUE1QnJDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLE1BQU0sRUFBRTtZQUNOLDZEQUE2RDtZQUM3RCx1Q0FBdUM7U0FDeEM7UUFDRCxRQUFRLEVBQUUsbW9CQW1CVDtLQUNGLENBQUM7O0dBQ1cseUJBQXlCLENBR3JDO0FBSFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ2hpbGRyZW4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtcbiAgICAnLnRyZWUtY2hpbGRyZW4udHJlZS1jaGlsZHJlbi1uby1wYWRkaW5nIHsgcGFkZGluZy1sZWZ0OiAwIH0nLFxuICAgICcudHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweCB9J1xuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLnRyZWUtY2hpbGRyZW5dPVwidHJ1ZVwiXG4gICAgICAgICBbY2xhc3MudHJlZS1jaGlsZHJlbi1uby1wYWRkaW5nXT1cIm5vZGUub3B0aW9ucy5sZXZlbFBhZGRpbmdcIlxuICAgICAgICAgKm5nSWY9XCJub2RlLmlzRXhwYW5kZWRcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJub2RlLmNoaWxkcmVuXCI+XG4gICAgICAgIDxUcmVlTm9kZVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBub2RlIG9mIG5vZGUuY2hpbGRyZW47IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFtub2RlXT1cIm5vZGVcIlxuICAgICAgICAgIFtpbmRleF09XCJpXCJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPlxuICAgICAgICA8L1RyZWVOb2RlPlxuICAgICAgPC9kaXY+XG4gICAgICA8TG9hZGluZ0NvbXBvbmVudFxuICAgICAgICBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiXG4gICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWxvYWRpbmdcIlxuICAgICAgICAqbmdJZj1cIiFub2RlLmNoaWxkcmVuXCJcbiAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy5sb2FkaW5nVGVtcGxhdGVcIlxuICAgICAgPjwvTG9hZGluZ0NvbXBvbmVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbm9kZTpUcmVlTm9kZTtcbiAgQElucHV0KCkgdGVtcGxhdGVzOiBhbnk7XG59XG4iXX0=