import Home from "src/pages/home";
import Modules from "src/pages/modules";
import Contact from "src/pages/contact";
import About from "src/pages/about";
import Security from "src/pages/security";
import Article from "src/pages/security/Article";
import MoralDilemma from "src/pages/carDilemma";
import Bias from "src/pages/bias";
import Adventure from "src/pages/adventure";
import Login from "src/pages/login";
import Register from "src/pages/register";
import Profile from "src/pages/profile";

interface RouteConfig {
  path: string;
  component: React.ComponentType<any>; // Specify the component type
  exact?: boolean;
  children?: RouteConfig[]; // Add a children property for nested routes
}

const routesConfig: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/modules",
    component: Modules,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/security",
    component: Security,
    exact: true,
    children: [
      {
        path: ":articleId",
        component: Article,
        exact: true,
      },
    ],
  },
  {
    path: "/security/:articleId",
    component: Article,
    exact: true,
  },
  {
    path: "/bias",
    component: Bias,
    exact: true,
  },
  {
    path: "/self-driving-car-dilemma",
    component: MoralDilemma,
    exact: true,
  },
  {
    path: "/adventure",
    component: Adventure,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
  // You can add more routes here if needed
];

export default routesConfig;
