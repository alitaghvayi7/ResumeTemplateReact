import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Portfolio from "./Components/portfolio";
import Works from "./Components/works";
import Testimonials from "./Components/testimonolias";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import "./App.scss";
import {useState} from "react";

function App() {
  
const [active, setActive] = useState(false);

const handleClickActive = ()=>{
  setActive(!active);
}
  return (
    <div className="app">
      <Menu showMenu={active} setShowMenu={setActive}/>
      <Navbar showMenu={active} setShowMenu={handleClickActive}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
