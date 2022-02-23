import MenPage from "Pages/MenPage";
import WomenPage from "Pages/WomenPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import HomePage from '../Pages/HomePage';
import CollectionsPage from "../Pages/CollectionsPage"
import { IRoute } from "../interfaces/routeTypes";


export const publicRoutes: IRoute[] = [
  {path: "/", key: "HOME", component: HomePage, exact: true},
  {path: "/about", key: "ABOUT", component: AboutPage, exact: true},
  {path: "/contact", key: "CONTACT", component: ContactPage, exact: true},
  {path: "/collections", key: "COLLECTIONS", component: CollectionsPage, exact: true},
  {path: "/men", key: "MEN", component: MenPage, exact: true},
  {path: "/women", key: "WOMEN", component: WomenPage, exact: true},
  {path: "/checkout", key: "CHECKOUT", component: AboutPage, exact: true},
];

export const privateRoutes: IRoute[] = [];
