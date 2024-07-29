import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './Routes/CustomRoutes';
import gsap, { ScrollTrigger } from 'gsap/all';
import './App.css';
function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
