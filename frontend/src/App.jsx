import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './components/header/Header'
import DashBoard from './components/dashboard/DashBoard.jsx'
import NotFound from './pages/NotFound.jsx';
import StringCompression from './components/project/allProjects/StringCompression.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      {/* --------Toast-Container---------- */}
      <ToastContainer position="top-right" theme='dark' />

      <Routes>
        <Route path='/' element={<DashBoard />}/>
        <Route path='/string-compression' element={<StringCompression />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
