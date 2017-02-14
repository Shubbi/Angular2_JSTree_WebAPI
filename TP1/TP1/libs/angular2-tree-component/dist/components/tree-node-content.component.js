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
var TreeNodeContent = (function () {
    function TreeNodeContent() {
    }
    return TreeNodeContent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tree_node_model_1.TreeNode)
], TreeNodeContent.prototype, "node", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TreeNodeContent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], TreeNodeContent.prototype, "template", void 0);
TreeNodeContent = __decorate([
    core_1.Component({
        selector: 'TreeNodeContent',
        template: "<span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <template\n    [ngTemplateOutlet]=\"template\"\n    [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </template>",
    }),
    __metadata("design:paramtypes", [])
], TreeNodeContent);
exports.TreeNodeContent = TreeNodeContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBOEQ7QUFDOUQsNkRBQXFEO0FBVXJELElBQWEsZUFBZTtJQUE1QjtJQUlBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSFU7SUFBUixZQUFLLEVBQUU7OEJBQU8sMEJBQVE7NkNBQUM7QUFDZjtJQUFSLFlBQUssRUFBRTs7OENBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs4QkFBVyxrQkFBVztpREFBTTtBQUh6QixlQUFlO0lBUjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxxTUFJRTtLQUNiLENBQUM7O0dBQ1csZUFBZSxDQUkzQjtBQUpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ29udGVudCcsXG4gIHRlbXBsYXRlOiBgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIj57eyBub2RlLmRpc3BsYXlGaWVsZCB9fTwvc3Bhbj5cbiAgPHRlbXBsYXRlXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgIFtuZ091dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUsIG5vZGU6IG5vZGUsIGluZGV4OiBpbmRleCB9XCI+XG4gIDwvdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250ZW50IHtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIl19