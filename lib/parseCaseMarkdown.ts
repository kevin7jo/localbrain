/** ## Request / ## Response 파싱 (실사례 .md) */
export function parseRequestResponse(md: string): {
  request: string;
  response: string;
} {
  const normalized = md.replace(/\r\n/g, "\n");
  const reqSplit = normalized.split(/\n## Request\s*\n/);
  if (reqSplit.length < 2) {
    return { request: "", response: "" };
  }
  const afterRequest = reqSplit[1]!;
  const resSplit = afterRequest.split(/\n## Response\s*\n/);
  const request = resSplit[0]?.trim() ?? "";
  const response = resSplit[1]?.trim() ?? "";
  return { request, response };
}

/** 단독 [Image of …] 전용 placeholder 줄 제거 */
export function stripImagePlaceholders(s: string): string {
  return s
    .split("\n")
    .filter((line) => !/^\[Image of[^\]]+\]\s*$/.test(line.trim()))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
