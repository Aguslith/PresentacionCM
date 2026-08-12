import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

interface ThemeContextType {
  isDarkOverride: boolean;
  toggleTheme: () => void;
  setThemeOverride: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkOverride: false,
  toggleTheme: () => {},
  setThemeOverride: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkOverride, setIsDarkOverride] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleTheme = useCallback(() => {
    setIsDarkOverride((prev) => {
      const next = !prev;
      setToastMessage(next ? "Modo Oscuro Unificado Activo (Tecla O)" : "Modo Cromático Estándar (Tecla O)");
      return next;
    });
  }, []);

  const setThemeOverride = useCallback((value: boolean) => {
    setIsDarkOverride(value);
  }, []);

  // Keyboard shortcut listener for 'o' or 'O'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "o" || e.key === "O") {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  // Clear toast after 2.5s
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null), 2500;
    });
    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <ThemeContext.Provider value={{ isDarkOverride, toggleTheme, setThemeOverride }}>
      {children}

      {/* Floating Toast Notification when 'O' is pressed */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2 px-4 py-2 rounded-full bg-navy/95 border border-sky/40 text-sky text-xs font-mono font-semibold shadow-2xl shadow-navy/80 backdrop-blur-md pointer-events-none"
          >
            <Palette className="w-3.5 h-3.5 text-sky animate-spin-slow" />
            <span>{toastMessage}</span>
            <span className="text-[10px] opacity-60">| [O]</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};
