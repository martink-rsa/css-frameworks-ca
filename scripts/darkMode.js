const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Function to set the dark mode
function setDarkMode(isDark) {
  if (isDark) {
    html.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
}

// Check for saved user preference
const savedDarkMode = localStorage.getItem('darkMode');

// Set initial dark mode based on saved preference or system preference
if (
  savedDarkMode === 'true' ||
  (savedDarkMode === null &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  setDarkMode(true);
} else {
  setDarkMode(false);
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  setDarkMode(isDark);
});
