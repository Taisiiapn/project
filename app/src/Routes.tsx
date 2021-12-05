import './App.scss';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import NotFound from "./components/NotFound"
import Products from "./components/Products"
import { formRegisterConfig, formLoginConfig } from './formConfig'
import StarShips from './components/StarShips';
import People from './components/People';
import { useSelector } from 'react-redux';


const App:React.FC = () => {

  return (

    <Routes>
        <Route path='/' 
          element={<LoginForm formLoginConfig={formLoginConfig} />} />

        <Route path='/registration' 
          element={<RegistrationForm formRegisterConfig={formRegisterConfig} />} />

        <Route path='/products' 
          element={<Products />} /> 

        <Route path='/products/:people' 
          element={<People />} />

        <Route path='/products/:starships' 
          element={<StarShips />} />

        <Route path='*' element={<NotFound />} />
    </Routes>
    
  );
}

export default App;
