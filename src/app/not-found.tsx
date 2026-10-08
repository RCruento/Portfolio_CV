import Link from "next/link";
import { Gamepad2, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 – Mission Not Found | Rayan Koussa</title>
        <meta name="robots" content="noindex, follow" />
      </head>
      <body className="bg-[#080914] text-white min-h-screen flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md w-full p-8 rounded-2xl bg-[#101226] border-2 border-cyan-400 shadow-2xl flex flex-col items-center gap-6">
          <div className="p-4 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500">
            <Gamepad2 size={36} />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-mono text-5xl font-black tracking-widest text-rose-500">
              404
            </h1>
            <h2 className="font-display font-black text-xl text-white uppercase">
              MISSION NOT FOUND / PAGE INTROUVABLE
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              The coordinate you requested does not exist or has been relocated to another sector.
            </p>
          </div>

          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={16} />
            RETURN TO BASE / RETOUR ACCUEIL
          </Link>
        </div>
      </body>
    </html>
  );
}
