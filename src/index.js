import { routes } from "./routes.js";

function render(path) {
  history.pushState({}, "", path);
  const page = routes[path];
  page(document.querySelector("main"));
}

function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  render(path);
}

window.addEventListener("popstate", () => {
  render(window.location.pathname);
});

// History API 사용, a태그 클릭 시 페이지 이동 에러 해결
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    navigate(a.getAttribute("href"));
  });
});
