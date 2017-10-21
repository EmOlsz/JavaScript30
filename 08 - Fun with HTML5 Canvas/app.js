const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#333';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let drawCheck = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let drc = true;





function draw(e) {
    if (!drawCheck) return; // stop the fn from running when they are not moused down
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        drc = !drc;
    }

    if(drc) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }

}

canvas.addEventListener('mousedown', (e) => {
    drawCheck = true;
[lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawCheck = false);
canvas.addEventListener('mouseout', () => drawCheck = false);