import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/jobs",
        element: <Jobs></Jobs>
      },
      {
        path:"/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('/jobs.json')
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
