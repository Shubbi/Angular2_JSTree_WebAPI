"use strict";
var core_1 = require('@angular/core');
var TreeNodeDrag = (function () {
    function TreeNodeDrag() {
        this._dragNode = null;
        this._dropLocation = null;
    }
    // TODO: move to a different service:
    TreeNodeDrag.prototype.setDragNode = function (dragNode) {
        this._dragNode = dragNode;
    };
    TreeNodeDrag.prototype.getDragNode = function () {
        return this._dragNode || { node: null, index: null };
    };
    TreeNodeDrag.prototype.isDragging = function () {
        return this.getDragNode().node;
    };
    TreeNodeDrag.prototype.setDropLocation = function (dropLocation) {
        this._dropLocation = dropLocation;
    };
    TreeNodeDrag.prototype.getDropLocation = function () {
        return this._dropLocation || { component: null, node: null, index: null };
    };
    TreeNodeDrag.prototype.isDraggingOver = function (component) {
        return this.getDropLocation().component === component;
    };
    TreeNodeDrag.prototype.endDrag = function () {
        this.setDropLocation(null);
        this.setDragNode(null);
    };
    TreeNodeDrag.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TreeNodeDrag.ctorParameters = [];
    return TreeNodeDrag;
}());
exports.TreeNodeDrag = TreeNodeDrag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWRyYWcubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbW9kZWxzL3RyZWUtbm9kZS1kcmFnLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFJM0M7SUFBQTtRQUNFLGNBQVMsR0FBc0MsSUFBSSxDQUFDO1FBQ3BELGtCQUFhLEdBQW9ELElBQUksQ0FBQztJQW9DeEUsQ0FBQztJQW5DQyxxQ0FBcUM7SUFDckMsa0NBQVcsR0FBWCxVQUFZLFFBQXlDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLFlBQStEO1FBQzdFLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsU0FBUztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNJLHVCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7S0FDbkIsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDJCQUFjLEdBQTZELEVBQ2pGLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksb0JBQVksZUFzQ3hCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcblxuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVEcmFnIHtcbiAgX2RyYWdOb2RlOiB7IG5vZGU6IFRyZWVOb2RlLCBpbmRleDogbnVtYmVyIH0gPSBudWxsO1xuICBfZHJvcExvY2F0aW9uOnsgY29tcG9uZW50OmFueSwgbm9kZTogVHJlZU5vZGUsIGluZGV4OiBudW1iZXIgfSA9IG51bGw7XG4gIC8vIFRPRE86IG1vdmUgdG8gYSBkaWZmZXJlbnQgc2VydmljZTpcbiAgc2V0RHJhZ05vZGUoZHJhZ05vZGU6eyBub2RlOiBUcmVlTm9kZSwgaW5kZXg6bnVtYmVyIH0pIHtcbiAgICB0aGlzLl9kcmFnTm9kZSA9IGRyYWdOb2RlO1xuICB9XG5cbiAgZ2V0RHJhZ05vZGUoKTp7IG5vZGU6IFRyZWVOb2RlLCBpbmRleDpudW1iZXIgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYWdOb2RlIHx8IHsgbm9kZTpudWxsLCBpbmRleDogbnVsbCB9O1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXREcmFnTm9kZSgpLm5vZGU7XG4gIH1cblxuICBzZXREcm9wTG9jYXRpb24oZHJvcExvY2F0aW9uOiB7IGNvbXBvbmVudDogYW55LCBub2RlOiBUcmVlTm9kZSwgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5fZHJvcExvY2F0aW9uID0gZHJvcExvY2F0aW9uO1xuICB9XG5cbiAgZ2V0RHJvcExvY2F0aW9uKCk6IHsgY29tcG9uZW50OiBhbnksIG5vZGU6IFRyZWVOb2RlLCBpbmRleDogbnVtYmVyIH0ge1xuICAgIHJldHVybiB0aGlzLl9kcm9wTG9jYXRpb24gfHwge2NvbXBvbmVudDogbnVsbCwgbm9kZTogbnVsbCwgaW5kZXg6IG51bGx9O1xuICB9XG5cbiAgaXNEcmFnZ2luZ092ZXIoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RHJvcExvY2F0aW9uKCkuY29tcG9uZW50ID09PSBjb21wb25lbnQ7XG4gIH1cblxuICBlbmREcmFnKCkge1xuICAgIHRoaXMuc2V0RHJvcExvY2F0aW9uKG51bGwpO1xuICAgIHRoaXMuc2V0RHJhZ05vZGUobnVsbCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=