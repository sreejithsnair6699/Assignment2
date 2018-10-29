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
var scenes;
(function (scenes) {
    var LevelTwo = /** @class */ (function (_super) {
        __extends(LevelTwo, _super);
        // public properties
        // constructor
        function LevelTwo() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        LevelTwo.prototype.Start = function () {
            this._enemyNumber = 6;
            // Instantiates a new Array container of Type objects.Cloud
            this._enemy = new Array();
            // Fill the Cloud Array with Clouds
            for (var count = 0; count < this._enemyNumber; count++) {
                this._enemy[count] = new objects.EnemyPlayer();
            }
            // play background engine sound when the level starts
            //this._engineSound = createjs.Sound.play("engineSound");
            //this._engineSound.volume = 0.05;
            //this._engineSound.loop = -1; // loop forever
            this.Main();
        };
        LevelTwo.prototype.Update = function () {
            var _this = this;
            //this._ocean.Update();
            this._player.Update();
            //this._island.Update();
            // check if player and island are colliding
            //managers.Collision.Check(this._player, this._island);
            // Update Each cloud in the Cloud Array
            this._enemy.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this._player, enemy);
            });
        };
        LevelTwo.prototype.Destroy = function () {
            this.removeAllChildren();
            this._engineSound.stop();
        };
        LevelTwo.prototype.Reset = function () { };
        LevelTwo.prototype.Main = function () {
            // adds ocean to the scene
            //this._ocean = new objects.Ocean();
            //this.addChild(this._ocean);
            var _this = this;
            // adds island to the scene
            //this._island = new objects.Island();
            //this.addChild(this._island);
            // adds player to the scene
            this._player = new objects.PlayerPlane();
            this.addChild(this._player);
            // adds Each Cloud in the Cloud Array to the Scene
            this._enemy.forEach(function (enemy) {
                _this.addChild(enemy);
            });
            // add ScoreBoard UI to the Scene
            //managers.Game.scoreBoard.AddGameUI(this);
        };
        return LevelTwo;
    }(objects.Scene));
    scenes.LevelTwo = LevelTwo;
})(scenes || (scenes = {}));
//# sourceMappingURL=level-two.js.map