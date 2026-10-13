"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./route-preloader.module.scss";

export default function RoutePreloader() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const hideTimer = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (prefersReducedMotion) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === pathname) return;

      setIsComplete(false);
      setIsVisible(true);
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setIsComplete(true), 5000);
    };

    const handlePopState = () => {
      if (prefersReducedMotion) return;
      setIsComplete(false);
      setIsVisible(true);
      if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setIsComplete(true), 5000);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, prefersReducedMotion]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (!isVisible) return;
    setIsVisible(true);
    setIsComplete(true);
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
  }, [pathname, isVisible]);

  useEffect(() => () => {
    if (hideTimer.current !== null) window.clearTimeout(hideTimer.current);
  }, []);

  return (
    isVisible && (
      <motion.div
        className={styles.preloader}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: isComplete ? 1 : 0.82, opacity: isComplete ? 0 : 1 }}
        transition={{
          scaleX: { duration: prefersReducedMotion ? 0 : isComplete ? 0.16 : 2, ease: "easeOut" },
          opacity: { duration: prefersReducedMotion ? 0 : 0.16, delay: isComplete ? 0.16 : 0 },
        }}
        onAnimationComplete={() => {
          if (!isComplete) return;
          setIsVisible(false);
          setIsComplete(false);
        }}
        aria-hidden="true"
      />
    )
  );
}