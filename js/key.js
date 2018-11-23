// Franziska Pätzold
// https://github.com/Franziska-Paetzold

// Based on https://p5js.org/examples/sound-preload-soundfile.html
// Preloading & playing back sound file with p5
// AND
// Angela Brennecke, a.brennecke@filmuniversitaet.de
// TBAG 18/19 -- Theoretical Backgrounds of Audio & Graphics
// https://github.com/abrennec/tbag1819

class Key
{
    constructor(width, height, sideDistance, num)
    {
        this.width = width;
        this.height = height;
        this.sideDistance = sideDistance;
        this.num = num;
    }

    build(num, [r,g,b], shift, gap)
    {
      fill(r,g,b);
      rect(this.sideDistance+shift*num+gap, this.sideDistance, this.width, this.height, 5, 5, 20, 20);
    }
    
}