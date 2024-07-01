import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js';



function App(): JSX.Element {
  const cv = useRef<any>(null);
  const init = async () => {
    const app = new PIXI.Application(); 
    await app.init(
      {
        width: 800,
        height: 600,
        resizeTo: window,
        backgroundColor: 0x1099bb,
        canvas : cv.current
      }
    )
    const texture = await PIXI.Assets.load('src/assets/image.png')
    const bunny = new PIXI.Sprite(texture);
    
    bunny.anchor.set(0.5);
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    app.stage.addChild(bunny);
    
    app.ticker.add(() => {
      bunny.rotation += 0.1;
    });
  }

  useEffect(()=>{
    init()
  },[])

  return (
    <div id="pixi-wrapper" style={{width:"100%",height:"100%"}} >
      <canvas  style={{width:"100%",height:"100%"}} ref={cv} ></canvas>
  </div>
  )
}

export default App
