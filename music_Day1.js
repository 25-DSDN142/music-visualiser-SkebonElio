let OvalY = 150;
let OvalSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(20);
OvalSize = map(drum, 0, 100, 50, 100);


fill(205);
 ellipse(300,OvalY,OvalSize);
   


// OvalY = OvalY +1;

}
