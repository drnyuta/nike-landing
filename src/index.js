import { getNavBarItems, getImages, getHeading, getPrice, getDescription, getButton } from "./api/api";
import { setupFooter } from "./components/footer/footer";
import { setupHeader } from "./components/header/header";
import { setupMain } from "./components/main-section/main-section";
import "./style.css";

setupHeader(document.getElementById("app"), {
  navBarItems: getNavBarItems(),
  images: getImages(),
});

setupMain(document.getElementById("app"), {
  images: getImages(),
  heading: getHeading(),
});

setupFooter(document.getElementById("app"), {
  images: getImages(),
  price: getPrice(),
  description: getDescription(),
  button: getButton(),
});
