import renderDesignPageTo from "./page/design-page.js";
import renderDevPageTo from "./page/dev-page.js";

document.querySelector("#design").addEventListener("click", () => {
  history.pushState({}, "", "/#design");
  renderDesignPageTo(document.querySelector("main"));
});

document.querySelector("#dev").addEventListener("click", () => {
  history.pushState({}, "", "/#dev");
  renderDevPageTo(document.querySelector("main"));
});
