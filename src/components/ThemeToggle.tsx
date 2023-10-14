import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import IconButton from "./IconButton";

const LOCAL_STORAGE_THEME_KEY = "jvsp.darkMode";

function getStorageTheme() {
  if (
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === "true" ||
    (!localStorage.getItem(LOCAL_STORAGE_THEME_KEY) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return true;
  }
  return false;
}

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(getStorageTheme());

  useEffect(() => {
    if (darkMode === true) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, "true");
      return document.documentElement.classList.add("dark");
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, "false");
    return document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <IconButton
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Mudar tema"
      title="Mudar tema"
    >
      {darkMode ? (
        <Sun size={24} weight="fill" />
      ) : (
        <Moon size={24} weight="fill" />
      )}
    </IconButton>
  );
}

export default ThemeToggle;
