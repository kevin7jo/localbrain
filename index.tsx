"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { DemoSection, FeaturesSection, HowItWorksSection } from "@/components/Sections";

const BETA_MAIL =
  "mailto:help@localbrain.co.kr?subject=" +
  encodeURIComponent("[요청] #LocalBrain 실행");

const headerFade = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const heroStagger = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
} as const;

const heroItem = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
} as const;

/**
 * LocalBrain 랜딩 — App Router 진입은 app/page.tsx에서 re-export
 */
export default function LocalBrainHome() {
  return (
    <div className="relative min-h-dvh">
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.04] bg-charcoal-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <motion.div
            className="flex items-baseline gap-2"
            {...headerFade}
          >
            <span className="text-sm font-bold tracking-tight text-charcoal-50">
              LocalBrain
            </span>
            <span className="font-mono text-[10px] font-medium text-charcoal-500">
              Software Factory
            </span>
          </motion.div>
          <nav className="flex items-center gap-6 text-sm font-medium text-charcoal-400">
            <Link
              href="#how-it-works"
              className="transition hover:text-electric-400"
            >
              How it Works
            </Link>
            <Link
              href="#features"
              className="transition hover:text-electric-400"
            >
              Features
            </Link>
            <Link href="#demo" className="transition hover:text-electric-400">
              Demo
            </Link>
            <a
              href={BETA_MAIL}
              className="inline-flex items-center gap-1 text-electric-400 transition hover:text-electric-300"
            >
              Beta
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-20">
        <NetworkCanvas />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.p
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85"
            {...headerFade}
          >
            Deep Tech &amp; Trust
          </motion.p>
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={heroStagger}
          >
            <motion.h1
              className="text-balance text-[1.65rem] font-semibold leading-[1.25] tracking-[-0.02em] text-charcoal-50 sm:text-3xl md:text-4xl md:leading-[1.2] lg:text-[2.35rem] lg:leading-[1.22]"
              variants={heroItem}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="mb-2 block sm:mb-2.5">
                구체적인 소프트웨어 요구사항을 메일로 보내세요.
              </span>
              <span className="block text-balance">
                <span className="bg-gradient-to-r from-charcoal-100 via-electric-200 to-electric-300 bg-clip-text font-bold text-transparent">
                  수석 아키텍트의 코드와 설계
                </span>
                <span className="font-semibold text-charcoal-100">
                  가 답장으로 돌아옵니다.
                </span>
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-balance text-base font-medium leading-relaxed text-charcoal-300 sm:text-lg"
              variants={heroItem}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              회원가입 없이 help@localbrain.co.kr로 요구사항 정의를 보내십시오. 25년
              차 SAP 아키텍트의 지능을 이식한 LocalBrain이 몇 분 이내에 분석(SRS),
              설계(SDS)와 수석 컨설턴트 수준의 최적화된 소스코드 응답을 쏴드립니다.
            </motion.p>
            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={heroItem}
            >
              <a
                href={BETA_MAIL}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric-500 px-8 py-3.5 text-sm font-semibold text-charcoal-950 shadow-lg shadow-electric-500/25 transition hover:bg-electric-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
              >
                <Mail className="h-4 w-4" strokeWidth={2.25} />
                지금 바로 첫 번째 코드 요청하기
              </a>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-charcoal-400 transition hover:text-charcoal-200"
              >
                작동 방식
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-electric-500/50 to-transparent"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 32 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden
        />
      </section>

      <HowItWorksSection />
      <FeaturesSection />
      <DemoSection />

      <footer className="border-t border-white/[0.06] py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-mono text-xs text-charcoal-500">
            © {new Date().getFullYear()} LocalBrain. All rights reserved.
          </p>
            <a
              href={BETA_MAIL}
              className="text-sm font-medium text-electric-400/90 hover:text-electric-300"
            >
            help@localbrain.co.kr
            </a>
        </div>
      </footer>
    </div>
  );
}
