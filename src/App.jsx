import './styles/global.css'
import video1 from './video/mundoeu.mp4'
import BaseVideo from './components/BaseVideo'
import NavBar from './components/NavBar'



function App() {

 document.addEventListener("mousemove", function(event) {
  const background = document.querySelector("#background");
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = window.innerWidth / 2 - mouseX;
  const offsetY = window.innerHeight / 2 - mouseY;

  background.style.transform = `translate(${offsetX / 600}px, ${offsetY / 600}px)`;
});


  return (
    <body className='bg-cover bg-center h-screen flex justify-center items-center  ;'   >
        <video id='background' autoPlay loop muted className=' inset-0 bg-repeat fixed w-full h-full object-cover hover:scale-y-[150] z-[-1]' src={video1} ></video>
    <div>
    <NavBar />
    <BaseVideo />
    </div>
  </body>
  )
}

export default App
