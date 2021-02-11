var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1.createSprite(200,580, 200,30);
    surface2.createSprite(400,580, 200,30);
    surface3.createSprite(600,580, 200,30);
    surface4.createSprite(800,580, 200,30);


    //create box sprite and give velocity
    ball.createSprite(random(20,750), 20, 30,30);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
      edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box
}
