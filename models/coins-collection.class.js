class CoinsCollection extends DrawableObject{
    IMAGES = [
        `img/8.Coin/Moneda2.png`
    ]

    cC = 0;

    coinsCollection = [cC];
    
   constructor(){
       super();
       this.loadImages(this.IMAGES);
       this.x = 40;
       this.y = 100
       this.width = 100;
       this.height = 100;
      
   }

}