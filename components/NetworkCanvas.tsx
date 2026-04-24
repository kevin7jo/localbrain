"use client";

import { motion } from "framer-motion";

const CONNECTIONS: ReadonlyArray<readonly [number, number, number, number]> = [
  [12, 22, 28, 14],
  [28, 14, 44, 28],
  [44, 28, 58, 18],
  [58, 18, 72, 32],
  [20, 48, 38, 58],
  [38, 58, 55, 68],
  [55, 68, 78, 52],
  [8, 65, 20, 48],
  [32, 78, 64, 82],
  [86, 12, 90, 72],
  [12, 22, 8, 65],
  [44, 28, 20, 48],
  [72, 32, 78, 52],
  [64, 82, 90, 72],
  [28, 14, 55, 68],
  [58, 18, 38, 58],
];

const NODES: ReadonlyArray<{
  readonly x: number;
  readonly y: number;
  readonly r: number;
  readonly delay: number;
}> = [
  { x: 12, y: 22, r: 2.2, delay: 0 },
  { x: 28, y: 14, r: 1.6, delay: 0.3 },
  { x: 44, y: 28, r: 2, delay: 0.1 },
  { x: 58, y: 18, r: 1.4, delay: 0.5 },
  { x: 72, y: 32, r: 2.4, delay: 0.2 },
  { x: 86, y: 12, r: 1.8, delay: 0.4 },
  { x: 20, y: 48, r: 1.5, delay: 0.35 },
  { x: 38, y: 58, r: 2.1, delay: 0.15 },
  { x: 55, y: 68, r: 1.7, delay: 0.45 },
  { x: 78, y: 52, r: 1.3, delay: 0.25 },
  { x: 90, y: 72, r: 1.9, delay: 0.55 },
  { x: 8, y: 65, r: 1.4, delay: 0.05 },
  { x: 32, y: 78, r: 1.2, delay: 0.6 },
  { x: 64, y: 82, r: 1.6, delay: 0.2 },
];

/**
 * 72B급 인지 메시 — Charcoal·Electric Blue
 */
export function NetworkCanvas() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35] bg-grid-fade [background-size:100%_100%,64px_64px,64px_64px] [background-position:0_0,0_0,8px_8px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/20 via-transparent to-charcoal-950" />
      <div className="absolute -left-1/4 top-0 h-[120%] w-[60%] rounded-full bg-electric-600/10 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[80%] w-[50%] rounded-full bg-electric-500/5 blur-[100px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a84ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#3d9eff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0a84ff" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.25" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {CONNECTIONS.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth={0.12}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.75, 0.55] }}
            transition={{ duration: 2, delay: i * 0.07, ease: "easeOut" }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r * 0.1}
            fill="#0a84ff"
            fillOpacity={0.35}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 + n.delay }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={`c-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.r * 0.05}
            fill="#7ac0ff"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 3.5,
              delay: n.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-[min(50vw,22rem)] w-[min(50vw,22rem)] rounded-full border border-electric-500/15"
          style={{ boxShadow: "0 0 80px rgba(10,132,255,0.12)" }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.p
          className="absolute font-mono text-[9px] uppercase tracking-[0.35em] text-electric-400/50 sm:text-[10px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          72B-class cognitive mesh
        </motion.p>
      </div>
    </div>
  );
}
