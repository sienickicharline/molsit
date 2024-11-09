// Obtain the canvas and its 2D context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Example values for illustration
const b = 50; // Horizontal distance
const h = 100; // Constant height or baseline
const o = 20; // Vertical offset

// Move to a starting point (if necessary)
// context.moveTo(x, y); 

// Draw a line to the specified coordinates
context.lineTo(-b, h - o);

// Stroke the line (if necessary)
// context.stroke();
