"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contact", label: "Контакт" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          <span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-1.5 text-[10px] font-bold tracking-tighter text-emerald-400">
            NXT
          </span>
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Обсудить проект
          </a>
        </nav>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Меню"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-[#0A0A0A] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm text-zinc-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-black"
              onClick={() => setOpen(false)}
            >
              Обсудить проект
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
