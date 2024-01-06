import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar title="TextUtils"/>
      <Routes>
        <Route path='/' element={<TextForm heading='Enter your text here'/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
