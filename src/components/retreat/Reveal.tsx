import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, as: Tag = "div", delay = 0 }: { children: ReactNode; className?: string; as?: ElementType; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-terracotta", className)}>{children}</p>;
}
