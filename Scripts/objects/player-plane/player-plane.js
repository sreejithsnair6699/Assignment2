var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var PlayerPlane = /** @class */ (function (_super) {
        __extends(PlayerPlane, _super);
        // private instance variables
        // public properties
        // constructors
        function PlayerPlane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        PlayerPlane.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        };
        PlayerPlane.prototype.Update = function () {
            this.x = managers.Game.stage.mouseX;
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();
            // checks the bottom boundary
            if (this.y > 800 - this.HalfWidth) {
                this.y = 800 - this.HalfWidth;
            }
            // check the top boundary
            if (this.y < this.HalfWidth) {
                this.y = this.HalfWidth;
            }
            // checks the right boundary
            if (this.x > 1500 - this.HalfWidth) {
                this.x = 1500 - this.HalfWidth;
            }
            // check the left boundary
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        };
        PlayerPlane.prototype.Reset = function () {
        };
        PlayerPlane.prototype.Destroy = function () {
        };
        return PlayerPlane;
    }(objects.GameObject));
    objects.PlayerPlane = PlayerPlane;
})(objects || (objects = {}));
//# sourceMappingURL=player-plane.js.map