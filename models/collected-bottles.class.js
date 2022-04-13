class CollectedBottles extends DrawableObject{

    IMAGES;

    height = 100;
    width = 100;
    x = 20;
    y = 30;
    
    constructor(images, x, y, height, width) {
        super();
        this.IMAGES = images;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.loadImage(this.IMAGES);
    }
}