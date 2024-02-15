
import Header from "./Header";
import JoinZagEngPage from "../source/JoinZag";
import { Routes ,Route } from "react-router-dom";
import About from "../omr/About";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
    <Routes>
      <Route path='/' element={<>
      <main className="bg-black text-white">{children}</main>
      </>} />
      <Route path='/join' element={<JoinZagEngPage />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  );
};

export default Layout;
