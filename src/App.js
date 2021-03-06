import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";

function App() {
  return (
    // <> and </> is an empty wrapper so react doesn't give an error
    <>
    <Particles
      params={{
        particles: {
          number: {
            value: 60,
            density: {
            enable: true,
            value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
