import Dashboard from "./views/Dashboard.js";
import Design from "./views/Design";
import Dev from "./views/Dev";

const nagivateTo = url => {
    // history.pushState(state, title, url)
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/design", view: Design},
        {path: "/dev", view: Dev},
    ];

    // 각 route 일치여부 확인
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // 404 page
    if (!match) {
        match = {
            route: routes[0], // "/" page
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // router 이동 시 새로고침 x
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            nagivateTo(e.target.href);
        }
    })

    router();
});