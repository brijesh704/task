import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/HeaderComponent";
import { CreateAppointment } from "./components/createAppointment/CreateAppointment";
import { SideBar } from "./components/SideBar";
import { ShowListComponent } from "./components/appointment/ShowListComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./App/store";

const App = () => {

    return (
        <Provider store={appStore}>
            <div className="main-container">
                <div className="sideBar-container">
                    <SideBar />
                </div>
                <div className="page-container">
                    <HeaderComponent />
                    <Outlet />
                </div>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <CreateAppointment />
            },
            {
                path: '/createapp',
                element: <ShowListComponent />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)

