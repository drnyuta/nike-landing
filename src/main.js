import { getNavBarItems, getImages } from "./api/api";
import { setupHeader } from "./components/header/header";
import { setupMain } from "./components/main/main";
import "./style.css";

setupHeader(document.getElementById("app"), {
  navBarItems: getNavBarItems(),
  images: getImages(),
});

setupMain(document.getElementById("app"), {
  navBarItems: getNavBarItems(),
  images: getImages(),
});
