namespace scenes {
    export class LevelTwo extends objects.Scene {
        // private instance variable
        private _player: objects.PlayerPlane;
        private _ocean: objects.Ocean;
        private _island: objects.Island;

        private _enemyNumber: number;
        private _enemy: objects.EnemyPlayer[];

        private _engineSound: createjs.AbstractSoundInstance;

        // public properties

        // constructor
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Start(): void {
            this._enemyNumber = 6;

            // Instantiates a new Array container of Type objects.Cloud
            this._enemy = new Array<objects.EnemyPlayer>();

            // Fill the Cloud Array with Clouds
            for (let count = 0; count < this._enemyNumber; count++) {
                this._enemy[count] = new objects.EnemyPlayer();
            }

            // play background engine sound when the level starts
            //this._engineSound = createjs.Sound.play("engineSound");
            //this._engineSound.volume = 0.05;
            //this._engineSound.loop = -1; // loop forever

            this.Main();
        }

        public Update(): void {
            //this._ocean.Update();
            this._player.Update();
            //this._island.Update();

            // check if player and island are colliding
            //managers.Collision.Check(this._player, this._island);

            // Update Each cloud in the Cloud Array
            this._enemy.forEach(enemy => {
              enemy.Update();
            managers.Collision.Check(this._player, enemy);
            });
        }

        public Destroy(): void {
            this.removeAllChildren();
            this._engineSound.stop();
        }

        public Reset(): void { }

        public Main(): void {
            // adds ocean to the scene
            //this._ocean = new objects.Ocean();
            //this.addChild(this._ocean);

            // adds island to the scene
            //this._island = new objects.Island();
            //this.addChild(this._island);

            // adds player to the scene
            this._player = new objects.PlayerPlane();
            this.addChild(this._player);

            // adds Each Cloud in the Cloud Array to the Scene
            this._enemy.forEach(enemy => {
                this.addChild(enemy);
            });

            // add ScoreBoard UI to the Scene
            //managers.Game.scoreBoard.AddGameUI(this);
        }
    }
}