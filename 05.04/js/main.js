//Class Figure => point {х,у}
//Class Rectangle => a,b
//Class Square =>a
//Circle=>r
//all=> draw (х,у => ) / area , perimeter / name 



class Figure {
    constructor(x,y) { 
        this.name = 'Figure';
        this.x=x;
        this.y=y;
    }
   draw(){
       console.log(`${this.name} x:${this.x}, y:${this}`)
   } 
   area(){
       return 0;
   }
 perimeter() {
     return 0;
   }
    
  }
class Rectangle extends Figure {
    constructor(x,y,a,b) {
        this.name = 'Rectangle';
        super(x,y)
        this.a=a;
        this.b=b;
    }
    area(){
        return this.a * this.b;
    }
    perimeter(){
        return (this.a + this.b)
    }
}
      
class Square extends Rectangle {
    constructor(x,y, a) {
        this.name = 'Square';
        super(x,y, a, a)
          }
}

class Circle extends Figure {
    constructor(x,y , r) {
        this.name = 'Circle';
        super(x,y)
      this.r=r;
    }
    area(){
        return Math.PI*this.r**2;
    }
    perimeter(){
        return 2*Math
    }
}



const figures = [new Figure (1,2), new Rectangle(1,2,4,8) , new Square (1,2,12)]
figures.forEach(f=>console.log(f.area()));