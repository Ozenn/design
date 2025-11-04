"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PauseAtAbout() {
  useEffect(() => {
    // Wacht tot DOM geladen is
    const timer = setTimeout(() => {
      // Pin about-area
      const st1 = ScrollTrigger.create({
        trigger: ".about-area",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // Pin big-text-wrapper (Redox) zodat het blijft staan tijdens about-area
      const st2 = ScrollTrigger.create({
        trigger: ".about-area",
        start: "top top",
        end: "+=100%",
        pin: ".big-text-wrapper",
        pinSpacing: false,
      });

      return () => {
        st1.kill();
        st2.kill();
      };
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
