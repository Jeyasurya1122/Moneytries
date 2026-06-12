import { useState, useEffect } from "react";

export function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return {
    width,
    // Breakpoint booleans
    isSmallMobile:    width < 320,            // T01
    isStandardMobile: width >= 320 && width < 375, // T02
    isLargeMobile:    width >= 375 && width < 425, // T03
    isSmallTablet:    width >= 425 && width < 768, // T04
    isStandardTablet: width >= 768 && width < 834, // T05
    isLargeTablet:    width >= 834 && width < 1024, // T06
    isSmallLaptop:    width >= 1024 && width < 1280, // T07
    isStandardLaptop: width >= 1280 && width < 1366, // T08
    isLargeLaptop:    width >= 1366 && width < 1440, // T09
    isDesktop:        width >= 1440 && width < 1600, // T10
    isLargeDesktop:   width >= 1600 && width < 1920, // T11
    isUltraWide:      width >= 1920,           // T12

    // Grouped convenience helpers
    isMobile:  width < 768,               // T01–T04
    isTablet:  width >= 768 && width < 1024, // T05–T06
    isDesktopUp: width >= 1024,           // T07+
  };
}
