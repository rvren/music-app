import React from "react";
import * as VscIcons from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <VscIcons.VscHome />,
    cName: "Navigation-menu__text",
  },
  {
    title: "Liked Songs",
    path: "/favourites",
    icon: <VscIcons.VscHeart />,
    cName: "Navigation-menu__text",
  },
];