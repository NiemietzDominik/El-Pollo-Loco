class Level {
    enemies;
    clouds;
    coins;
    backgroundObjects;
    bottle;
    level_end_x = 7000;


    constructor(enemies, clouds, backgroundObjects, coins, bottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottle = bottle;
    }
}