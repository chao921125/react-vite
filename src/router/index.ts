import Home from "../views/home/Index";
import About from "../views/about/Index";

const routes = [
    {
        path: "/",
        components: Home
    },
    {
        path: "/about",
        components: About
    },
];

export default routes;