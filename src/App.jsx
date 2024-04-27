import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BookAppointment from './pages/BookAppointment.jsx';
import Page404 from './pages/Page404.jsx';
import Products from './pages/Products.jsx';
import FeaturedProducts from './pages/FeaturedProducts.jsx';
import NewProducts from './pages/NewProducts.jsx';
import Users from './pages/Users.jsx';
import UserDetail from './pages/UserDetail.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/about' element={<About/>} />
        <Route path='/book-appointment' element={<BookAppointment/>} />
        <Route path='/products' element={<Products />} >
          <Route index element={<FeaturedProducts/>} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetail />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<Page404/>} />
      </Routes>
    </>
  )
}
export default App
