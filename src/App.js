import "./App.css";
import { Image } from "react-bootstrap";
import logo1 from "./assets/images/logo/logo1.png";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Towera from "./components/Towera";
import Towerb from "./components/Towerb";
import Footer from "./components/Footer";
import "./styles/landingPage.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="myBG">
        <Intro />
        <div className="mt-5">
          <Image src={logo1} className="logo" />
        </div>
      </div>

      <div className="towera">
        <Towera />
      </div>

      <div className="towera">
        <Towerb />
      </div>
      <br />
      <div className="footBG">
        <Footer />
      </div>
    </div>
  );
}

export default App;
