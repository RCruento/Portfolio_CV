import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/components/AppThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
      className="ml-2 p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors shadow"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>
  );
}
