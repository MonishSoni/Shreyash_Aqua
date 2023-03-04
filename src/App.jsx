
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Copyright from './Components/Copyright/Copyright';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Servicess/Service';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        {/* <About /> */}
        <Contact /> 
        {/* <Service/> */}
        <Footer />
        <Copyright />
      </div>

    </>
  );
}

export default App;
