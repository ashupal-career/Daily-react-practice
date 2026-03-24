import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/paramComp';
import Courses from './components/Courses';
import MokeTests from './components/MokeTests';
import Reports from './components/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <Navbar/>
      <About />
    </div>
  },
  {
    path: "/dashboard",
    element: <div>
      <Navbar/>
      <Dashboard />
    </div>,
    children:[
      {
        path:"courses",
        element: <Courses/>
      },
      {
        path:"moke-tests",
        element: <MokeTests/>
      },
      {
        path:"reports",
        element: <Reports/>
      }
    ]
  },
  {
    path: "student/:id",
    element: <div>
      <Navbar/>
      <ParamComp/>
    </div>
  }
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;