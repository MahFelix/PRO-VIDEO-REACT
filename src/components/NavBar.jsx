import iconshare from '../assets/icons/share.svg'
import iconrefresh from '../assets/icons/refresh.svg'
import iconlock from '../assets/icons/lock.svg'
import iconcopy from '../assets/icons/copy.svg'
import iconchevron from '../assets/icons/chevron.svg'
import iconchevronf from '../assets/icons/chevron-froward.svg'
import iconakar from '../assets/icons/akar.svg'
import iconadd from '../assets/icons/add.svg'
import icontext from '../assets/icons/text.svg'

const NavBar = () => {
  return (
      <div id='navbar-header' className='flex bg-[#4C4C4C] bg-opacity-50 box-border  rounded-[80px] h-[64px]  w-[816px] items-center justify-between p-[12px] backdrop-blur-sm mb-[1px] ml-[155px]'>
          <button className='bg-[#4C4C4C]'><img src={iconakar}></img></button>
          <button><img src={iconchevron}></img></button>
         <button> <img src={iconchevronf}></img></button>

      <div id='navbar-mid' className='flex bg-[#323232]  w-[440px] rounded-3xl bg-opacity-50 p-[8px] justify-between h-[48px] '>
           <button className='w-[16px] h-[16px] flex items-center justify-center mt-[8px]' > <img src={icontext}></img></button>

        <div className='flex items-center '>
           <button className='w-[16px] h-[16px]'> <img  className='' src={iconlock}></img></button>
           <h2 className='text-[white]'> rocketseat.com</h2>
        </div>

           <button className='p-[10px]'>  <img src={iconrefresh}></img></button>
      </div>

          <button><img src={iconshare}></img></button>
          <button><img src={iconadd}></img></button>
          <button><img src={iconcopy}></img> </button>
    </div>
  )
}

export default NavBar