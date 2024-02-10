import Landing from "./Views/Landing Page/Landing";
import Home from "./Views/Home Page/Home";
import { Route, Routes, useLocation} from 'react-router-dom';

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
