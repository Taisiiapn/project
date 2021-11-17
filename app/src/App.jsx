import './App.scss';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/LoginForm.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import NotFound from "./components/NotFound"
// import {formConfigIterface} from './formConfig'
import {formRegisterConfig, formLoginConfig} from './formConfig'

// type Props = { formConfig: formConfigIterface[] };

// const App:React.FC<Props> = ({formConfig}) => {
const App = () => {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<LoginForm formLoginConfig={formLoginConfig} />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
