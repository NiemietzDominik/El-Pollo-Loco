class Coin extends CollectableObject {
    x = 200;
    y = 100;
    height = 150;
    width = 150;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.spawnCoin();
    }

    spawnCoin() {
        this.x = 500 + Math.random(15) * 1500;
        this.y = 300 + Math.random() * 50; 
    }

}