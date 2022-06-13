import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Component: ScrollTopTop
  // Rendered: Cross-App
  // Purpose: Helper that will return user to top up page every click in Link navigation

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
