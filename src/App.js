import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Footer from './Footer'
import Aboutus from './Aboutus';
import Contactus from './Contactus';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route path='/' component={Home} exact/>
        <Route path='/aboutus' component={Aboutus} exact/>
        <Route path='/contactus' component={Contactus} exact/>
        <Footer/>
      </BrowserRouter>

      
    </div>
  );
}
export default App;
