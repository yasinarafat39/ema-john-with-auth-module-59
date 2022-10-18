
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Main from './layouts/Main';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: 'shop',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: 'orders',
        loader: productsAndCartLoader,
        element: <Orders></Orders>
      },
      {
        path: 'login',
        element: <Login></Login>
      }, 
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
