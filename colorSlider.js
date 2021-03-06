var slider, step;
var isSliderPressed;
function setup()
{
	createCanvas(windowWidth,windowHeight);
	slider=createSlider(5,50,10);
	slider.position(20,20);
	slider.mousePressed(function(){isSliderPressed=true;});
	slider.mouseReleased(function(){isSliderPressed=false;});
	colorMode(HSB,360,100,100);
	noStroke();
}
function draw()
{
	step=width/slider.value();
	var x, y, c;
	for(x=0;x<width;x+=step)
	{
		for(y=0;y<height;y+=step)
		{
			c=color(map(x,0,width,0,360),map(y,0,height,100,0),100);
			fill(c);
			rect(x,y,step,step);
		}
	}
	if(mouseIsPressed&&!isSliderPressed)
	{
		c=color(map(mouseX-mouseX%step,0,width,0,360),map(mouseY-mouseY%step,0,height,100,0),100);
		background(c);
	}
}
