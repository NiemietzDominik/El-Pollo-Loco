class Cloud extends MovableObject{
    y = 100;
    width = 500;
    height = 250;
    x = 100

    constructor(){
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.animate();
    }
    

    animate() {
       this.moveLeft();
    }

  
}