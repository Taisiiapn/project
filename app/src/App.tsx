import './App.scss';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import NotFound from "./components/NotFound"
import Products from "./components/Products"
import { formRegisterConfig, formLoginConfig } from './formConfig'
// import fetchDataPeople from './getData/fetchDataPeople'


const App:React.FC = () => {

  return (
    <div className="App">

      <Routes>
          <Route path='/' 
            element={<LoginForm formLoginConfig={formLoginConfig} />} />

          <Route path='/registration' 
            element={<RegistrationForm formRegisterConfig={formRegisterConfig} />} />

          <Route path='/products' 
            element={<Products />} /> 

          <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
