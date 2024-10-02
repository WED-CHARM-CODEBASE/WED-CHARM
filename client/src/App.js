import './App.css';
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import  Navigation  from './components/Navigation';
import  Home from './components/Home';
import  Login from './components/Login';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/login' element ={<Login/>} />
    <Route path='*' element ={<PageNotFound/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
