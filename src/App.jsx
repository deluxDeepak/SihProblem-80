import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from './pages/Department/Department';
import Compliance from './pages/Compliances/Compliances';
import Dashboard from './pages/Dashboard/Dashboard';
import Knowledge from './pages/Knowledge/Knowledge';
import Notfound from './pages/Notfound/Notfound';
// sabhi pages pe layout/Navbar dikhega 
import Layout from './components/Layout';


import LoginPage from './pages/LoginPage/LoginPage';

// =======Routing ===
const App = () => (

  <BrowserRouter>

    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path="departments" element={<Department />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="knowledge" element={<Knowledge />} />
      </Route>

      {/* ADD ALL CUSTOM ROUTES "*" ROUTE */}
      <Route path="*" element={<Notfound />} />
    </Routes>

  </BrowserRouter>

)



export default App
