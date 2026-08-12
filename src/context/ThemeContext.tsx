import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ThemeContextType {
  isBlackAndWhite: boolean;
  toggleBlackAndWhite: () => void;
  setBlackAndWhite: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isBlackAndWhite: false,
  toggleBlackAndWhite: () => {},
  setBlackAndWhite: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState<boolean>(false);

  const toggleBlackAndWhite = useCallback(() => {
    setIsBlackAndWhite((prev) => !prev);
  }, []);

  const setBlackAndWhite = useCallback((value: boolean) => {
    setIsBlackAndWhite(value);
  }, []);

  // Keyboard shortcut listener for 'o' or 'O' -> Toggles Black & White presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
        toggleBlackAndWhite();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleBlackAndWhite]);

  return (
    <ThemeContext.Provider
      value={{
        isBlackAndWhite,
        toggleBlackAndWhite,
        setBlackAndWhite,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
