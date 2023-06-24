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
      <div className='flex bg-[#4C4C4C] bg-opacity-50  h-[50px]  w-[500px] rounded-3xl items-center justify-between p-[12px] backdrop-blur-sm mb-[1px] ml-[150px]'>
          <button><img src={iconakar}></img></button>
          <button><img src={iconchevron}></img></button>
          <button><img src={iconchevronf}></img></button>

      <div className='flex bg-[#323232] w-[200px] rounded-3xl bg-opacity-50 p-[10px] justify-between h-[40px] '>
           <button> <img src={icontext}></img></button>

        <div className='flex items-center '>
           <button> <img  className='w-] p-[]' src={iconlock}></img></button>
           <h2 className='text-[white]'> rocketseat.com</h2>
        </div>

           <button>  <img src={iconrefresh}></img></button>
      </div>

          <img src={iconshare}></img>
          <img src={iconadd}></img>
          <img src={iconcopy}></img>
    </div>
  )
}

export default NavBar