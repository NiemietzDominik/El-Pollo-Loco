class Coin extends CollectableObject {
    x = 200;
    y = 100;
    height = 150;
    width = 150;

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.x = x;
        this.y = y;
    }



}