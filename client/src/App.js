import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { Header } from './components/Header/Header';
import { LoginView } from './views/LoginView/LoginView';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Header />
           <Routes>
               <Route path="/" element={<p>Test</p>} />
               <Route path="/login" element={<LoginView />} />
           </Routes>
       </BrowserRouter>
    </div>
  ); 
}

export default App;
