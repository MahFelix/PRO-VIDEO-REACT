import './styles/global.css'
import BaseVideo from './components/BaseVideo'
import NavBar from './components/NavBar'



function App() {

 document.addEventListener("mousemove", function(event) {
  const background = document.querySelector("#background");
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const offsetX = window.innerWidth / 2 - mouseX;
  const offsetY = window.innerHeight / 2 - mouseY;

  background.style.transform = `translate(${offsetX / 50}px, ${offsetY / 50}px)`;
});


  return (
    <body id='background' className='bg-cover bg-center h-screen flex justify-center items-center  ;'   >

    <div>
    <NavBar />
    <BaseVideo />
    </div>
  </body>
  )
}

export default App
