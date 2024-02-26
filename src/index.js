import createRouter from "./router.js";
import designPage from "./page/design-page.js";
import devPage from "./page/dev-page.js";

const container = document.querySelector("main");
const pages = {
  design: () => designPage(container),
  dev: () => devPage(container),
};

const router = createRouter();

// 라우트 추가
router.addRoute("#/design", pages.design);
router.addRoute("#/dev", pages.dev);

// 라우터 시작
router.start();

// add click event to logo, page to home
document.querySelector(".logo-container").addEventListener("click", () => {
  location.href = "/";
});
