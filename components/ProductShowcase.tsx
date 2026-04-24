"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Mail,
  Send,
  Server,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const view = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
} as const;

const trans = (delay: number) => ({
  ...view,
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const cardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal-900/25 p-6 shadow-lg shadow-black/20 transition-all duration-300 sm:p-8 " +
  "hover:border-electric-500/40 hover:bg-charcoal-900/40 hover:shadow-[0_0_56px_-14px_rgba(10,132,255,0.28)]";

function ImageOrPlaceholder({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-charcoal-950/70">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition duration-300 group-hover:opacity-95"
          sizes="(max-width: 1024px) 100vw, 33vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-[9.5rem] w-full items-center justify-center bg-gradient-to-b from-charcoal-900/60 to-charcoal-950/90 p-4">
          {children}
        </div>
      )}
    </div>
  );
}

function PlaceholderEmailToCode() {
  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-electric-500/30 bg-electric-500/10 text-electric-300 shadow-[0_0_20px_-4px_rgba(10,132,255,0.4)]">
        <Mail className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <div className="hidden items-center text-electric-500/50 sm:flex" aria-hidden>
        <Send className="h-4 w-4 rotate-[-35deg]" />
      </div>
      <div className="flex min-h-[4.5rem] flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-white/[0.08] bg-charcoal-900/80 px-3 py-2">
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-charcoal-400">
          <Cpu className="h-3.5 w-3.5 text-electric-400/70" />
          아키텍트 분석
        </div>
        <div className="h-1 w-full max-w-[5rem] rounded-full bg-gradient-to-r from-electric-600/40 via-electric-400/60 to-electric-600/40" />
        <div className="h-0.5 w-3/4 rounded bg-charcoal-700" />
      </div>
      <div className="hidden items-center text-electric-500/50 sm:flex" aria-hidden>
        <Send className="h-4 w-4 rotate-[-35deg]" />
      </div>
      <div className="flex h-20 flex-1 flex-col justify-center gap-1 rounded-lg border border-white/[0.07] bg-charcoal-950/80 p-2 font-mono text-[9px] leading-tight text-electric-300/80">
        <span className="text-charcoal-500">// ABAP / Java</span>
        <span>REPORT z...</span>
        <span className="text-charcoal-500">...</span>
      </div>
    </div>
  );
}

function PlaceholderEnterprise() {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-electric-500/15 blur-xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-electric-500/35 bg-charcoal-900/90 text-electric-300 shadow-[0_0_32px_-6px_rgba(10,132,255,0.45)]">
          <Shield className="h-10 w-10" strokeWidth={1.25} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex gap-1">
          <Server className="h-8 w-8 text-charcoal-500" strokeWidth={1.2} />
          <Server className="h-8 w-8 text-charcoal-400" strokeWidth={1.2} />
          <Server className="h-8 w-8 text-electric-400/50" strokeWidth={1.2} />
        </div>
        <span className="text-center text-[10px] font-mono text-charcoal-500">온프레미스 랙</span>
      </div>
    </div>
  );
}

function PlaceholderSenior() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
      <div className="flex flex-col gap-1.5 rounded-lg border border-white/[0.06] bg-charcoal-900/80 p-3">
        <div className="h-1.5 w-12 rounded bg-charcoal-700" />
        <div className="h-1.5 w-20 rounded bg-electric-500/30" />
        <div className="h-1.5 w-16 rounded bg-charcoal-700" />
        <div className="mt-1 flex gap-1">
          <div className="h-6 w-8 rounded border border-white/10 bg-charcoal-950/80" />
          <div className="h-6 w-8 rounded border border-electric-500/20 bg-electric-500/5" />
          <div className="h-6 w-8 rounded border border-white/10 bg-charcoal-950/80" />
        </div>
      </div>
      <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-electric-500/25 bg-gradient-to-br from-charcoal-800/90 to-charcoal-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="absolute inset-2 rounded-lg border border-electric-400/20" />
        <Cpu className="relative z-[1] h-10 w-10 text-electric-400" strokeWidth={1.1} />
        <span className="absolute bottom-2 text-[8px] font-mono font-semibold text-electric-500/60">엔진</span>
      </div>
      <div className="hidden flex-col items-end gap-1 sm:flex">
        <Brain className="h-6 w-6 text-electric-400/40" strokeWidth={1.2} />
        <span className="text-[9px] font-mono text-charcoal-500">25년 커널</span>
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
        <motion.header className="mb-12 text-center sm:mb-14" {...trans(0)}>
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85">
            Product Showcase
          </p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <motion.article className={cardClass} {...trans(0.05)}>
            <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-electric-400/75">
              Email-to-Code Factory
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-xl">
              요구사항에서 코드까지, 단 한 통의 메일로.
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal-400/95">
              비정형화된 이메일 요구사항을 AI 수석 아키텍트가 분석하여, 정밀한 소프트웨어 설계서(SRS)와
              최적화된 ABAP/Java 소스코드로 변환하여 즉시 회신합니다.
            </p>
            <ImageOrPlaceholder src="/images/showcase1.png" alt="Email에서 코드까지 흐름">
              <PlaceholderEmailToCode />
            </ImageOrPlaceholder>
          </motion.article>

          <motion.article className={cardClass} {...trans(0.1)}>
            <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-electric-400/75">
              Enterprise Security
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-xl">
              데이터 유출 Zero, 폐쇄망 독립 구동.
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal-400/95">
              로컬브레인은 클라우드에 의존하지 않습니다. 고객사 사내망 내부(On-Premise)에 물리적으로
              설치되어, 기업의 핵심 자산인 소스코드가 단 1바이트도 외부로 유출되지 않음을 보증합니다.
            </p>
            <ImageOrPlaceholder src="/images/showcase2.png" alt="에어갭·온프레미스 보안">
              <PlaceholderEnterprise />
            </ImageOrPlaceholder>
          </motion.article>

          <motion.article className={cardClass} {...trans(0.15)}>
            <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-electric-400/75">
              Senior Intelligence
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal-50 sm:text-xl">
              25년 차 아키텍트의 지능을 이식하다.
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal-400/95">
              단순한 생성형 AI가 아닙니다. 25년간 수많은 엔터프라이즈 프로젝트를 성공시킨 수석
              아키텍트의 설계 철학과 로직을 학습한 전용 엔진이 시니어 급의 코드 무결성을 보장합니다.
            </p>
            <ImageOrPlaceholder src="/images/showcase3.png" alt="아키텍처와 지능형 엔진">
              <PlaceholderSenior />
            </ImageOrPlaceholder>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
