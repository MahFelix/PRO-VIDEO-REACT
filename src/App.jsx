import './styles/global.css'
import video1 from './video/videobackground (1).mp4'
import BaseVideo from './components/BaseVideo'
import NavBar from './components/NavBar'



function App() {


  return (
    <body className='bg-cover bg-center h-screen flex justify-center items-center ;'   >
        <video autoPlay loop muted className=' inset-0 bg-repeat absolute w-full h-full object-cover z-[-1]' src={video1} ></video>
    <div>
    <NavBar />
    <BaseVideo />
    </div>
  </body>
  )
}

export default App
