import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import Logo from "../../assets/images/logo.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../lib/consts/navigation";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-light hover:no-underline active:bg-light rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className=" bg-normal w-60 p-3 flex flex-col border-r-2 border-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <img src={Logo} height="50px" width="50px" alt="logo" />
        <p className=" font-bold font-roboto text-lg text-white">ScholerNet</p>
      </div>
      <div className=" py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <div className={classNames(" text-red cursor-pointer", linkClass)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-light text-white" : "text-white",
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
