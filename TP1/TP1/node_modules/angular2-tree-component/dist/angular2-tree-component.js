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
var common_1 = require("@angular/common");
var tree_options_model_1 = require("./models/tree-options.model");
exports.TREE_ACTIONS = tree_options_model_1.TREE_ACTIONS;
var keys_1 = require("./constants/keys");
exports.KEYS = keys_1.KEYS;
var tree_model_1 = require("./models/tree.model");
exports.TreeModel = tree_model_1.TreeModel;
var tree_node_model_1 = require("./models/tree-node.model");
exports.TreeNode = tree_node_model_1.TreeNode;
var tree_dragged_element_model_1 = require("./models/tree-dragged-element.model");
exports.TreeDraggedElement = tree_dragged_element_model_1.TreeDraggedElement;
var loading_component_1 = require("./components/loading.component");
exports.LoadingComponent = loading_component_1.LoadingComponent;
var deprecated_loading_component_1 = require("./components/deprecated-loading.component");
var tree_component_1 = require("./components/tree.component");
exports.TreeComponent = tree_component_1.TreeComponent;
var tree_node_component_1 = require("./components/tree-node.component");
exports.TreeNodeComponent = tree_node_component_1.TreeNodeComponent;
var tree_node_content_component_1 = require("./components/tree-node-content.component");
exports.TreeNodeContent = tree_node_content_component_1.TreeNodeContent;
var deprecated_tree_node_content_component_1 = require("./components/deprecated-tree-node-content.component");
var tree_node_drop_slot_component_1 = require("./components/tree-node-drop-slot.component");
exports.TreeNodeDropSlot = tree_node_drop_slot_component_1.TreeNodeDropSlot;
var tree_node_expander_component_1 = require("./components/tree-node-expander.component");
exports.TreeNodeExpanderComponent = tree_node_expander_component_1.TreeNodeExpanderComponent;
var tree_node_children_component_1 = require("./components/tree-node-children.component");
exports.TreeNodeChildrenComponent = tree_node_children_component_1.TreeNodeChildrenComponent;
var tree_drop_directive_1 = require("./directives/tree-drop.directive");
exports.TreeDropDirective = tree_drop_directive_1.TreeDropDirective;
var tree_drag_directive_1 = require("./directives/tree-drag.directive");
exports.TreeDragDirective = tree_drag_directive_1.TreeDragDirective;
var adhoc_component_factory_service_1 = require("./components/adhoc-component-factory.service");
require("./polyfills");
var deprecated_1 = require("./deprecated");
var exportedDirectives = [
    tree_component_1.TreeComponent,
    tree_node_component_1.TreeNodeComponent,
    tree_node_content_component_1.TreeNodeContent,
    tree_drop_directive_1.TreeDropDirective,
    tree_drag_directive_1.TreeDragDirective,
    tree_node_expander_component_1.TreeNodeExpanderComponent,
    tree_node_children_component_1.TreeNodeChildrenComponent,
    tree_node_drop_slot_component_1.TreeNodeDropSlot
];
var TreeModule = (function () {
    function TreeModule() {
    }
    return TreeModule;
}());
TreeModule = __decorate([
    core_1.NgModule({
        declarations: [
            loading_component_1.LoadingComponent
        ].concat(exportedDirectives),
        exports: exportedDirectives.slice(),
        imports: [
            common_1.CommonModule,
        ],
        providers: [
            tree_dragged_element_model_1.TreeDraggedElement
        ]
    }),
    __metadata("design:paramtypes", [])
], TreeModule);
exports.TreeModule = TreeModule;
var DeprecatedTreeModule = (function () {
    function DeprecatedTreeModule() {
        deprecated_1.deprecated('DeprecatedTreeModule', 'TreeModule for AoT compilation');
    }
    return DeprecatedTreeModule;
}());
DeprecatedTreeModule = __decorate([
    core_1.NgModule({
        declarations: [
            deprecated_loading_component_1.LoadingComponent,
            deprecated_tree_node_content_component_1.TreeNodeContent
        ],
        exports: [
            tree_component_1.TreeComponent,
            tree_drop_directive_1.TreeDropDirective,
            tree_drag_directive_1.TreeDragDirective
        ],
        imports: [
            common_1.CommonModule,
            TreeModule,
        ],
        providers: [
            adhoc_component_factory_service_1.AdHocComponentFactoryCreator
        ],
    }),
    __metadata("design:paramtypes", [])
], DeprecatedTreeModule);
exports.DeprecatedTreeModule = DeprecatedTreeModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TreeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItdHJlZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvYW5ndWxhcjItdHJlZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE4QztBQUM5QywwQ0FBK0M7QUFFL0Msa0VBQTJGO0FBc0N6Rix5REFBWTtBQXBDZCx5Q0FBd0M7QUFxQ3RDLDJCQUFJO0FBcENOLGtEQUFnRDtBQStCOUMsMkNBQVM7QUE5QlgsNERBQW9EO0FBK0JsRCw4Q0FBUTtBQTlCVixrRkFBeUU7QUErQnZFLDZFQUFrQjtBQTlCcEIsb0VBQWtFO0FBcUNoRSxnRUFBZ0I7QUFwQ2xCLDBGQUEyRztBQUMzRyw4REFBNEQ7QUFvQzFELHVEQUFhO0FBbkNmLHdFQUFxRTtBQW9DbkUsb0VBQWlCO0FBbkNuQix3RkFBMkU7QUFvQ3pFLHdFQUFlO0FBbkNqQiw4R0FBbUg7QUFDbkgsNEZBQThFO0FBdUM1RSw0RUFBZ0I7QUF0Q2xCLDBGQUFzRjtBQW9DcEYsNkZBQXlCO0FBbkMzQiwwRkFBc0Y7QUFvQ3BGLDZGQUF5QjtBQW5DM0Isd0VBQXFFO0FBZ0NuRSxvRUFBaUI7QUEvQm5CLHdFQUFxRTtBQWdDbkUsb0VBQWlCO0FBL0JuQixnR0FBNEY7QUFFNUYsdUJBQXFCO0FBQ3JCLDJDQUEwQztBQUUxQyxJQUFNLGtCQUFrQixHQUFHO0lBQ3pCLDhCQUFhO0lBQ2IsdUNBQWlCO0lBQ2pCLDZDQUFlO0lBQ2YsdUNBQWlCO0lBQ2pCLHVDQUFpQjtJQUNqQix3REFBeUI7SUFDekIsd0RBQXlCO0lBQ3pCLGdEQUFnQjtDQUNqQixDQUFDO0FBc0NGLElBQWEsVUFBVTtJQUF2QjtJQUF5QixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsVUFBVTtJQWZ0QixlQUFRLENBQUM7UUFDUixZQUFZO1lBQ1Ysb0NBQWdCO2lCQUNiLGtCQUFrQixDQUN0QjtRQUNELE9BQU8sRUFDRixrQkFBa0IsUUFDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsK0NBQWtCO1NBQ25CO0tBQ0YsQ0FBQzs7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVTtBQW1CdkIsSUFBYSxvQkFBb0I7SUFDL0I7UUFDRSx1QkFBVSxDQUFDLHNCQUFzQixFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxvQkFBb0I7SUFsQmhDLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLCtDQUEwQjtZQUMxQix3REFBeUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDUCw4QkFBYTtZQUNiLHVDQUFpQjtZQUNqQix1Q0FBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxxQkFBWTtZQUNaLFVBQVU7U0FDWDtRQUNELFNBQVMsRUFBRTtZQUNULDhEQUE0QjtTQUM3QjtLQUNGLENBQUM7O0dBQ1csb0JBQW9CLENBSWhDO0FBSlksb0RBQW9COztBQUtqQyxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUUkVFX0FDVElPTlMsIElBY3Rpb25NYXBwaW5nLCBJQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vbW9kZWxzL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBJVHJlZU9wdGlvbnMsIElBbGxvd0Ryb3BGbiB9IGZyb20gJy4vZGVmcy9hcGknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgYXMgRGVwcmVjYXRlZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVwcmVjYXRlZC1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNvbnRlbnQgYXMgRGVwcmVjYXRlZFRyZWVOb2RlQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZXByZWNhdGVkLXRyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZURyb3BEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJlZS1kcm9wLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUcmVlRHJhZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFkSG9jQ29tcG9uZW50RmFjdG9yeUNyZWF0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvYWRob2MtY29tcG9uZW50LWZhY3Rvcnkuc2VydmljZSc7XG5cbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0IHsgZGVwcmVjYXRlZCB9IGZyb20gJy4vZGVwcmVjYXRlZCc7XG5cbmNvbnN0IGV4cG9ydGVkRGlyZWN0aXZlcyA9IFtcbiAgVHJlZUNvbXBvbmVudCxcbiAgVHJlZU5vZGVDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29udGVudCxcbiAgVHJlZURyb3BEaXJlY3RpdmUsXG4gIFRyZWVEcmFnRGlyZWN0aXZlLFxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICBUcmVlTm9kZURyb3BTbG90XG5dO1xuXG5leHBvcnQge1xuICBUcmVlTW9kZWwsXG4gIFRyZWVOb2RlLFxuICBUcmVlRHJhZ2dlZEVsZW1lbnQsXG4gIElUcmVlT3B0aW9ucyxcbiAgVFJFRV9BQ1RJT05TLFxuICBLRVlTLFxuICBJQWN0aW9uTWFwcGluZyxcbiAgSUFjdGlvbkhhbmRsZXIsXG4gIElBbGxvd0Ryb3BGbixcbiAgTG9hZGluZ0NvbXBvbmVudCxcbiAgVHJlZUNvbXBvbmVudCxcbiAgVHJlZU5vZGVDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29udGVudCxcbiAgVHJlZURyb3BEaXJlY3RpdmUsXG4gIFRyZWVEcmFnRGlyZWN0aXZlLFxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICBUcmVlTm9kZURyb3BTbG90XG59O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgIC4uLmV4cG9ydGVkRGlyZWN0aXZlc1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uZXhwb3J0ZWREaXJlY3RpdmVzXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRyZWVEcmFnZ2VkRWxlbWVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge31cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERlcHJlY2F0ZWRMb2FkaW5nQ29tcG9uZW50LFxuICAgIERlcHJlY2F0ZWRUcmVlTm9kZUNvbnRlbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gICAgVHJlZURyb3BEaXJlY3RpdmUsXG4gICAgVHJlZURyYWdEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmVlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBZEhvY0NvbXBvbmVudEZhY3RvcnlDcmVhdG9yXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERlcHJlY2F0ZWRUcmVlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZGVwcmVjYXRlZCgnRGVwcmVjYXRlZFRyZWVNb2R1bGUnLCAnVHJlZU1vZHVsZSBmb3IgQW9UIGNvbXBpbGF0aW9uJyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRyZWVNb2R1bGU7XG4iXX0=