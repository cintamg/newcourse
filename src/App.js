import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading='Enter your text here'/>
    {/* <About/> */}
    </>
  );
}

export default App;
