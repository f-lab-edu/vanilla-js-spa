import designPage from "./page/design-page.js";
import devPage from "./page/dev-page.js";

export const routes = {
  "/": "home",
  "/dev": devPage,
  "/design": designPage,
};
