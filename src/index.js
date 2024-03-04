import createRouter from "./router.js";
import renderDesignPageTo from "./page/design-page.js";
import renderDevPageTo from "./page/dev-page.js";

const container = document.querySelector("main");
const pages = {
  renderDesignPage: () => renderDesignPageTo(container),
  renderDevPage: () => renderDevPageTo(container),
};

const router = createRouter();

// 라우트 추가
router.addRoute("#/design", pages.renderDesignPage);
router.addRoute("#/dev", pages.renderDevPage);

// 라우터 시작
router.start();

// add click event to logo, page to home
document.querySelector(".logo-container").addEventListener("click", () => {
  location.href = "/";
});
