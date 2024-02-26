import createRouter from "./router.js";
import designPage from "./page/design-page.js";
import devPage from "./page/dev-page.js";

const container = document.querySelector("main");
const pages = {
  design: () => designPage(container),
  dev: () => devPage(container),
};

const router = createRouter();

router.addRoute("#/design", pages.design).addRoute("#/dev", pages.dev).start();

// add click event to logo, page to home
document.querySelector(".logo-container").addEventListener("click", () => {
  location.href = "/";
});
