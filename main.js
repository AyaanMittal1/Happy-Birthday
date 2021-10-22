var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
var player_object="";
pY=0;
pX=0;

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Image1){
        player_object=Image1;
        player_object.scaleToWidth(800);
        player_object.scaleToHeight(500);
        player_object.set({
            top:pY,
            left:pX
        });
        canvas.add(player_object);

    });
	
}

function playSound(){
	x.play();
}
