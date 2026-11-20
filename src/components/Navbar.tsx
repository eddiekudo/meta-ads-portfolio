import React from "react";
import { Mail, Sparkles, BarChart2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onScrollToAnalytics: () => void;
  onScrollToCreative: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToAnalytics,
  onScrollToCreative,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-notion-dark-bg/95 backdrop-blur-md border-b border-notion-hairline dark:border-notion-dark-hairline transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-notion-navy dark:bg-notion-dark-surface border border-transparent dark:border-notion-dark-hairline flex items-center justify-center font-bold text-white text-sm shadow-sm overflow-hidden shrink-0">
            <img
              src="/avatar.jpg"
              alt="Aditya Rawat"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-notion-ink dark:text-notion-dark-text text-sm tracking-tight">
                Aditya Rawat
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-notion-mint dark:bg-emerald-950/60 text-notion-green dark:text-emerald-400 border border-notion-hairline dark:border-emerald-800/40 hidden sm:inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-notion-green dark:bg-emerald-400" />
                Available for hire
              </span>
            </div>
            <div className="text-[11px] text-notion-steel dark:text-notion-dark-muted">
              Meta Ads & Performance Marketing
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onScrollToCreative}
            className="px-3 py-1.5 rounded-md text-xs font-medium text-notion-slate dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white hover:bg-notion-surface dark:hover:bg-notion-dark-surface transition-colors hidden md:flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-notion-primary" />
            <span>Ad Creatives</span>
          </button>

          <button
            onClick={onScrollToAnalytics}
            className="px-3 py-1.5 rounded-md text-xs font-medium text-notion-slate dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white hover:bg-notion-surface dark:hover:bg-notion-dark-surface transition-colors hidden md:flex items-center gap-1.5"
          >
            <BarChart2 className="w-3.5 h-3.5 text-notion-green" />
            <span>Campaign Analytics</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text hover:bg-notion-surface dark:hover:bg-notion-dark-surface transition-colors flex items-center justify-center"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-notion-charcoal" />
            ) : (
              <Sun className="w-4 h-4 text-amber-300" />
            )}
          </button>

          <a
            href="mailto:eddiexkudo@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-notion-primary hover:bg-notion-primary-pressed text-white font-medium text-xs shadow-sm transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};
