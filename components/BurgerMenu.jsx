"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { nav, navItems } from "@/lib/strings";
import { SubstackEmbed } from "./SubstackEmbed";

// ── Social links ──────────────────────────────────────────────────────────────
const socials = [
  {
    href: "https://www.instagram.com/magicminds_app/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.6 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.6 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.6-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/magicminds_app",
    label: "X / Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/magicmindsapp",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61559230104451",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@magicminds_app",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    href: "https://chat.whatsapp.com/ERmAnF8j5M5Ijay9KN6gux",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

// ── Scramble font pool ─────────────────────────────────────────────────────────
const SCRAMBLE_FONTS = [
  "'Courier Prime', monospace",
  "'VT323', monospace",
  "'Boogaloo', cursive",
  "'Pacifico', cursive",
];

function pickRandom(arr, exclude) {
  const pool = exclude !== undefined ? arr.filter((x) => x !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Animated grain ─────────────────────────────────────────────────────────────
function AnimatedGrain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const count = Math.floor((w * h) / 800);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = Math.random() * 0.8 + 0.2;
        const alpha = Math.random() * 0.45 + 0.08;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27,37,89,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
        mixBlendMode: "multiply",
      }}
    />
  );
}

// ── ScrambleLink ───────────────────────────────────────────────────────────────
function ScrambleLink({ href, label, onClick }) {
  const [fontFamily, setFontFamily] = useState(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  function startScramble() {
    let current = null;
    intervalRef.current = setInterval(() => {
      current = pickRandom(SCRAMBLE_FONTS, current ?? undefined);
      setFontFamily(current);
    }, 70);
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setFontFamily(pickRandom(SCRAMBLE_FONTS));
    }, 400);
  }

  function stopScramble() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFontFamily(null);
  }

  useEffect(() => () => stopScramble(), []);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      style={{
        fontFamily: fontFamily ?? "'Grandstander', cursive",
        display: "block",
        color: "#1B2559",
        fontWeight: 800,
        lineHeight: 1,
        textDecoration: "none",
        transition: "opacity 0.15s",
      }}
      className="hover:opacity-60 text-[13vw] sm:text-[10vw] lg:text-[8vw]"
    >
      {label}
    </Link>
  );
}

// ── BurgerMenu (default export) ────────────────────────────────────────────────
export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = nav[lang];

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Burger / Close button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-6 bg-ink origin-center"
          style={{ height: 2 }}
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-6 bg-ink origin-center"
          style={{ height: 2 }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-6 bg-ink origin-center"
          style={{ height: 2 }}
        />
      </button>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mm-overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col sm:flex-row overflow-hidden"
            style={{ backgroundColor: "#FBF6E9" }}
          >
            {/* Animated grain overlay */}
            <AnimatedGrain />

            {/* ── Left color-cycling panel (desktop only) ── */}
            <motion.div
              className="hidden sm:flex sm:w-2/5 flex-col justify-between p-10 relative z-20"
              animate={{
                backgroundColor: [
                  "#F7C8DD", // pink
                  "#C9B6F2", // violet
                  "#B8E6C8", // vert
                  "#7EB8F7", // bleu
                  "#6CDDD0", // teal
                  "#FF9E7A", // orange
                  "#F7C8DD", // retour
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <img
                src="/uploads/logo.png"
                alt="Magic Minds"
                style={{ width: 160, height: "auto" }}
              />
            </motion.div>

            {/* ── Right panel ── */}
            <div
              className="flex-1 flex flex-col justify-between relative z-20"
              style={{ padding: "80px 32px 32px" }}
            >
              {/* Nav links */}
              <nav className="flex flex-col gap-0 items-end">
                {navItems.map(({ key, href }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <ScrambleLink href={href} label={t[key]} onClick={close} />
                  </motion.div>
                ))}
              </nav>

              <div style={{ width: "100%" }}>
                {/* Separator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  style={{
                    height: 1,
                    background: "rgba(27,37,89,.15)",
                    marginBottom: 24,
                    transformOrigin: "left",
                  }}
                />

                {/* Bottom bar: newsletter + socials */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"
                >
                  {/* Newsletter */}
                  <div className="flex flex-col gap-2">
                    <p
                      style={{
                        color: "rgba(27,37,89,.4)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontWeight: 700,
                      }}
                    >
                      Newsletter
                    </p>
                    <SubstackEmbed />
                  </div>

                  {/* Social icons */}
                  <div className="flex gap-4">
                    {socials.map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{ color: "rgba(27,37,89,.5)", transition: "color .15s" }}
                        className="hover:text-ink"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
