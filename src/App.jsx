import { HeroSection, Partners, Contact } from "./components/sections";
import App1 from "./ab/src/App1";
import JoinZagEngPage from './source/JoinZag'
import { Routes ,Route } from "react-router-dom";


function App() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Contact />
      <App1 />
    </>
  );
}

export default App;
