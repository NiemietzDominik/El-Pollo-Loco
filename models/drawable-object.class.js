class DrawableObject {
    x = 120;
    y = 280;
    img;
    width = 100;
    height = 150;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

    drawFrame(ctx) {
        if (this instanceof Character) {
            this.rectangleForCharacter(ctx);
        }
        if (this instanceof Chicken) {
            this.rectangleForChicken(ctx);
        }
        if(this instanceof Coin){
            this.rectangleForCoin(ctx);
        }
        if(this instanceof Bottle){
            this.rectangleForBottle(ctx)
        }

    }

   

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

  

    rectangleForCharacter(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "none";
        ctx.rect(this.x, this.y + 100, this.width, this.height - 100);
        ctx.stroke();
    }

    rectangleForChicken(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    rectangleForCoin(ctx){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x+40, this.y+40, this.width-80, this.height-80);
        ctx.stroke();
    }
    rectangleForBottle(ctx)
    {
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x+40, this.y+40, this.width-80, this.height-80);
        ctx.stroke();
    }
}