"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the interactive "Cosmo" Rive character.
 * Falls back silently if the .riv runtime/file can't load.
 */
export default function CosmoCanvas({ width = 320, height = 360, style, onClickStyle }) {
  const canvasRef = useRef(null);
  const riveRef = useRef(null);
  const inputsRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let onResize = null;

    import("@rive-app/canvas")
      .then((rive) => {
        if (!mounted || !canvasRef.current) return;
        try {
          const r = new rive.Rive({
            src: "/uploads/cosmov8.riv",
            canvas: canvasRef.current,
            autoplay: true,
            useOffscreenRenderer: true,
            autoBind: true,
            layout: new rive.Layout({ fit: "contain", alignment: "center" }),
            onLoad: () => {
              r.resizeDrawingSurfaceToCanvas();
              try {
                const names = r.stateMachineNames || [];
                if (names.length) inputsRef.current = r.stateMachineInputs(names[0]) || [];
              } catch (e) {}
            },
          });
          riveRef.current = r;
          onResize = () => {
            if (riveRef.current) riveRef.current.resizeDrawingSurfaceToCanvas();
          };
          window.addEventListener("resize", onResize);
        } catch (e) {
          console.warn("Rive init failed", e);
        }
      })
      .catch((e) => console.warn("Rive load failed", e));

    return () => {
      mounted = false;
      if (onResize) window.removeEventListener("resize", onResize);
      if (riveRef.current) {
        try {
          riveRef.current.cleanup();
        } catch (e) {}
        riveRef.current = null;
      }
    };
  }, []);

  const poke = () => {
    const inputs = inputsRef.current;
    if (!inputs) return;
    const trig = inputs.find((i) => i.fire && typeof i.fire === "function" && i.value === undefined);
    if (trig && trig.fire) {
      trig.fire();
      return;
    }
    const bool = inputs.find((i) => typeof i.value === "boolean");
    if (bool) bool.value = !bool.value;
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onClick={poke}
      style={style}
    />
  );
}
