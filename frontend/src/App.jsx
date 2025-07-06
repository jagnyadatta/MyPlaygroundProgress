import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './components/header/Header'
import DashBoard from './components/dashboard/DashBoard.jsx'

function App() {
  return (
    <>
      <Header />
      <DashBoard />
      {/* --------Toast-Container---------- */}
      <ToastContainer position="top-right" theme='dark' />
    </>
  )
}

export default App
