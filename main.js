var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "green";
width_of_line=2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
}
