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
    var EnemyPlayer = /** @class */ (function (_super) {
        __extends(EnemyPlayer, _super);
        // public properties
        // constructor
        function EnemyPlayer() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        EnemyPlayer.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        };
        EnemyPlayer.prototype._checkBounds = function () {
            if (this.y > 800 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        EnemyPlayer.prototype.Reset = function () {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 2);
            this._horizontalSpeed = Math.floor((Math.random() * 2) - 1);
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (1500 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        };
        EnemyPlayer.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        EnemyPlayer.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        EnemyPlayer.prototype.Destroy = function () {
        };
        return EnemyPlayer;
    }(objects.GameObject));
    objects.EnemyPlayer = EnemyPlayer;
})(objects || (objects = {}));
//# sourceMappingURL=enemy-plane.js.map