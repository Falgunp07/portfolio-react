function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      id="themeToggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
