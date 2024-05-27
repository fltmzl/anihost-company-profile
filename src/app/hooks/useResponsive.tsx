import { useState, useEffect } from "react";

const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const isMobile = windowWidth !== undefined && windowWidth < 768;
  const isTablet = windowWidth !== undefined && windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth !== undefined && windowWidth >= 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
    windowWidth,
  };
};

export default useResponsive;
