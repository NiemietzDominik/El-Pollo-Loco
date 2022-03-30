class Coins extends CollectableObject {
    x = 200;
    y = 100;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.height = 120;
        this.width = 120;
        this.spawnCoin();
    }

    spawnCoin() {
        this.x = 500 + Math.random() * 1500; // Zahl zwischen 500 und 2000
        this.y = 330 + Math.random()* 40; // Zahl zwischen 330 und 370
    }

}