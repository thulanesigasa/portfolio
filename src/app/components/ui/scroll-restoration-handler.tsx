"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollRestorationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("scrollToTop") === "true") {
        // Force scroll to top instantly after navigation
        window.scrollTo({ top: 0, behavior: "instant" });
        sessionStorage.removeItem("scrollToTop");
      }
    }
  }, [pathname]);

  return null;
}
