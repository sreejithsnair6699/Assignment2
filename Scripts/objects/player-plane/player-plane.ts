module objects {
    export class PlayerPlane extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        }

        public Update():void {
            this.x = managers.Game.stage.mouseX;
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();

            // checks the bottom boundary
            if(this.y > 800 - this.HalfWidth) {
                this.y = 800 - this.HalfWidth;
            }

            // check the top boundary
            if(this.y < this.HalfWidth) {
                this.y = this.HalfWidth;
            }

            // checks the right boundary
            if(this.x > 1500 - this.HalfWidth) {
                this.x = 1500 - this.HalfWidth;
            }

            // check the left boundary
            if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}