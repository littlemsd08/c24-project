class Bin{

    constructor(x,y,width,height){
var options={
isStatic:true 

}

this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.leftBody=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.leftBody)
this.rightBody=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.rightBody)
this.bottomBody=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.bottomBody)


}

display(){
var pos=this.leftBody.position
push()
translate(pos.x,pos.y)
fill("red")
rect(0,0, this.width,this.height)
pop()
var pos=this.rightBody.position
push()
translate(pos.x,pos.y)
fill("red")
rect(0,0, this.width,this.height)
pop()
var pos=this.bottomBody.position
push()
translate(pos.x,pos.y)
fill("red")
rect(0,0, this.width,this.height)
pop()
}




}