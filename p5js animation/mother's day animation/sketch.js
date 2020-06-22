var timer = 180;
let spritedata;
let spritesheet;
let animation1_1 = [], animation1_2 = [], animation2 =[], animation3 =[], animation4_1 =[], animation4_2 =[], animation4_3 =[], animation4_4 =[];
let animation5_1 = [], animation5_2 = [], animation5_3 = [], animation6_1 =[], animation6_2 =[], animation7_1 =[], animation7_2 =[], animation8 =[];
let animation9 = [], animation10 =[], animation11 =[], animation12_1 =[], animation12_2 =[];

let shot1Btn;

function preload() {

  shot1_10 = loadImage('assets/shot-picture/shot1_10.png');
  shot4_09 = loadImage('assets/shot-picture/shot4_09.png');
  shot4_16 = loadImage('assets/shot-picture/shot4_16.png');
  shot5_20 = loadImage('assets/shot-picture/shot5_20.png');
  shot12_03 = loadImage('assets/shot-picture/shot12_03.png');

  acceptance = loadImage('assets/acceptance.png');

  shot1_music = loadSound('assets/shot1_2.mp3');
  shot3_music = loadSound('assets/noise.mp3');
  shot4_music = loadSound('assets/saybye.mp3');
  festival = loadSound('assets/festival.mp3');
  keyboard = loadSound('assets/keyboard.wav');
  ringring = loadSound('assets/ringring.mp3');
  musicfesmom = loadSound('assets/musicfesmom.mp3');
  memory11 = loadSound('assets/memory11.mp3');


  acceptance_music = loadSound('assets/acceptance.mp3');


  spritedata1_1 = loadJSON('shot-json/shot1_1.json');
  spritesheet1_1 = loadImage('assets/shot-picture/shot1_1.png');

  spritedata1_2 = loadJSON('shot-json/shot1_2.json');
  spritesheet1_2 = loadImage('assets/shot-picture/shot1_2.png');

  spritedata2 = loadJSON('shot-json/shot2.json');
  spritesheet2 = loadImage('assets/shot-picture/shot2.png');

  spritedata3 = loadJSON('shot-json/shot3.json');
  spritesheet3 = loadImage('assets/shot-picture/shot3.png');

  spritedata4_1 = loadJSON('shot-json/shot4_1.json');
  spritesheet4_1 = loadImage('assets/shot-picture/shot4_1.png');

  spritedata4_2 = loadJSON('shot-json/shot4_2.json');
  spritesheet4_2 = loadImage('assets/shot-picture/shot4_2.png');

  spritedata4_3 = loadJSON('shot-json/shot4_3.json');
  spritesheet4_3 = loadImage('assets/shot-picture/shot4_3.png');

  spritedata4_4 = loadJSON('shot-json/shot4_4.json');
  spritesheet4_4 = loadImage('assets/shot-picture/shot4_4.png');

  spritedata5_1 = loadJSON('shot-json/shot5_1.json');
  spritesheet5_1 = loadImage('assets/shot-picture/shot5_1.png');

  spritedata5_2 = loadJSON('shot-json/shot5_2.json');
  spritesheet5_2 = loadImage('assets/shot-picture/shot5_2.png');

  spritedata5_3 = loadJSON('shot-json/shot5_3.json');
  spritesheet5_3 = loadImage('assets/shot-picture/shot5_3.png');

  spritedata6_1 = loadJSON('shot-json/shot6_1.json');
  spritesheet6_1 = loadImage('assets/shot-picture/shot6_1.png');

  spritedata6_2 = loadJSON('shot-json/shot6_2.json');
  spritesheet6_2 = loadImage('assets/shot-picture/shot6_2.png');

  spritedata7_1 = loadJSON('shot-json/shot7_1.json');
  spritesheet7_1 = loadImage('assets/shot-picture/shot7_1.png');

  spritedata7_2 = loadJSON('shot-json/shot7_2.json');
  spritesheet7_2 = loadImage('assets/shot-picture/shot7_2.png');

  spritedata8 = loadJSON('shot-json/shot8.json');
  spritesheet8 = loadImage('assets/shot-picture/shot8.png');

  spritedata9 = loadJSON('shot-json/shot9.json');
  spritesheet9 = loadImage('assets/shot-picture/shot9.png');

  spritedata10 = loadJSON('shot-json/shot10.json');
  spritesheet10 = loadImage('assets/shot-picture/shot10.png');

  spritedata11 = loadJSON('shot-json/shot11.json');
  spritesheet11 = loadImage('assets/shot-picture/shot11.png');

  spritedata12_1 = loadJSON('shot-json/shot12_1.json');
  spritesheet12_1 = loadImage('assets/shot-picture/shot12_1.png');

  spritedata12_2 = loadJSON('shot-json/shot12_2.json');
  spritesheet12_2 = loadImage('assets/shot-picture/shot12_2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  shot1Btn = createButton(' ');

  let frames1_1 = spritedata1_1.frames;
  for(let i = 0; i < frames1_1.length; i++){
    let pos = frames1_1[i].frame;
    let img = spritesheet1_1.get(pos.x, pos.y, pos.w, pos.h);
    animation1_1.push(img);
  }

  let frames1_2 = spritedata1_2.frames;
  for(let i = 0; i < frames1_2.length; i++){
    let pos = frames1_2[i].frame;
    let img = spritesheet1_2.get(pos.x, pos.y, pos.w, pos.h);
    animation1_2.push(img);
  }

  let frames2 = spritedata2.frames;
  for(let i = 0; i < frames2.length; i++){
    let pos = frames2[i].frame;
    let img = spritesheet2.get(pos.x, pos.y, pos.w, pos.h);
    animation2.push(img);
  }

  let frames3 = spritedata3.frames;
  for(let i = 0; i < frames3.length; i++){
    let pos = frames3[i].frame;
    let img = spritesheet3.get(pos.x, pos.y, pos.w, pos.h);
    animation3.push(img);
  }

  let frames4_1 = spritedata4_1.frames;
  for(let i = 0; i < frames4_1.length; i++){
    let pos = frames4_1[i].frame;
    let img = spritesheet4_1.get(pos.x, pos.y, pos.w, pos.h);
    animation4_1.push(img);
  }

  let frames4_2 = spritedata4_2.frames;
  for(let i = 0; i < frames4_2.length; i++){
    let pos = frames4_2[i].frame;
    let img = spritesheet4_2.get(pos.x, pos.y, pos.w, pos.h);
    animation4_2.push(img);
  }

  let frames4_3 = spritedata4_3.frames;
  for(let i = 0; i < frames4_3.length; i++){
    let pos = frames4_3[i].frame;
    let img = spritesheet4_3.get(pos.x, pos.y, pos.w, pos.h);
    animation4_3.push(img);
  }

  let frames4_4 = spritedata4_4.frames;
  for(let i = 0; i < frames4_4.length; i++){
    let pos = frames4_4[i].frame;
    let img = spritesheet4_4.get(pos.x, pos.y, pos.w, pos.h);
    animation4_4.push(img);
  }

  let frames5_1 = spritedata5_1.frames;
  for(let i = 0; i < frames5_1.length; i++){
    let pos = frames5_1[i].frame;
    let img = spritesheet5_1.get(pos.x, pos.y, pos.w, pos.h);
    animation5_1.push(img);
  }

  let frames5_2 = spritedata5_2.frames;
  for(let i = 0; i < frames5_2.length; i++){
    let pos = frames5_2[i].frame;
    let img = spritesheet5_2.get(pos.x, pos.y, pos.w, pos.h);
    animation5_2.push(img);
  }

  let frames5_3 = spritedata5_3.frames;
  for(let i = 0; i < frames5_3.length; i++){
    let pos = frames5_3[i].frame;
    let img = spritesheet5_3.get(pos.x, pos.y, pos.w, pos.h);
    animation5_3.push(img);
  }

  let frames6_1 = spritedata6_1.frames;
  for(let i = 0; i < frames6_1.length; i++){
    let pos = frames6_1[i].frame;
    let img = spritesheet6_1.get(pos.x, pos.y, pos.w, pos.h);
    animation6_1.push(img);
  }

  let frames6_2 = spritedata6_2.frames;
  for(let i = 0; i < frames6_2.length; i++){
    let pos = frames6_2[i].frame;
    let img = spritesheet6_2.get(pos.x, pos.y, pos.w, pos.h);
    animation6_2.push(img);
  }

  let frames7_1 = spritedata7_1.frames;
  for(let i = 0; i < frames7_1.length; i++){
    let pos = frames7_1[i].frame;
    let img = spritesheet7_1.get(pos.x, pos.y, pos.w, pos.h);
    animation7_1.push(img);
  }

  let frames7_2 = spritedata7_2.frames;
  for(let i = 0; i < frames7_2.length; i++){
    let pos = frames7_2[i].frame;
    let img = spritesheet7_2.get(pos.x, pos.y, pos.w, pos.h);
    animation7_2.push(img);
  }

  let frames8 = spritedata8.frames;
  for(let i = 0; i < frames8.length; i++){
    let pos = frames8[i].frame;
    let img = spritesheet8.get(pos.x, pos.y, pos.w, pos.h);
    animation8.push(img);
  }

  let frames9 = spritedata9.frames;
  for(let i = 0; i < frames9.length; i++){
    let pos = frames9[i].frame;
    let img = spritesheet9.get(pos.x, pos.y, pos.w, pos.h);
    animation9.push(img);
  }
  let frames10 = spritedata10.frames;
  for(let i = 0; i < frames10.length; i++){
    let pos = frames10[i].frame;
    let img = spritesheet10.get(pos.x, pos.y, pos.w, pos.h);
    animation10.push(img);
  }

  let frames11 = spritedata11.frames;
  for(let i = 0; i < frames11.length; i++){
    let pos = frames11[i].frame;
    let img = spritesheet11.get(pos.x, pos.y, pos.w, pos.h);
    animation11.push(img);
  }
  let frames12_1 = spritedata12_1.frames;
  for(let i = 0; i < frames12_1.length; i++){
    let pos = frames12_1[i].frame;
    let img = spritesheet12_1.get(pos.x, pos.y, pos.w, pos.h);
    animation12_1.push(img);
  }
  let frames12_2 = spritedata12_2.frames;
  for(let i = 0; i < frames12_2.length; i++){
    let pos = frames12_2[i].frame;
    let img = spritesheet12_2.get(pos.x, pos.y, pos.w, pos.h);
    animation12_2.push(img);
  }

  mother_1 = new Sprite(animation1_1, windowWidth - 700, windowHeight - 600, 0.04);
  mother_2 = new Sprite(animation1_2, windowWidth - 700, windowHeight - 600, 0.04);
  grow = new Sprite(animation2, windowWidth - 700, windowHeight - 600, 0.03);
  dispute = new Sprite(animation3, windowWidth - 700, windowHeight - 600, 0.03);
  depart_1 = new Sprite(animation4_1, windowWidth - 700, windowHeight - 600, 0.045);
  depart_2 = new Sprite(animation4_2, windowWidth - 700, windowHeight - 600, 0.028);
  depart_3 = new Sprite(animation4_3, windowWidth - 700, windowHeight - 600, 0.028);
  depart_4 = new Sprite(animation4_4, windowWidth - 700, windowHeight - 600, 0.05);
  musicfes_1 = new Sprite(animation5_1, windowWidth - 700, windowHeight - 600, 0.03);
  musicfes_2 = new Sprite(animation5_2, windowWidth - 700, windowHeight - 600, 0.04);
  musicfes_3 = new Sprite(animation5_3, windowWidth - 700, windowHeight - 600, 0.04);
  work_1 = new Sprite(animation6_1, windowWidth - 700, windowHeight - 600, 0.04);
  work_2 = new Sprite(animation6_2, windowWidth - 700, windowHeight - 600, 0.04);
  news_1 = new Sprite(animation7_1, windowWidth - 700, windowHeight - 600, 0.04);
  news_2 = new Sprite(animation7_2, windowWidth - 700, windowHeight - 600, 0.04);
  memory = new Sprite(animation8, windowWidth - 700, windowHeight - 600, 0.03);
  rest = new Sprite(animation9, windowWidth - 700, windowHeight - 600, 0.04);
  dream = new Sprite(animation10, windowWidth - 700, windowHeight - 600, 0.04);
  listen = new Sprite(animation11, windowWidth - 700, windowHeight - 600, 0.04);
  wakeup_1 = new Sprite(animation12_1, windowWidth - 700, windowHeight - 600, 0.05);
  wakeup_2 = new Sprite(animation12_2, windowWidth - 700, windowHeight - 600, 0.05);
}

function draw() {
  background(255);
  // image(animation[frameCount % animation.length], windowWidth - 700,windowHeight - 600);
  // textSize(32);
  // text((floor)(frameCount / 60), 50, 50);
  // text((floor)(timer), 20, 20);

  // mother.animate();
  // mother.show();

  if(timer > 100){
    drawFirstScene(); //Timeframe: 0 ~ 60 seconds;
  }else if(timer <= 100 && timer > 40){
    drawSecondScene(); //Timeframe: 61 ~ 120 seconds;
  }else if(timer <= 40 && timer >=-2){
    drawThirdScene(); //Timeframe: 121 ~ 180 seconds.
  }
 
}

function playshot1(){
   shot1_music.play();
}

//Welcome to Scene 1
function drawFirstScene(){
  if(timer > 0){
    // Scene 1 Shot 1
    if (timer <= 180 && timer >= 165){
      if(timer <= 180 && timer >= 177){
        mother_1.animate();
        mother_1.show();
        if(frameCount % 60 == 0)
        timer-=1;
      }
      if(timer == 176){
        image(shot1_10,windowWidth - 700, windowHeight - 600);
        
        shot1Btn.position(300, 470);
        
        let col = color(255, 0, 0, 0);
        shot1Btn.style('background-color', col);
        shot1Btn.size(15, 15);
        shot1Btn.mousePressed(playshot1);

      }
      if(shot1_music.isPlaying()){
        shot1Btn.remove();
        mother_2.animate();
        mother_2.show();   
        if(frameCount % 60 == 0)
        timer-=1;     
      }
    }
  

    //Scene 1 Shot 2
    if(timer < 165 && timer >= 150){
      grow.animate();
      grow.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }
    
    //Scene 1 Shot 3
    if(timer < 150 && timer >= 135){
      shot1_music.pause();
      dispute.animate();
      dispute.show();
      if(frameCount % 60 == 0 && timer == 145) shot3_music.play();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    // Scene 1 Shot 4
    if(timer < 135 && timer > 100){
      if(timer >= 131){
        depart_1.animate();
        depart_1.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }

      if(timer == 130){
        image(shot4_09,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "o" to Open Mail', 150, 200);
        if(keyIsPressed && key == 'o')timer-=1; 
      }

      if(timer<130&&timer>126){
          depart_2.animate();
          depart_2.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer == 126){
        image(shot4_16,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "l" to Open Letter', 150, 200);
        if(keyIsPressed && key == 'l') timer -= 1
      }

      if(timer < 126 && timer >120){
        depart_3.animate();
        depart_3.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }

      if(timer <= 120 && timer >106){
        if (frameCount % 60 == 0 && timer == 120){
          acceptance_music.play();
        } 
        image(acceptance,windowWidth - 700, windowHeight - 600);
        if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer <= 106 && timer > 99){
        if (frameCount % 60 == 0 && timer == 105){
          shot4_music.play();
        }
        depart_4.animate();
        depart_4.show();
        if(frameCount % 60 == 0)
        timer-=1; 
      }
    }
  }
}

//Welcome to Scene 2
function drawSecondScene(){
    //Scene 2 Shot 1
    // if(timer < 100){
      if(timer < 101 && timer >= 91){
        if (frameCount % 60 == 0 && timer == 99)
          festival.play();
        
        if (frameCount % 60 == 0 && timer == 95)
          ringring.play();
          musicfes_1.animate();
          musicfes_1.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer < 91 && timer > 85){
          musicfes_2.animate();
          musicfes_2.show();
          if(frameCount % 60 == 0)
          timer-=1; 
      }

      if(timer == 85){
        image(shot5_20,windowWidth - 700, windowHeight - 600);
        textSize(30);
        text('Press "a" to Accept Call', windowWidth - 529, 200);
        if(keyIsPressed && key == 'a'){
          ringring.pause();
          // festival.pause();
          timer -= 1
        } 
      }

      if(timer < 85 && timer >= 78){
        if (frameCount % 60 == 0 && timer == 84)
        musicfesmom.play();
        festival.setVolume(0.3);
        musicfes_3.animate();
        musicfes_3.show(); 
        if(frameCount % 60 == 0)
        timer-=1; 
      }
    

    //Scene 2 Shot 2
    if(timer < 78 && timer >= 65){
        festival.pause();
        musicfesmom.pause();
      if (frameCount % 60 == 0 && timer == 77)
        keyboard.play();

      if (frameCount % 60 == 0 && timer == 75)
      ringring.play();

      if(timer <= 68 && timer >= 65){
        textSize(30);
        text('Sam missed his mom\'s call again because he was too busy...', windowWidth/2 - 100, 80);
      }
      work_1.animate();
      work_1.show();
      
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    // //Scene 2 Shot 3
    if(timer < 65 && timer >= 50){
        ringring.pause();
        keyboard.pause();

        if(timer < 65 && timer >= 62){
          news_1.animate();
          news_1.show();
        }

        if(timer <= 62 && timer >= 50){
          if(timer == 62 && frameCount % 60 == 0) memory11.play();
          textSize(30);
          text('Aunt: Sam, your mother got sick.', windowWidth/2 - 150, 80);
        }

        if(timer <= 59 && timer >= 50){
          textSize(30);
          text('Sam: What? When?', windowWidth/2 - 150, 150);
        }

        if(timer <= 56 && timer >= 50){
          textSize(30);
          text('Aunt: You didn\'t know that? Last week, it was very serious...', windowWidth/2 - 150, 220);
        }

        if(timer <= 53 && timer >= 50){
          textSize(30);
          text('Sam:......', windowWidth/2 - 150, 290);
        }

        if(frameCount % 60 == 0)
        timer-=1; 
    }

    //Scene 2 Shot 4
    if(timer < 50 && timer > 39){
      memory.animate();
      memory.show();

      if(frameCount % 60 == 0)
      timer-=1; 
    }
  }

//Welcome to Scene 3
function drawThirdScene(){
    //Scene 3 Shot 1
    if(timer <= 40 && timer >= 30){
      rest.animate();
      rest.show();

      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 2
    if(timer < 30 && timer >= 20){
      dream.animate();
      dream.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 3
    if(timer < 20 && timer >= 10){
      listen.animate();
      listen.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    //Scene 3 Shot 4
    if(timer < 10 && timer >= 6){
      wakeup_1.animate();
      wakeup_2.show();
      if(frameCount % 60 == 0)
      timer-=1; 
    }

    if(timer < 6){
      image(shot12_03,windowWidth - 700, windowHeight - 600);
      if(frameCount % 60 == 0)
      timer-=1; 
    }


  }

function keyTyped(){
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}