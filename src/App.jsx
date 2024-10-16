import './App.css'
import { Suspense,lazy } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Product from './product/Product'
import HomeProducts from './module/HomeProducts'
import CategoryProducts from './module/CategoryProducts'
import Spinner from './spinner/Spinner'
const NotFound=lazy(()=>import ('./notFound/NotFound'))
const Cart=lazy(()=>import('./cart/Cart'))


function App() {
  return (
    <><div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<HomeProducts/>}/>
        <Route path='/category:name' element={<CategoryProducts/>}/>
        <Route path='cart' element={<Suspense fallback={<Spinner/>}>{<Cart/>}</Suspense>}/>
        <Route path='*' element={<Suspense fallback={<Spinner/>}>{<NotFound/>}</Suspense>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
