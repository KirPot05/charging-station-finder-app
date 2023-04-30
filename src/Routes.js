import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },

  {
    path: "/register",
    component: Register,
  },
  {
    path: "/bookings",
    component: Bookings,
  },

  {
    path: "/profile",
    component: Profile,
  },
];

export default routes;
