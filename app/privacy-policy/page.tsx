import Footer from "@/components/footer";
import { promises as fs } from "fs";
import path from "path";

const parseContent = (text: string) => {
  const blocks: { type: "title" | "heading" | "paragraph"; text: string }[] = [];
  const lines = text.split(/\r?\n/);
  let buffer: string[] = [];

  const flush = () => {
    if (!buffer.length) return;
    const paragraph = buffer.join(" ").trim();
    buffer = [];
    if (!paragraph) return;
    blocks.push({ type: "paragraph", text: paragraph });
  };

  const headingSet = new Set([
    "Privacy Policy",
    "Information We Collect",
    "How We Use Information",
    "Data Security",
    "Children's Privacy",
    "Changes to This Privacy Policy",
    "Contact Us",
  ]);

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      return;
    }

    if (index === 0) {
      flush();
      blocks.push({ type: "title", text: trimmed });
      return;
    }

    if (trimmed.endsWith(":") || headingSet.has(trimmed)) {
      flush();
      blocks.push({ type: "heading", text: trimmed.replace(/:$/, "") });
      return;
    }

    buffer.push(trimmed);
  });

  flush();
  return blocks;
};

export default async function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "content", "privacy-policy.md");
  const raw = await fs.readFile(filePath, "utf8");
  const blocks = parseContent(raw);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/60 to-white flex flex-col">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 pt-28 pb-16 lg:pt-32 lg:pb-20 w-full">
        <div className="space-y-6 text-slate-800">
          {blocks.map((block, index) => {
            if (block.type === "title") {
              return (
                <h1 key={`title-${index}`} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  {block.text}
                </h1>
              );
            }
            if (block.type === "heading") {
              return (
                <h2 key={`heading-${index}`} className="text-xl font-semibold tracking-tight text-slate-900">
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={`p-${index}`} className="text-slate-700">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
