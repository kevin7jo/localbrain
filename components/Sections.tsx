"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GitBranch,
  Inbox,
  Lock,
  Pencil,
  Workflow,
} from "lucide-react";
import { CaseShowcase } from "./CaseShowcase";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const FEATURES = [
  {
    title: "25년의 통찰",
    body: "SAP 전문가의 비즈니스 로직을 완벽히 이해하는 분석력.",
    icon: Brain,
  },
  {
    title: "온프레미스 보안",
    body: "당신의 LocalBrain 안에서만 작동하는 철저한 데이터 보안.",
    icon: Lock,
  },
  {
    title: "폭포수 자동화",
    body: "BA(분석)부터 SA(설계), Dev(개발)까지 이어지는 통합 파이프라인.",
    icon: GitBranch,
  },
] as const;

const HOW_STEPS: ReadonlyArray<{
  title: string;
  body: string;
  icon: typeof Pencil;
}> = [
  {
    title: "구체적인 요구사항 작성 (제목에 #LocalBrain 포함)",
    body: "이메일 본문에 제품 맥락을 적고, 귀사의 기존 산출물(테이블 정의서, 인터페이스 설계서 등)을 그대로 첨부하십시오. 계정·포털은 필요 없습니다.",
    icon: Pencil,
  },
  {
    title: "팩토리 엔진: 몇 분 이내, 수석 컨설턴트 수준 코드",
    body: "요구를 정규화한 뒤 몇 분 이내에 SRS·SDS(설계)와 수석 컨설턴트 품질의 최적화된 소스 시안을 동일 흐름에서 도출합니다.",
    icon: Workflow,
  },
  {
    title: "수석급 응답을 메일로 수신",
    body: "답장에서 산출물을 받아 내부 리뷰·반복에 바로 투입합니다. 민감 데이터는 온프레미스에만 머뭅니다.",
    icon: Inbox,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-white/[0.06] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(10,132,255,0.12),transparent)] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div className="mb-16 text-center" {...fade}>
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85">
            How it Works
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-4xl">
            메일 한 통으로 켜지는 팩토리
          </h2>
        </motion.div>
        <ol className="grid list-none gap-6 sm:grid-cols-3">
          {HOW_STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal-900/30 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-colors hover:border-electric-500/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-bold tabular-nums text-electric-500/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-electric-500/25 bg-electric-500/5 text-electric-300">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight text-charcoal-50 sm:min-h-[3.5rem] sm:text-[1.05rem]">
                {s.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-charcoal-400/95">
                {s.body}
              </p>
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-electric-500/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-t border-white/[0.06] bg-charcoal-950/50 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-16 text-center"
          {...fade}
        >
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-4xl">
            엔지니어링에 녹인 컨설팅 DNA
          </h2>
        </motion.div>

        <ul className="grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-charcoal-900/30 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-colors hover:border-electric-500/25"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-electric-500/20 bg-electric-500/5 text-electric-400">
                <f.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-charcoal-50">
                {f.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-charcoal-400/95">
                {f.body}
              </p>
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-electric-500/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DemoSection() {
  return <CaseShowcase />;
}
