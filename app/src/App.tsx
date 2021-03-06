import './App.scss';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import NotFound from "./components/NotFound"
import { formRegisterConfig, formLoginConfig } from './formConfig'


const App:React.FC = () => {

  return (
    <div className="App">

      <Routes>
          <Route path='/' 
            element={<LoginForm formLoginConfig={formLoginConfig} />} />

          <Route path='/registration' 
            element={<RegistrationForm formRegisterConfig={formRegisterConfig} />} />
            
          <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
