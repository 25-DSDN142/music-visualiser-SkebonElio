//  // Code by Phoebe Zeller
let sunY = 270;
let sunSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
sunSize = map(drum, 0, 100,50, 400);

fill(255,255,0); // Yellow
let myYellow = color(255,255,0);
let myRed = color(255,0,0);

let lerpAmt = map(vocal,0,100,0,1);
let changingColor = lerpColor(myYellow,myRed,lerpAmt);

fill(changingColor);

for(let i =0; i <3; i = 1 +1){
  // console.log("loop works");
  ellipse (300,sunY+(100*i),sunSize);
}

}
