var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,500,100,50);
    surface1.shapeColor = "red";
    surface1.debug = "true";

    surface2 = createSprite(300,500,100,50);
    surface2.shapeColor = "green";
    surface2.debug = "true";

    surface3 = createSprite(500,500,100,50);
    surface3.shapeColor = "blue";
    surface3.debug = "true";

    surface4 = createSprite(700,500,100,50);
    surface4.shapeColor = "pink";
    surface4.debug = "true";


    //create box sprite and give velocity
    box = createSprite(random(20,750),450,50,20);
    box.shapeColor = "white";
    box.debug = "true";
    box.velocityX = 8;
    box.velocityY = -4;

    edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    box.bounceOff(edges);

    music.play();

    if(box.isTouching(surface1)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(surface2)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(surface3)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "pink";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
