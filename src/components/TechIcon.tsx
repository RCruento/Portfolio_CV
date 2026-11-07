"use client";

import React from "react";

// Official vector brand SVG icons for key technologies
export function TechIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim();

  // Python
  if (n.includes("python")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.81v.825H3.9S0 5.787 0 11.914c0 6.126 3.4 5.922 3.4 5.922h2.029v-2.848s-.11-3.4 3.344-3.4h5.753v-.844H8.816V9.45h8.62s3.23.36 3.23-5.75c0-6.11-3.23-3.7-8.752-3.7zM8.7 1.838a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zm3.386 22.162c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.81v-.825h8.116s3.9.446 3.9-5.681c0-6.126-3.4-5.922-3.4-5.922h-2.029v2.848s.11 3.4-3.344 3.4H9.49v.844h5.707v1.294H6.577s-3.23-.36-3.23 5.75c0 6.11 3.23 3.7 8.752 3.7zm3.214-1.838a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
      </svg>
    );
  }

  // React / React Native
  if (n.includes("react")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="4.2" ry="11" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4.2" ry="11" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="4.2" ry="11" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  // Next.js
  if (n.includes("next")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5l-6.8-9.1v-.4h1.5l5.3 7.1v2.4zm-1.8-9.5h1.8v5.8h-1.8V7zM7.5 7h1.8v10H7.5V7z" />
      </svg>
    );
  }

  // TypeScript
  if (n.includes("typescript") || n === "ts") {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12.3 11.5h-4v8.8H6.2v-8.8H2.1V9.7h10.2v1.8zm6.5 4.3c-.3.6-.8 1-1.4 1.4-.6.3-1.3.5-2.1.5-.7 0-1.4-.2-2-.5-.6-.3-1.1-.8-1.4-1.4-.3-.6-.5-1.3-.5-2.1h2c0 .5.2 1 .5 1.3.3.3.8.5 1.4.5.6 0 1-.2 1.3-.5.3-.3.4-.7.4-1.1 0-.3-.1-.6-.3-.8-.2-.2-.5-.4-.9-.6l-1.3-.5c-.8-.3-1.4-.7-1.8-1.2-.4-.5-.6-1.1-.6-1.8 0-.7.2-1.3.5-1.9.3-.6.8-1 1.4-1.3.6-.3 1.3-.5 2.1-.5.7 0 1.4.2 2 .5.6.3 1 .7 1.3 1.3.3.6.5 1.2.5 1.9h-2c0-.5-.2-.9-.5-1.2-.3-.3-.7-.4-1.3-.4-.5 0-.9.1-1.2.4-.3.3-.4.6-.4 1 0 .3.1.5.3.7.2.2.5.4.9.5l1.3.5c.8.3 1.5.7 1.9 1.2.4.5.6 1.1.6 1.8 0 .8-.2 1.4-.5 2z" />
      </svg>
    );
  }

  // Go / Golang
  if (n === "go" || n.includes("golang")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.8 9.2h3.5v5.6H1.8zm5.3-3.5h3.5v9.1H7.1zm5.3 5.3h3.5v3.8h-3.5zm5.3-5.3h3.5v9.1h-3.5z" />
      </svg>
    );
  }

  // Node.js
  if (n.includes("node")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm-1.4 17.5h-1.8v-6.9h1.8v6.9zm4.6 0h-1.8v-3.5c0-.9-.3-1.4-1.1-1.4-.7 0-1.1.5-1.1 1.4v3.5h-1.8v-6.9h1.8v1c.4-.7 1.1-1.1 2-1.1 1.5 0 2 1 2 2.5v4.5z" />
      </svg>
    );
  }

  // SQLite / Database / SQL
  if (n.includes("sql") || n.includes("db") || n.includes("database")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // FastAPI / REST / API
  if (n.includes("api") || n.includes("fastapi")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h7v8l10-12h-7V2z" />
      </svg>
    );
  }

  // Chrome Extension / Plugins
  if (n.includes("chrome") || n.includes("extension")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.5 11a8.5 8.5 0 1 0-2.5 6M21 3l-6 6M15 3h6v6" />
      </svg>
    );
  }

  // AI / LLM / BYOK
  if (n.includes("ai") || n.includes("byok") || n.includes("llm") || n.includes("ia")) {
    return (
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    );
  }

  // Default clean code symbol
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
