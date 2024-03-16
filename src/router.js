import { Link, createBrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import UserPage from "./pages/user/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] first-letter:capitalize">
          Click on user sidebar icon to view user page or
          <Link to="/user" className="underline ml-3 text-red-400">
            click here
          </Link>
        </div>
      </Layout>
    ),
  },
  {
    path: "user",
    element: (
      <Layout>
        <UserPage />
      </Layout>
    ),
  },
  {
    path: "/meteor",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          meteor
        </div>
      </Layout>
    ),
  },
  {
    path: "/group",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          users
        </div>
      </Layout>
    ),
  },
  {
    path: "/shield",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          shield
        </div>
      </Layout>
    ),
  },
  {
    path: "/ambulance",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          ambulance
        </div>
      </Layout>
    ),
  },
  {
    path: "/medical",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          medical
        </div>
      </Layout>
    ),
  },
  {
    path: "/sheet",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          sheet
        </div>
      </Layout>
    ),
  },
  {
    path: "/hospital",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          hospital
        </div>
      </Layout>
    ),
  },
  {
    path: "/card",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          card
        </div>
      </Layout>
    ),
  },
  {
    path: "/temperature",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          temperature
        </div>
      </Layout>
    ),
  },
  {
    path: "/hurricane",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          hurricane
        </div>
      </Layout>
    ),
  },
  {
    path: "/briefCase",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          briefCase
        </div>
      </Layout>
    ),
  },
  {
    path: "/doctor",
    element: (
      <Layout>
        <div className="text-2xl text-sky-500 font-bold flex justify-center items-center h-24 w-full border shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] capitalize">
          doctor
        </div>
      </Layout>
    ),
  },
]);

export default router;
