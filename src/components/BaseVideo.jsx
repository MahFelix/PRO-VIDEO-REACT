/* eslint-disable no-unused-vars */
import ReactPlayer from 'react-player';
import { useState } from 'react';
import video from '../video/videoback.mp4'
import iconsearch from '../assets/icons/search.svg'
import iconplayc from '../assets/icons/play-circle.svg'
import iconalbums from '../assets/icons/albums.svg'
import iconacess from '../assets/icons/acessibility.svg'
import play from '../assets/icons/icons.tela de video/play.svg'

const BaseVideo = () => {
const [playing, setPlaying] = useState(false);
const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);


}

const handlePlayToggle = () => {
  setPlaying(!playing);
};


  return (
     <div className=' flex   w-[800px] m-[24px] '>
          <div className='flex-col flex  bg-[#4C4C4C] bg-opacity-50 w-[45px] items-center  h-[170px] rounded-3xl backdrop-blur-md justify-between mt-[60px] p-[5px] '>

            <button onClick={handlePlayToggle} >{playing ? 'Pause' : 'Play' }<img src={iconplayc}></img></button>
            <button><img className='m-[7px]'src={iconacess}></img></button>
            <button><img className='m-[7px]'src={iconalbums}></img></button>
            <button><img className='m-[5px]'src={iconsearch}></img></button>

          </div>

          <div  className=' ml-[24px]  border-[2px] border-[#5F5F5F] '>
            <ReactPlayer url={video} playing={playing}  className='w-[6500px]'/>
            <button
            className='absolute top-[50%] left-[45%]'
            onClick={handlePlayToggle} >
            {playing ? 'Pause' : 'Play'}

            <img
            id='play'
            className=' w-[40px] '
            src={play}
            alt='Buttom-Plyer-Video'/> </button>
          </div>

    </div>
  )
}

export default BaseVideo