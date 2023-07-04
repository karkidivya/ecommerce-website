import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './pages/cart/cart';
import { productsData } from './api/Api';
import getReview  from './api/getReview'
import { createBrowserRouter,Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { Product } from './pages/product/product';
import { Login } from './pages/login/Login';
import Admin from './pages/admin/admin'
import Dashboard from './components/admin/Dashboard';
import AdminLogin from './components/admin/Login'
import AddItem from './components/admin/AddItem'
import DeleteItem from './components/admin/DeleteItem'
const Layout = ()=>{
  return <div>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path:'/product/:name/:id',
        element: <Product/>,
        loader: getReview
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />,
    children :[
      {
        path: '/admin',
        element: <AdminLogin />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
        children:[
          {
            path: '/admin/dashboard/additem',
            element: <AddItem />,
          },
          {
            path: '/admin/dashboard/deleteitem',
            element: <DeleteItem />
          }
        ]
      }
    ]
  }
  
]) 


function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
