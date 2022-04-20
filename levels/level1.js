const level1 = new Level(
    [
        new Chicken(600 + Math.random() * 700, 0.15 + Math.random() * 0.5),
        new Chicken(400 + Math.random() * 200, 0.15 + Math.random() * 2),
        new Chicken(500 + Math.random() * 1200, 1 + Math.random() * 0.9),
        new Chicken(800 + Math.random() * 2200, 0.45 + Math.random() * 0.8),
        new Chicken(1000 + Math.random() * 800, 2 + Math.random() * 0.7),
        new Chicken(400 + Math.random() * 1500, 0.25 + Math.random() * 0.5),
        new MiniChicken(400 + Math.random() * 1500, 0.25 + Math.random() * 0.5),
        new MiniChicken(1000 + Math.random() * 1500, 0.25 + Math.random() * 0.5),
        new MiniChicken(3300 + Math.random() * 1500, 0.25 + Math.random() * 0.5),
        new MiniChicken(4000 + Math.random() * 1500, 0.25 + Math.random() * 0.5),
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
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    ],

    
    [
    new Bottle(300),
    new Bottle(800),
    new Bottle(1500)
    ]

)