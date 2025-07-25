import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className=" flex flex-row !bg-white h-screen w-screen overflow-hidde">
      <Sidebar />
      <div className="flex flex-col flex-1 w-[300px]">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
