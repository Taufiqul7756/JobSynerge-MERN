import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home";
import About from "./About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimate from "../Pages/SalaryEstimate";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobsDetails from "../Pages/JobsDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryEstimate />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`https://job-synergy.onrender.com/all-jobs/${params.id}`),
      },
      {
        path: "/job/:id",
        element: <JobsDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
