const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let hauko;

function preload(){
    hauko = loadImage("hauko.jpg");
}

function setup(){
    noCanvas();
    //background(0);
    //image(hauko, 0 , 0, width, height);

    let w = width / hauko.width;
    let h = height / hauko.height;
    hauko.loadPixels();

    for(let j=0; j < hauko.height; j++){
        let row = '';
        for(let i=0; i < hauko.width; i++){
            const pixelIndex = (i+j*hauko.width) * 4;
            const r = hauko.pixels[pixelIndex + 0];
            const g = hauko.pixels[pixelIndex + 1];
            const b = hauko.pixels[pixelIndex + 2];
            const avg = (r+g+b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len, 0));
            const c = density.charAt(charIndex);
            if(c == ' ') row += '&nbsp;'
            else row += c;
        }
        createDiv(row);
    }      
}