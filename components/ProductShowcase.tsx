"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Box,
  Brain,
  Check,
  Code2,
  FileCode2,
  Layers,
  Lock,
  Mail,
  Radio,
  Server,
  Unplug,
  Shield,
  TextCursor,
  WifiOff,
} from "lucide-react";

const view = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
} as const;

const trans = (delay: number) => ({
  ...view,
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/**
 * Black Box — 다크 메탈릭 추상 하드웨어 (실물 사진·브랜드 기기 이미지 미사용)
 */
function OnPremBlackBox() {
  return (
    <div
      className="relative flex aspect-[4/3] w-full max-w-[9rem] flex-col items-center justify-center sm:max-w-[10.5rem]"
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-b from-zinc-600/20 via-zinc-900/80 to-zinc-950"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      />
      <div className="absolute inset-x-2 top-2 h-1 rounded-sm bg-gradient-to-r from-zinc-500/40 via-zinc-400/20 to-zinc-600/30" />
      <div className="relative z-[1] flex h-full w-[72%] flex-col justify-end gap-1.5 pb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-full rounded-sm bg-gradient-to-r from-charcoal-800 via-charcoal-700/90 to-charcoal-900/95"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4)",
            }}
          />
        ))}
        <div className="mt-1.5 h-0.5 w-1/3 rounded-full bg-electric-500/40" />
      </div>
      <div className="absolute bottom-1.5 right-1.5 flex gap-0.5">
        <span className="h-1 w-1 rounded-full bg-electric-400/60 shadow-[0_0_6px_#3d9eff]" />
        <span className="h-1 w-1 rounded-full bg-electric-500/30" />
      </div>
    </div>
  );
}

/** 추상 파이프라인 — n8n·제품 UI 없이 선·노드만 */
function AbstractPipelineDiagram() {
  return (
    <svg
      className="h-auto w-full text-electric-400/50"
      viewBox="0 0 480 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M 56 60 L 120 60 L 120 40 L 180 40 M 120 60 L 120 80 L 180 80 M 200 40 L 260 40 M 200 80 L 260 80 M 200 40 Q 230 60 200 80"
        className="stroke-electric-500/35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 280 60 L 340 60 L 340 38 L 400 38 M 340 60 L 400 60 M 340 60 L 340 82 L 400 82"
        className="stroke-electric-500/35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="40" cy="60" r="14" className="fill-charcoal-800 stroke-electric-500/40" strokeWidth="1" />
      <rect x="188" y="32" width="80" height="56" rx="4" className="fill-charcoal-900/80 stroke-electric-500/25" strokeWidth="1" />
      <circle cx="260" cy="40" r="8" className="fill-charcoal-800 stroke-electric-500/30" strokeWidth="1" />
      <circle cx="260" cy="80" r="8" className="fill-charcoal-800 stroke-electric-500/30" strokeWidth="1" />
      <text x="260" y="44" className="fill-charcoal-500 text-[8px] font-mono" textAnchor="middle">
        in
      </text>
    </svg>
  );
}

/** 수석 지능 — 로직 층위 도식 (추상 그래프) */
function SeniorLogicGraphic() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.06] bg-charcoal-950/60 p-6">
      <div className="mb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-charcoal-500">
        <span>architectural kernel</span>
        <span className="text-electric-500/70">v25.0</span>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between sm:gap-2">
        {[
          { label: "요구 정규화", sub: "Parse · slot", icon: TextCursor },
          { label: "도메인 룰", sub: "SAP 25Y", icon: Layers },
          { label: "추론·생성", sub: "SRS → SDS", icon: Brain },
          { label: "산출물", sub: "Code", icon: FileCode2 },
        ].map((step, i) => (
          <div
            key={step.label}
            className="relative flex flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/[0.05] bg-charcoal-900/50 px-2 py-3 sm:min-h-[5.5rem]"
          >
            <step.icon className="h-4 w-4 text-electric-400/60" strokeWidth={1.5} />
            <span className="text-center text-xs font-semibold text-charcoal-200">{step.label}</span>
            <span className="text-center text-[10px] font-medium text-charcoal-500">{step.sub}</span>
            {i < 3 && (
              <div className="absolute -right-1 top-1/2 z-[1] hidden h-0.5 w-2 -translate-y-1/2 translate-x-1/2 bg-electric-500/25 sm:block" />
            )}
            {i < 3 && (
              <div className="h-2 w-px bg-electric-500/20 sm:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AirGapStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-4">
      <div className="inline-flex items-center gap-1.5 rounded-md border border-electric-500/20 bg-electric-500/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-electric-300/90">
        <WifiOff className="h-3 w-3" strokeWidth={2} />
        No public internet path
      </div>
      <div className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-charcoal-900/50 px-2.5 py-1 font-mono text-[10px] font-medium text-charcoal-400">
        <Radio className="h-3 w-3 text-charcoal-500" strokeWidth={1.5} />
        Egress: disabled
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="scroll-mt-20 border-t border-white/[0.06] bg-charcoal-950/80 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.header className="mb-16 text-center" {...trans(0)}>
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85">
            Product Showcase
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-4xl">
            독립형 엔진. 폐쇄망 전제. 추상적 워크플로우만.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-charcoal-400/95">
            실제 하드웨어 사진·타사 제품 UI는 쓰지 않습니다. 다크 메탈릭 &amp; 선형 다이어그램으로만
            LocalBrain의 역할을 설명합니다.
          </p>
        </motion.header>

        <div className="space-y-12 lg:space-y-16">
          {/* Email-to-Code Factory */}
          <motion.article
            className="overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal-900/25 p-1 shadow-2xl shadow-black/30"
            {...trans(0.05)}
          >
            <div className="rounded-[0.9rem] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-electric-400/80">
                    Email-to-Code Factory
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-charcoal-50 sm:text-2xl">
                    메일 한 통 → SRS + 코드, 동일 파이프라인
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-charcoal-400/95">
                    UI 자동화 스크린샷이 아닌, 데이터가 흐르는 경로만 표시합니다. 중앙 박스는
                    <strong className="font-semibold text-charcoal-200"> 온프레미스 Black Box 엔진</strong>
                    (추상 표현)를 뜻합니다.
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-3 lg:justify-end">
                  <div className="hidden items-center gap-2 rounded-lg border border-white/[0.06] bg-charcoal-950/50 px-3 py-2 font-mono text-[10px] text-charcoal-500 sm:flex">
                    <span className="text-electric-400/60">air-gap ready</span>
                    <span className="h-1 w-1 rounded-full bg-charcoal-600" />
                    <span>workflow abstract</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-[1fr,1.2fr,1fr] md:items-center">
                <div className="flex items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-charcoal-950/50 py-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-electric-500/25 bg-electric-500/10 text-electric-300">
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-charcoal-200">Inbound mail</p>
                    <p className="text-[10px] font-mono text-charcoal-500">#LocalBrain</p>
                  </div>
                </div>
                <div className="min-h-[3.5rem] min-w-0">
                  <AbstractPipelineDiagram />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.07] bg-charcoal-900/50 py-4">
                    <FileCode2 className="h-4 w-4 text-electric-400/70" />
                    <span className="text-xs font-semibold text-charcoal-200">SRS</span>
                    <span className="text-[10px] text-charcoal-500">Spec</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.07] bg-charcoal-900/50 py-4">
                    <Code2 className="h-4 w-4 text-electric-400/70" />
                    <span className="text-xs font-semibold text-charcoal-200">Code</span>
                    <span className="text-[10px] text-charcoal-500">Export</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/[0.05] pt-5 sm:justify-start">
                <div className="flex items-center gap-2 text-[10px] font-mono text-charcoal-500">
                  <Server className="h-3.5 w-3.5" />
                  rack-style mesh (illustration)
                </div>
                <OnPremBlackBox />
              </div>
            </div>
          </motion.article>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Enterprise Security */}
            <motion.article
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-charcoal-900/20 p-6 sm:p-8"
              {...trans(0.1)}
            >
              <div className="mb-5 flex items-center gap-2">
                <Shield className="h-4 w-4 text-electric-400/80" strokeWidth={1.75} />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-electric-400/85">
                  Enterprise Security
                </p>
              </div>
              <h3 className="text-lg font-semibold text-charcoal-50 sm:text-xl">
                Data Leakage Zero를 기본으로
              </h3>
              <p className="mt-2 text-sm font-medium text-charcoal-400/95">
                인터넷면과의 경로를 끊은 폐쇄망·에어갭에 맞는 시각 언어로 정리합니다.
              </p>
              <div className="mt-6 rounded-xl border border-white/[0.08] bg-charcoal-950/70 p-4 font-mono">
                <div className="mb-3 flex items-end justify-between border-b border-white/[0.06] pb-2">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal-500">Leakage index</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold tabular-nums text-electric-300">0</span>
                    <span className="text-[10px] text-charcoal-500">events</span>
                  </div>
                </div>
                <div className="space-y-2.5 text-[11px]">
                  {[
                    { k: "Egress policy", v: "deny", ok: true },
                    { k: "External copy", v: "blocked", ok: true },
                    { k: "PII in transit", v: "0 bytes", ok: true },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between border-b border-white/[0.04] border-dashed py-1.5 last:border-0"
                    >
                      <span className="text-charcoal-500">{row.k}</span>
                      <span className="flex items-center gap-1.5 text-charcoal-300">
                        {row.v}
                        <Check className="h-3 w-3 text-electric-500/80" />
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-[9px] text-charcoal-600">
                  <span className="inline-flex items-center gap-1">
                    <Activity className="h-2.5 w-2.5" />
                    monitoring · internal only
                  </span>
                  <span>updated live</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-electric-500/20 bg-electric-500/5 text-electric-300/90">
                  <Lock className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-charcoal-900/80 text-charcoal-400">
                  <WifiOff className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <div
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-charcoal-900/80 text-charcoal-400"
                  aria-label="외부 링크 분리"
                >
                  <Unplug className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <p className="w-full pl-0 text-xs font-medium text-charcoal-500 sm:w-auto sm:pl-1">
                  방패·끊긴 Wi-Fi·로컬 망만 — 외부 스크린 없음
                </p>
              </div>
              <AirGapStrip />
            </motion.article>

            {/* Senior Intelligence */}
            <motion.article
              className="flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-charcoal-900/20 p-6 sm:p-8"
              {...trans(0.15)}
            >
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <Brain className="h-4 w-4 text-electric-400/80" strokeWidth={1.75} />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-electric-400/85">
                    Senior Intelligence
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-50 sm:text-xl">
                  25년 치 아키텍트 로직이 층을 이루고 내려갑니다
                </h3>
                <p className="mt-2 text-sm font-medium text-charcoal-400/95">
                  개인 식별 가능한 훈련 데이터·실제 사례 캡처는 쓰지 않고, 뷰는 순수
                  <strong className="font-semibold text-charcoal-200"> 다이어그램</strong>만
                  사용합니다.
                </p>
              </div>
              <div className="mt-5">
                <SeniorLogicGraphic />
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-charcoal-500">
                <Box className="h-3 w-3" />
                <span>노드 = 논리 단계 (추상), 실제 n8n·자동화 UI 비재현</span>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
