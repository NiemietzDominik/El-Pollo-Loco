class CollectableObject extends MovableObject {

    CoinsCollection = [];

   //collecting Coin


    isCollecting(co) {
        return this.x + this.width > co.x &&
            this.y + this.height > co.y &&
            this.x < co.x &&
            this.y < co.y + co.height
    }
    
}