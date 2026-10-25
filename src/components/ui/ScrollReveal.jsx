"use client";

import { useEffect } from "react";

/**
 * Scroll-triggered reveal animations driven by data attributes.
 *
 * - `data-reveal="up|fade|scale|left|right"` animates a single element in when it enters the viewport.
 * - `data-reveal-stagger="up|..."` animates each direct child in turn (`data-reveal-step` sets the gap in ms).
 *
 * Elements are hidden by CSS until revealed (see index.css), so there is no flash before hydration.
 * Once an element has finished animating it gets `data-revealed` and returns to its normal styles,
 * which keeps hover transforms on cards working.
 */
const STAGGER_STEP_MS = 90;

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Tracked per effect run (not on the DOM) so a re-run after cleanup re-observes everything
    const bound = new WeakSet();
    const bind = (el) => {
      if (bound.has(el) || el.hasAttribute("data-revealed")) return false;
      bound.add(el);
      return true;
    };

    const finish = (el) => {
      el.classList.remove("reveal-in");
      el.setAttribute("data-revealed", "");
    };

    const reveal = (el) => {
      el.classList.add("reveal-in");
      const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
      const done = () => finish(el);
      const onEnd = (e) => {
        // Ignore transitions bubbling up from descendants
        if (e.target !== el || e.propertyName !== "opacity") return;
        el.removeEventListener("transitionend", onEnd);
        done();
      };
      el.addEventListener("transitionend", onEnd);
      // Fallback in case transitionend never fires (e.g. element hidden mid-animation)
      setTimeout(done, delay + 1200);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () => {
      document.querySelectorAll("[data-reveal-stagger]").forEach((container) => {
        const step = Number(container.dataset.revealStep) || STAGGER_STEP_MS;
        [...container.children].forEach((child, i) => {
          if (!bind(child)) return;
          child.style.setProperty("--reveal-delay", `${i * step}ms`);
          if (reduceMotion) finish(child);
          else observer.observe(child);
        });
      });

      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!bind(el)) return;
        if (reduceMotion) finish(el);
        else observer.observe(el);
      });
    };

    scan();

    // Pick up content rendered later (route changes, filtered lists, lazy sections)
    let frame = 0;
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
