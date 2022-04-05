class CollectedCoins extends DrawableObject{

    IMAGES;

    height = 100;
    width = 100;
    x = 20;
    y = 30;
    

    constructor(images) {
        super();
        this.IMAGES = images;
        this.loadImage(this.IMAGES);
    }
}