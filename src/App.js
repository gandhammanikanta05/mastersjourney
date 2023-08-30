import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginPage from './Components/FrontEnd/LoginPage';
import NewAccount from './Components/FrontEnd/NewAccount';
import './App.css';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path='/LoginPage' Component={LoginPage} />
        <Route exact path="/NewAccount" Component={NewAccount} />
      </Routes>
    </BrowserRouter>  
)

export default App;
