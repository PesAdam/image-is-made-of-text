const density = "Ñ@#W$9876543210?!abc;:+=-,._";
let hauko;

function preload(){
    hauko = loadImage("gloria48.jpg");
}

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);
    image(hauko, 0 , 0, width, height);

    let w = width / hauko.width;
    let h = height / hauko.height;
    hauko.loadPixels();

    for(let i=0; i < hauko.width; i++){
        for(let j=0; j < hauko.height; j++){
            const pixelIndex = (i+j*hauko.width) * 4;
            const r = hauko.pixels[pixelIndex + 0];
            const g = hauko.pixels[pixelIndex + 1];
            const b = hauko.pixels[pixelIndex + 2];
            const avg = (r+g+b) / 3;
            noStroke();
            fill(avg);
            textSize(w);
            text('G', i * w, j * h);

        }
    }        
}