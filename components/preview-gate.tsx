"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import NetworkGridBg from "@/components/network-grid-bg";
import { siteSettings } from "@/lib/settings";
import { ArrowUpRight, Lock } from "lucide-react";

const STORAGE_KEY = "greenvironment_preview_unlocked";

type PreviewGateProps = {
  children: React.ReactNode;
};

const PreviewGate = ({ children }: PreviewGateProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!siteSettings.previewMode) {
      setUnlocked(true);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.trim() === siteSettings.previewPassword) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError("");
      return;
    }

    setError("Incorrect password. Please try again.");
  };

  if (!siteSettings.previewMode || unlocked) {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-white">
      <NetworkGridBg className="opacity-70" tint="rgba(15,159,149,0.45)" />
      <div className="relative mx-auto flex min-h-screen max-w-(--breakpoint-xl) flex-col items-center justify-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/40 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-100">
          Preview Mode
        </div>

        <h1 className="mt-6 max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          We are polishing the experience.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
          Greenvironment is in scheduled maintenance. Enter the preview password to explore the latest build.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-md space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
            <Lock className="h-3.5 w-3.5" />
            Authorized access
          </div>
          <label className="grid gap-2 text-left text-sm font-medium text-white/80">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter preview password"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-200/60"
            />
          </label>
          {error && <p className="text-sm text-rose-200">{error}</p>}
          <Button type="submit" size="lg" className="w-full rounded-full bg-white text-slate-900 hover:bg-slate-100">
            Enter preview <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <div className="text-xs text-white/60">
            Need help?{" "}
            <Link href="/contact" className="underline underline-offset-4">
              Contact us
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PreviewGate;
