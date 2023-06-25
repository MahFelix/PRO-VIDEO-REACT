import { useRef } from 'react'
import iconsearch from '../assets/icons/search.svg'
import iconplayc from '../assets/icons/play-circle.svg'
import iconalbums from '../assets/icons/albums.svg'
import iconacess from '../assets/icons/acessibility.svg'

const BarHeader = () => {
  const myVideo = useRef()


  // eslint-disable-next-line react-hooks/exhaustive-deps, no-unused-vars
  function PlayPause(e) {
    if(myVideo.current.paused)
      myVideo.current.play();
    else
      myVideo.current.pause()
  }

  return (
  <div id='navbar-side' className='flex-col flex bg-[#5F5F5F]  box-border w-[64px] bg-opacity-50  h-[220px] rounded-[80px] backdrop-blur-md justify-around items-center'>
    
            <button className='bg-[#4C4C4C]' onClick={(e) =>PlayPause()} ><img src={iconplayc}></img></button>
            <button><img className=''src={iconacess}></img></button>
            <button><img className=''src={iconalbums}></img></button>
            <button><img className=''src={iconsearch}></img></button>
          </div>
  )
}

export default BarHeader