"use client"
import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator && window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => console.log("SirenX Service Worker registered"))
          .catch((err) => console.error("Service Worker registration failed:", err));
      });
    }
  }, []);

  return null; // This component doesn't render anything UI-wise
}