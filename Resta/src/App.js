import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import About from './About/about';
import Menu from './Menu/menu';
import Contact from './Contact/contact';
import Review from './Review/review';
import Header from './components/pages/Header/header';
import Sliderr from './components/pages/sliderr';
function App() {
  return (
      // {/* 
      // <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> 
      // </div>*/}
      <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}> </Route>
        <Route path='/about' element = {<About/>}> </Route>
        <Route path='/menu' element = {<Menu/>}> </Route>
        <Route path='/contact' element = {<Contact/>}> </Route>
        <Route path='/review' element = {<Review/>}> </Route>
        <Route path = "/sliderr" element = {<Sliderr/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
