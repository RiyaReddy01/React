import './App.css';
import { useEffect,useRef,useState } from 'react';
import video from './vid.mp4';

function App(){
  const [time,setTime]=useState(0);
  const ref= useRef(null)
  useEffect(()=>{
      const video=ref.current
      setTimeout(()=>{
          setTime((time)=>time+1)
          if(parseInt(video.currentTime)==30){
              video.pause();
              alert("It's been 30 seconds")
              video.currentTime = video.currentTime+1;
              video.play();
          }
      },1000)

  })
  return(
      <>
      <div className='timer'>
          <h1>{time}</h1>
          <video width={400} height={400} preload="auto" controls="controls" ref={ref}>
              <source src={video} type="video/mp4"></source>
          </video>
      </div>
      </>
  )
}
export default App;


