var grey  = "#6E6D6Da";
var green = "#008000";
var dark  = "#302226";
var brightgreen = "#00ff00";
var red = "#ff0000";

var grid_rows = 20; var grid_cols = 25;
var square_pixels = 20;
var width =  600;
var height = 500;

var north = 1;
var east = 2;
var south = 4;
var west = 8;

function node(row, col){
    this.walls = north | south | east | west;
    if(col == 0){ this.walls = this.walls ^ west; }
    if(col == grid_cols - 1){ this.walls = this.walls ^ east; }
    if(row == 0){ this.walls = this.walls ^ north; }
    if(row == grid_rows-1){ this.walls = this.walls ^ south; }

    this.TearDown = function(wall){
        this.walls = this.walls ^ wall;
    };

    this.Erect = function(wall){ 
        this.walls = this.walls | wall;
    };

    this.IsStanding(wall){
        return this.walls & wall;
    };

//    this.AreAllWallsUp(row, col){
//        if  ((row < 0) or (row >= grid_rows)){
//            return False;
//        };
//        if ((col < 0) and (col >= grid_col)){
//            return False;
//        };
//        if ((row != 0) and !(this.IsStanding(north))){
//            return False;
//        };
//        if ((row != grid_rows-1) and !(this.IsStanding(south))){
//            return False;
//        };
//        if ((col != 0) and !(this.IsStanding(west) )){
//            return False;
//        };
//        if ((col != grid_cols-1) and !(this.IsStanding(east))){
//            return False;
//        };
//        return True;
//    };
};

window.onload = function(){
    var node1 = new node(0, 0);
    console.log(node1.walls);
    node1.Erect(west);
    console.log(node1.walls);
    node1.Erect(north);
    console.log(node1.walls);
    //console.log(node1.AreAllWallsUp(0,0));
    draw();
};

window.draw = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.beginPath();
    context.rect(50, 50, width, height);
    context.fillStyle = dark;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
};
