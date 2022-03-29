class Coins extends CollectableObject {

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.x = x;
        this.y = y;
        this.height = 120;
        this.width = 120;
        this.spawnCoin();
    }

    spawnCoin() {
        this.x = 500 + Math.random() * 1500; // Zahl zwischen 500 und 2000
        this.y = 330 + Math.random()* 40; // Zahl zwischen 330 und 370
   
    }

}