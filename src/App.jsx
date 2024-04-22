import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import Page404 from './pages/Page404.jsx';
function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/book-appointment' element={<BookAppointment/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
      </>
  )
}
export default App
