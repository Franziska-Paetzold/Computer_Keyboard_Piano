// Franziska Pätzold
// https://github.com/Franziska-Paetzold

// Based on https://p5js.org/examples/sound-preload-soundfile.html
// Preloading & playing back sound file with p5
// AND
// Angela Brennecke, a.brennecke@filmuniversitaet.de
// TBAG 18/19 -- Theoretical Backgrounds of Audio & Graphics
// https://github.com/abrennec/tbag1819

"use strict";

let whiteKey;
let blackKey;

// note names will store sound files
let noteC;
let noteCisDes;
let noteD;
let noteDisEs;
let noteE;
let noteF;
let noteFisGes;
let noteG;
let noteGisAs;
let noteA;
let noteAisB;
let noteH;

//will hold order of notes
let whiteKeys;
let blackKeys;

function preload() {

    soundFormats('mp3', 'ogg', "wav");
    noteC = loadSound("sounds/C4.mp3");
    noteCisDes = loadSound("sounds/Cis4.mp3"); 
    noteD = loadSound("sounds/D4.mp3");
    noteDisEs = loadSound("sounds/Dis4.mp3");
    noteE = loadSound("sounds/E4.mp3");
    noteF = loadSound("sounds/F4.mp3");
    noteFisGes = loadSound("sounds/Fis4.mp3");
    noteG = loadSound("sounds/G4.mp3");
    noteGisAs = loadSound ("sounds/Gis4.mp3");
    noteA = loadSound("sounds/A4.mp3");
    noteAisB = loadSound("sounds/Ais4.mp3");
    noteH = loadSound("sounds/B4.mp3");
    print("reached initializer");
    
    whiteKeys = [noteC, noteD, noteE, noteF, noteG, noteA, noteH];
    blackKeys = [noteCisDes,noteDisEs, noteFisGes, noteGisAs, noteAisB];
  }

  

// Once the DOM has fully loaded, add the audio application / functionality
document.addEventListener("DOMContentLoaded", addAudioApp);

function addAudioApp() 
{
  console.log("DOM loaded, ready to go");
}

function setup()
{  
    //canvas with white background
    let canvas = createCanvas(1000, 1000);
    background(255, 255, 255);
    
    let width = 80;
    let height = 200;
    let sideDistance = 50;
    
    whiteKey = new Key(width, height, sideDistance);
    blackKey = new Key(width*0.8, height*0.6, sideDistance);
}

function draw()
{
    let color;
    //white keys 
    for (let i=0; i<whiteKeys.length; i++)
    {    
        color = [255,255,255];
        if (whiteKeys[i].isPlaying())
        {
            color =  [255,77,77];
            print("reached");
        }
        else {
            color = [255,255,255];
        }
        buildKey(whiteKey, i, color, whiteKey.width, 0)
      
    }

    //black keys
    for (let i=0; i<6; i++)
    {

      if (i == 2)
       {
            //let the "third key" out
       }
      else
       {
           let j;
           color = [0,0,0];
           if (i<2)
            {
                j= i;
            }
           else 
            {
                j= i-1;
            }
           if (blackKeys[j].isPlaying())
            {
                color =  [int(random(0,255)),int(random(0,255)),int(random(0,255))];
            }
           else {
                color = [0,0,0];
            }
           buildKey(blackKey, i, color, whiteKey.width, (whiteKey.width/2)+(whiteKey.width*0.1));
        }
    } 
}

function keyPressed(){
    //white keys
    //y 
    if (keyCode === 89) {
        noteC.play();
      }
    //x
    else if (keyCode === 88) {
        noteD.play();
    }
    //c
    else if (keyCode === 67) {
        noteE.play();
    }
    //v
    else if (keyCode === 86) {
        noteF.play();
    }
    //b
    else if (keyCode === 66) {
        noteG.play();
    }
    //n
    else if (keyCode === 78) {
        noteA.play();
    }
    //m
    else if (keyCode === 77) {
        noteH.play();
    }
    //black keys
    //s
    else if (keyCode === 83) {
        noteCisDes.play();
    }
    //d
    else if (keyCode === 68) {
        noteDisEs.play();
    }
    //g
    else if (keyCode === 71) {
        noteFisGes.play();
    }
    //h
    else if (keyCode === 72) {
        noteGisAs.play();
    }
    //j
    else if (keyCode === 74) {
        noteAisB.play();
    }

    return false;
}


//just for code outsourcing
function buildKey(key, i, color, shift, gap)
{
    key.build(i, color, shift, gap);
}

