/* eslint-disable quotes */
/* eslint-disable no-console */
import "regenerator-runtime";
import "../styles/css/style.css";
import "../styles/css/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
  link: document.querySelectorAll(".nav-link"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
