
let nbarray = []; 
let img;
let theta = 0;
//let song;
// 初始內容
//let nb;
//let nb2;
//let nb3;
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
  
  createCanvas(600, 600);
  background(0);
  button = createButton('click me');
  button.position(275, 550);
  button.mousePressed(changeBG);
  
  //createCanvas(600, 600);
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  //background(0, 255, 0);

  
  //song = loadSound('assets/IU-Celebrity.mp3.mp3');
  //createCanvas(600, 600);
  //background(255, 100, 150);
  



//function preload() {
 // song = loadSound('assets/IU-Celebrity.mp3');
  
  createCanvas(600, 600, WEBGL);

  img = loadImage('未命名-1.jpg');
}
function draw() {
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);  
      if (
        mouseX-width/2 > this.x-this.size/2 && 
        mouseX-width/2 < this.x+this.size/2 &&
        mouseY-height/2 > this.y-this.size/2 && 
        mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        texture(img);
        this.mx = this.mx+0.5;
        }
      box(this.size);
    pop();
    this.move();
    theta += 0.05;
  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
    }

}
function changeBG() {
  r = random(255); 
  g = random(100,200); 
  b = random(100); 
  a = random(200,255); 
  background(r, g, b, a);
}

//function mousePressed() {
  //if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    //song.stop();
    //background(255, 0, 0);
  //} else {
  //  song.play();
  //  background(0, 255, 0);
 // }
//}

