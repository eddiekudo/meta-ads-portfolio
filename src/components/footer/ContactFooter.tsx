import React from "react";
import {
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const ContactFooter: React.FC = () => {
  return (
    <footer className="w-full bg-notion-surface dark:bg-notion-dark-surface border-t border-notion-hairline dark:border-notion-dark-hairline pt-12 pb-10 mt-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-center">
        {/* Simple CTA */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-notion-ink dark:text-notion-dark-text tracking-tight">
            Let's talk Meta Ads & Growth
          </h3>
          <p className="text-xs sm:text-sm text-notion-slate dark:text-notion-dark-muted max-w-md mx-auto">
            Available for full-time roles & high-intent performance campaigns.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:eddiexkudo@gmail.com"
              className="px-4 py-2 rounded-md bg-notion-primary hover:bg-notion-primary-pressed text-white font-medium text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>eddiexkudo@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rawat-bb0640165/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white dark:bg-notion-dark-card hover:bg-notion-surface dark:hover:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text font-medium text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <span className="text-notion-primary dark:text-sky-400">
                <LinkedInIcon />
              </span>
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-notion-steel dark:text-notion-dark-muted" />
            </a>
            <a
              href="https://github.com/eddiekudo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white dark:bg-notion-dark-card hover:bg-notion-surface dark:hover:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text font-medium text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <span className="text-notion-ink dark:text-white">
                <GitHubIcon />
              </span>
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-notion-steel dark:text-notion-dark-muted" />
            </a>
            <a
              href="https://www.adityarawat.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white dark:bg-notion-dark-card hover:bg-notion-surface dark:hover:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text font-medium text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-notion-green dark:text-emerald-400" />
              <span>Portfolio</span>
              <ArrowUpRight className="w-3 h-3 text-notion-steel dark:text-notion-dark-muted" />
            </a>
          </div>
        </div>

        {/* Credentials Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-notion-slate dark:text-notion-dark-muted pt-2">
          <span className="px-2.5 py-1 rounded-full bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline text-notion-slate dark:text-notion-dark-muted shadow-sm">
            BCA Amity University
          </span>
          <span className="px-2.5 py-1 rounded-full bg-notion-mint/40 dark:bg-emerald-950/40 border border-notion-hairline dark:border-emerald-800/40 text-notion-green dark:text-emerald-400 shadow-sm">
            HubSpot Digital Advertising
          </span>
          <span className="px-2.5 py-1 rounded-full bg-notion-sky/40 dark:bg-sky-950/40 border border-notion-hairline dark:border-sky-800/40 text-notion-primary dark:text-sky-400 shadow-sm">
            IIDE Meta Advertising
          </span>
          <span className="px-2.5 py-1 rounded-full bg-notion-lavender/40 dark:bg-purple-950/40 border border-notion-hairline dark:border-purple-800/40 text-notion-purple-tag dark:text-purple-300 shadow-sm">
            HackerRank SQL (Advanced)
          </span>
        </div>

        <div className="text-[11px] text-notion-stone dark:text-notion-dark-subtle">
          Aditya Rawat • Meta Ads Portfolio
        </div>
      </div>
    </footer>
  );
};
