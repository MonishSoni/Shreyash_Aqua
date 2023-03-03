
import './App.css';
import Copyright from './Components/Copyright/Copyright';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Servicess/Service';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Service/>
        <Footer />
        <Copyright />
      </div>

    </>
  );
}

export default App;
