import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CircularAnimOpts = {
  containerAnimation?: gsap.core.Animation | null;
  trigger?: string;
  img?: string;
};

export const circularAnim = (opts?: CircularAnimOpts) => {
  // Fallback naar oude functionaliteit als geen opts
  if (!opts) {
    if (document.querySelectorAll(".circular-shape-wrapper").length > 0) {
      const cs = gsap.timeline({
        ease: "power2.in",
        backgroundColor: "#FCF7F3",
        scrollTrigger: {
          trigger: ".circular-shape-wrapper",
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          scrub: 1,
        }
      })
      cs.to(".shape-thumb img", { scale: 100, rotation: 90, autoAlpha: 1, delay: 0.1 })
    }
    return;
  }

  const { containerAnimation, trigger = ".service-circular", img = ".service-circular .shape-thumb img" } = opts;

  const triggerEl = document.querySelector(trigger) as HTMLElement | null;
  const imgEl = document.querySelector(img) as HTMLElement | null;
  
  if (!triggerEl || !imgEl) return;

  // Met containerAnimation (voor horizontale scroll)
  if (containerAnimation) {
    // Animeer de shape
    gsap.fromTo(
      imgEl,
      { scale: 1, rotate: 0, autoAlpha: 1 },
      {
        scale: 100,
        rotate: 90,
        autoAlpha: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triggerEl,
          containerAnimation,
          start: "left center",
          end: "right center",
          scrub: 1,
        },
      }
    );
    
    // Animeer de achtergrond van zwart naar wit
    gsap.fromTo(
      triggerEl,
      { backgroundColor: "#111111" },
      {
        backgroundColor: "#FCF7F3",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triggerEl,
          containerAnimation,
          start: "left center",
          end: "right center",
          scrub: 1,
        },
      }
    );
  }
}