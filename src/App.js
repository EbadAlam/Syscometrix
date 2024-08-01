import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './Routes/CustomRoutes';
import gsap, { Draggable, ScrollTrigger } from 'gsap/all';
import './App.css';
function App() {
  gsap.registerPlugin(ScrollTrigger,Draggable);
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
