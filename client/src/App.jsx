import Landing from "./Views/Landing Page/Landing";
import { Route, Routes, useLocation} from 'react-router-dom';

const App = () => {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App
