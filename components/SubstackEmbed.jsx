"use client";

import { useRef, useEffect, useState } from "react";

const IFRAME_WIDTH = 480;
const IFRAME_HEIGHT = 320;

export function SubstackEmbed() {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      if (wrapperRef.current) {
        const w = wrapperRef.current.offsetWidth;
        setScale(w < IFRAME_WIDTH ? w / IFRAME_WIDTH : 1);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        maxWidth: IFRAME_WIDTH,
        height: IFRAME_HEIGHT * scale,
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://magicmindsapp.substack.com/embed"
        width={IFRAME_WIDTH}
        height={IFRAME_HEIGHT}
        style={{
          border: "1px solid #EEE",
          background: "white",
          display: "block",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
        frameBorder={0}
        scrolling="no"
      />
    </div>
  );
}
