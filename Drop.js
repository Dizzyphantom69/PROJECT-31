class Drop
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var droppos=this.body.position;		
			push()
			translate(droppos.x, droppos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			//imageMode(CENTER);
			fill("blue");
			ellipseMode(RADIUS);
			ellipse( 0,0,this.r, this.r);

			pop()
			
	}

}
