export default function createRouter() {
  const routes = [];

  const router = {
    addRoute(hash, render) {
      routes.push({ hash, render }); // hash와 render를 routes 배열에 추가
      return this;
    },
    start() {
      const renderRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.hash === window.location.hash
        );
        if (currentRoute) {
          currentRoute.render(); // render current route
        } else {
          // currentRoute가 없을 때
          console.log("No route matched the current hash");
        }
      };

      window.addEventListener("hashchange", renderRoutes); // hashChange시 rednerRoutes 호출
      renderRoutes();
    },
  };

  return router;
}
