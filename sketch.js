function setup() {
        createCanvas (300,300);
        background (255, 255, 255);
}

function draw() {
    fill(0, 0, 0);
    rect(0, 0, 300, 300);
    fill(248, 228, 208);
triangle(0, 0, 300, 0, 200, 150);
triangle(0, 100, 0, 300, 133, 100);
triangle(300, 0, 300, 200, 141, 206);
triangle(0, 300, 300, 300, 86, 171);
}
