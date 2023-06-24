/* eslint-disable no-unused-vars */
import ReactPlayer from 'react-player';
import { useState } from 'react';

import './styles/global.css'

import video from './video/videoback.mp4'
import video1 from './video/videobackground.mp4'

import iconshare from './assets/icons/share.svg'
import iconsearch from './assets/icons/search.svg'
import iconrefresh from './assets/icons/refresh.svg'
import iconplayc from './assets/icons/play-circle.svg'
import iconlock from './assets/icons/lock.svg'
import iconcopy from './assets/icons/copy.svg'
import iconchevron from './assets/icons/chevron.svg'
import iconchevronf from './assets/icons/chevron-froward.svg'
import iconalbums from './assets/icons/albums.svg'
import iconakar from './assets/icons/akar.svg'
import iconadd from './assets/icons/add.svg'
import iconacess from './assets/icons/acessibility.svg'
import icontext from './assets/icons/text.svg'
import play from './assets/icons/icons.tela de video/play.svg'

function App() {
const [playing, setPlaying] = useState(false);



const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);


}

const handlePlayToggle = () => {
  setPlaying(!playing);
};

  return (
    <body className='bg-cover bg-center h-screen flex justify-center items-center ;'   >
        <video loop muted className=' inset-0 bg-repeat absolute w-full h-full object-cover z-[-1]' src={video1} controls></video>

    <div>
      <div className='flex bg-[#4C4C4C] bg-opacity-50  h-[50px]  w-[500px] rounded-3xl items-center justify-between p-[12px] backdrop-blur-sm mb-[1px] ml-[150px]'>
          <img src={iconakar}></img>
          <img src={iconchevron}></img>
          <img src={iconchevronf}></img>

          <div className='flex bg-[#323232] w-[200px] rounded-3xl bg-opacity-50 p-[10px] justify-between h-[40px] '>
            <img src={icontext}></img>
            <div className='flex items-center '>
            <img  className='w-] p-[]' src={iconlock}></img>
            <h2 className='text-[white]'> rocketseat.com</h2>
            </div>
            <img src={iconrefresh}></img>
           </div>

          <img src={iconshare}></img>
          <img src={iconadd}></img>
          <img src={iconcopy}></img>
    </div>

        {/* <div className='absolute left-0  bg-[#4C4C4C] bg-opacity-50 w-[45px] items-center flex-row h-[170px] rounded-3xl backdrop-blur-md p-[12px] ml-[575px] mt-[70px] justify-around'> */}




{/*
        </div> */}
          <div className=' flex   w-[800px] m-[24px] '>
             <div className='flex-col flex  bg-[#4C4C4C] bg-opacity-50 w-[45px] items-center  h-[170px] rounded-3xl backdrop-blur-md justify-between mt-[60px] p-[5px] '>

                    <img className='m-[5px]' src={iconplayc}></img>
                     <img className='m-[7px]'src={iconacess}></img>
                    <img className='m-[7px]'src={iconalbums}></img>
                    <img className='m-[5px]'src={iconsearch}></img>

                  </div>
                  <div className='ml-[24px]'>
                <ReactPlayer url={video} playing={playing} />
                <button onClick={handlePlayToggle} className='absolute left-[47%] top-[49%]' >{playing ? 'Pause' : 'Play'}

                <img className=' w-[40px] top-[50%] left-[55%] opacity-0 hover:opacity-100 ' src={play}/> </button>

                </div>
        </div>
    </div>
  </body>


  )
}

export default App
