"use client";

import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { parseRequestResponse, stripImagePlaceholders } from "@/lib/parseCaseMarkdown";

const view = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
} as const;

const CASES = [
  {
    id: "1",
    file: "case1",
    name: "Case 1",
    title: "SAP S/4HANA FI 전표 일괄 역분개 (ABAP OO)",
  },
  {
    id: "2",
    file: "case2",
    name: "Case 2",
    title: "초당 1만 건 처리 분산 락 아키텍처 (Java/Spring/Redis)",
  },
  {
    id: "3",
    file: "case3",
    name: "Case 3",
    title: "AMDP 기반 초고속 매출 집계 로직 (HANA Native SQL)",
  },
] as const;

function mapPrismLanguage(lang: string): string {
  const l = lang.toLowerCase();
  if (l === "abap" || l === "hdb") return "text";
  if (l === "java" || l === "javascript" || l === "typescript" || l === "tsx" || l === "json" || l === "sql")
    return l;
  return "text";
}

function buildMarkdownComponents(): Components {
  return {
    pre: ({ children }) => <div className="my-2">{children}</div>,
    code: ({ className, children, ...rest }) => {
      const str = String(children);
      const match = /language-(\w+)/.exec(className ?? "");
      if (!match && !str.includes("\n")) {
        return (
          <code
            className="rounded bg-charcoal-800/90 px-1.5 py-0.5 font-mono text-[0.8125rem] text-electric-200/95"
            {...rest}
          >
            {children}
          </code>
        );
      }
      const raw = str.replace(/\n$/, "");
      const lang = match ? mapPrismLanguage(match[1]!) : "text";
      return (
        <SyntaxHighlighter
          language={lang}
          style={vscDarkPlus}
          PreTag="div"
          className="!m-0 !rounded-lg !border !border-white/[0.08] !p-3 text-[0.75rem] leading-relaxed"
          customStyle={{
            margin: 0,
            background: "rgba(10, 12, 14, 0.75)",
            fontSize: "0.75rem",
          }}
        >
          {raw}
        </SyntaxHighlighter>
      );
    },
  };
}

const mdComponents = buildMarkdownComponents();

type CaseData = { request: string; response: string; raw: string };

export function CaseShowcase() {
  const [active, setActive] = useState(0);
  const [cases, setCases] = useState<CaseData[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res = await Promise.all(
          CASES.map((c) => fetch(`/cases/${c.file}.md`))
        );
        const texts = await Promise.all(res.map((r) => r.text()));
        if (cancel) return;
        if (res.some((r) => !r.ok)) {
          setLoadError("사례 파일을 불러오지 못했습니다.");
          return;
        }
        const parsed = texts.map((raw) => {
          const { request, response } = parseRequestResponse(raw);
          return {
            request,
            response: stripImagePlaceholders(response),
            raw: stripImagePlaceholders(response),
          };
        });
        setCases(parsed);
      } catch {
        if (!cancel) setLoadError("네트워크 오류");
      }
    })();
    return () => {
      cancel = true;
    };
  }, []);

  const current = cases?.[active];
  const copyPayload = current?.raw ?? "";

  const handleCopy = useCallback(async () => {
    if (!copyPayload) return;
    try {
      await navigator.clipboard.writeText(copyPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* no-op */
    }
  }, [copyPayload]);

  return (
    <section
      id="demo"
      className="relative scroll-mt-20 border-t border-white/[0.06] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.header className="mb-10" {...view}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-electric-400/85">
            실전 기술 쇼케이스
          </p>
        </motion.header>

        <div className="mb-8 flex flex-wrap gap-2">
          {CASES.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(i)}
              className={
                "rounded-lg border px-4 py-2.5 text-sm font-semibold transition " +
                (i === active
                  ? "border-electric-500/50 bg-electric-500/10 text-electric-200 shadow-[0_0_20px_-6px_rgba(10,132,255,0.45)]"
                  : "border-white/[0.1] bg-charcoal-900/30 text-charcoal-400 hover:border-electric-500/25 hover:text-charcoal-200")
              }
            >
              {c.name}
            </button>
          ))}
        </div>

        {CASES[active] && (
          <p className="mb-8 text-sm font-medium text-charcoal-400/90">
            {CASES[active]!.title}
          </p>
        )}

        {!cases && !loadError && (
          <div className="h-[32rem] animate-pulse rounded-2xl border border-white/[0.06] bg-charcoal-900/20" />
        )}
        {loadError && (
          <p className="text-sm text-red-400/80">{loadError}</p>
        )}

        {cases && current && (
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <motion.div
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal-900/30 shadow-xl shadow-black/20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="border-b border-white/[0.06] bg-charcoal-900/50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-electric-500/20 bg-electric-500/5 text-electric-300">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-charcoal-500">Request</p>
                    <p className="text-sm font-semibold text-charcoal-100">
                      help@localbrain.co.kr
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-1 text-[10px] font-mono font-medium uppercase tracking-widest text-charcoal-500">
                  subject / 본문
                </p>
                <p className="min-h-[8rem] whitespace-pre-wrap text-sm font-medium leading-relaxed text-charcoal-200/90">
                  {current.request}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f12] shadow-2xl shadow-black/30"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className="flex h-10 shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#1b1d21] px-3 pl-2">
                <div className="flex items-center gap-2">
                  <div className="ml-1 flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="pl-1 font-mono text-[10px] text-charcoal-500 sm:text-xs">
                    response – case{active + 1}.md
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-charcoal-800/50 px-2.5 py-1 font-mono text-[10px] font-medium text-charcoal-300 transition hover:border-electric-500/35 hover:text-electric-200 sm:px-3 sm:text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-electric-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy code
                    </>
                  )}
                </button>
              </div>
              <div
                className="showcase-md showcase-scroll max-h-[550px] overflow-y-auto border-t border-white/[0.04] px-3 py-4 sm:px-4"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.12) transparent",
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={mdComponents}
                >
                  {current.response}
                </ReactMarkdown>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
