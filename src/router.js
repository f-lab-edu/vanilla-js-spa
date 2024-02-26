export default function createRouter() {
  const routes = [];

  const router = {
    addRoute(fragment, component) {
      routes.push({ fragment, component });
      return this;
    },
    start() {
      const checkRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.fragment === window.location.hash
        );
        if (currentRoute) {
          currentRoute.component();
        } else {
          // currentRoute가 없을 때
          console.log("No route matched the current hash");
        }
      };

      window.addEventListener("hashchange", checkRoutes);
      checkRoutes();
    },
  };

  return router;
}
