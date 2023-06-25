/* eslint-disable no-unused-vars */
import { useState,useRef,useEffect } from 'react';
import video from '../video/videoback.mp4'
import iconsearch from '../assets/icons/search.svg'
import iconplayc from '../assets/icons/play-circle.svg'
import iconalbums from '../assets/icons/albums.svg'
import iconacess from '../assets/icons/acessibility.svg'
import Play from '../assets/icons/icons.tela de video/play.svg'
import Ret from '../assets/icons/retangle.svg'
import Eli from '../assets/icons/elipse.svg'

const BaseVideo = () => {
const [barprogs, setBarprogs] = useState()
const myVideo = useRef()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  function PlayPause(e) {
    if(myVideo.current.paused)
      myVideo.current.play();
    else
      myVideo.current.pause()
  }

  useEffect(() => {

    const video = myVideo.current
    const handleTimeUpdate = () => {

      const percentage = (video.currentTime / video.duration) * 100;
      setBarprogs(percentage);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [PlayPause]);

   const handlePlayPause = () => {
    const video = myVideo.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };




  return (
     <div className='flex items-center justify-center '>

          <div id='navbar-side' className='flex-col flex bg-[#5F5F5F]  box-border w-[64px] bg-opacity-50  h-[220px] rounded-[80px] backdrop-blur-md justify-around items-center'>
            <button className='bg-[#4C4C4C]' onClick={(e) =>PlayPause()} ><img src={iconplayc}></img></button>
            <button><img className=''src={iconacess}></img></button>
            <button><img className=''src={iconalbums}></img></button>
            <button><img className=''src={iconsearch}></img></button>
          </div>

          <div id='vid-principal' className='  border-[1px] border-[#5F5F5F] rounded-[40px] m-[24px]'>
            <video ref={myVideo} src={video}  className=' flex  w-[960px] h-[540px] rounded-[40px] ' ></video>

              <div className=' flex justify-center items-center '>
            <button  className='absolute top-[50%] opacity-[0] hover:opacity-[100] w-[70px]  h-[70px]' onClick={(e) =>PlayPause()}><img className='w-[100px] h-[100px]' src={Play}></img></button>
            </div>

            <div className='flex absolute mt-[24px] left-[50%]'>
              <div><img className='mr-[16px]' src={Eli}></img></div>
                <div> <img src={Ret}></img></div>
            </div>
          </div>

    </div>
  )
}

export default BaseVideo