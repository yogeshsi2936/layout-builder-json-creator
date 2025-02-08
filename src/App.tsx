import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import SideBar from './components/shared/SideBar';
import Organisms from './components/Organisms';
import Template from './components/Template';
import Tokens from './components/Tokens';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          <div className="basis-2/10 flex-1" >
            <SideBar/>
          </div>
          <div className="basis-8/10 flex-2">
            <Routes>
              <Route path="*" element={<h1 className="h-screen flex items-center justify-center">Page Not Found </h1>} />
              <Route path="/organisms" element={<Organisms/>} />
              <Route path="/templates" element={<Template/>} />
              <Route path="/tokens" element={<Tokens/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
