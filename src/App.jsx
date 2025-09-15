import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uploads from './pages/upload/upload';
import Compliance from './pages/compliance/compliance';
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
        <Route path="uploads" element={<Uploads />} />
        <Route path="compliance" element={<Compliance />} />
        <Route path="knowledge" element={<Knowledge />} />
      </Route>

      {/* ADD ALL CUSTOM ROUTES "*" ROUTE */}
      <Route path="*" element={<Notfound />} />
    </Routes>

  </BrowserRouter>


)



export default App
