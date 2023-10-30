import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Delivery from './pages/Delivery/Delivery'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/menu",
      element: (
        <Menu/>
      )
    },
    {
      path: "/contact",
      element: (
       <Contact/>
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
