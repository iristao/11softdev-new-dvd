var requestID;
var svg = document.getElementById("svg");
var stop = document.getElementById('stop');
var NS = "http://www.w3.org/2000/svg";

// var x_velocity = Math.floor(Math.random() * 5)-10;
// var y_velocity = Math.floor(Math.random() * 5)-10;
var x_velocity = [];
var y_velocity = [];
var x_pos = [];
var y_pos = [];

var draw = function(){
    for (i = 0; i < svg.childElementCount; i++){
        if (x_pos[i] <= 20 || x_pos[i] >= 480){
            x_velocity[i] *= -1;
        }
        if (y_pos[i] <= 20 || y_pos[i] >= 480){
            y_velocity[i] *= -1;
        }
        x_pos[i] += x_velocity[i];
        y_pos[i] += y_velocity[i];
    
        svg.children[i].setAttribute("cx", x_pos[i]);
        svg.children[i].setAttribute("cy", y_pos[i]);
    }
}

requestID = setInterval(draw, 17);

var dvdAnimation = function(){
    clearInterval(requestID);
    requestID = setInterval(draw, 17);
    var circle_actual = document.createElementNS(NS, "circle");
    circle_actual.setAttribute("cx", 250);
    circle_actual.setAttribute("cy", 250);
    circle_actual.setAttribute("r", 13);
    svg.appendChild(circle_actual);
    x_velocity.push(Math.floor(Math.random() * 5)-10);
    y_velocity.push(Math.floor(Math.random() * 5)-10);
    x_pos.push(250);
    y_pos.push(250);
    draw()
}

var stopit = function(){
    clearInterval(requestID);
    svg.innerHTML = '';
}

svg.addEventListener("click", dvdAnimation);
stop.addEventListener("click", stopit);