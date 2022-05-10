function initlevel() {
    document.getElementById('startScreen').classList.add('hide');
    document.getElementById("startScreenBtn").classList.add('hide');


}


level1 = new Level(
    [
        new Chicken(500, 1),
        new Chicken(1000, 2),
        new Chicken(1300, 4),
        new Chicken(2000, 1),
        new Chicken(2500, 0.5),
        new Chicken(3000, 1),
        new Chicken(4000, 1),
        new Chicken(5000, 1),
        new Chicken(6500, 0.5),
        new Chicken(7000, 1),
        new Chicken(7500, 1),
        new Chicken(5500, 3),
        new Chicken(7000, 4),
        new Chicken(5500, 2),
        new Chicken(6000, 3),
        new Chicken(8200, 0.3),
        new Chicken(8400, 0.4),
        new Chicken(8600, 0.6),
        new Chicken(8800, 0.5),
        new MiniEndboss(),
        new Endboss(),
    ],

    [
        new Cloud(150, 0.35),
        new Cloud(50, 0.10)

    ],

    [
        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, -719),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, -719),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, -719),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, -719),


        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 0),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 0),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 0),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 0),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, 719),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, 719),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 2),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 2),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 2),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 2),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 3),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 3),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 3),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 3),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 4),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 4),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 4),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 4),


        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 5),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 5),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 5),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 5),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 6),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 6),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 6),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 6),


        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 7),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 7),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 7),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 7),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 8),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 8),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 8),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 8),


        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 9),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, 719 * 9),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, 719 * 9),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, 719 * 9),

        new BackgroundObject(`img/5.Fondo/Capas/5.cielo_1920-1080px.png`, 719 * 10),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, 719 * 10),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, 719 * 10),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, 719 * 10),
    ],

    [
        new Coin(300, 100),
        new Coin(340, 60),
        new Coin(380, 20),
        new Coin(1000, 20),
        new Coin(1040, 60),
        new Coin(1080, 100),
        new Coin(2000, 100),
        new Coin(2080, 100),
        new Coin(2040, 100),
        new Coin(5000, 10),
        new Coin(5000, 50),
        new Coin(5000, 90),
        new Coin(6000, 10),
        new Coin(6040, 10),
        new Coin(6080, 10)
    ], 


    [
        new Bottle(300),
        new Bottle(800),
        new Bottle(1500),
        new Bottle(2500),
        new Bottle(3500),
        new Bottle(5500),
        new Bottle(6500),
        new Bottle(2000),
        new Bottle(3000)
    ]

)
