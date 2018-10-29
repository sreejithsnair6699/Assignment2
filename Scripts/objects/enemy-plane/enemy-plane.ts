module objects {
    export class EnemyPlayer extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > 800 + this.Height) {
                this.Reset();
            }

        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random() * 5) + 2);
            this._horizontalSpeed = Math.floor((Math.random() * 2) - 1);
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (1500 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}