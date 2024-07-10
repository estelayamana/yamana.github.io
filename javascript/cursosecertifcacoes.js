// Toggle theme function
function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('nav a');
  
    // Toggle body class
    body.classList.toggle('dark-mode');
  
    // Toggle header and footer background color
    header.classList.toggle('dark-header');
    footer.classList.toggle('dark-footer');
  
    // Toggle nav link color
    navLinks.forEach(link => link.classList.toggle('dark-link'));
  }
  
  // Check if theme is set in local storage
  if (localStorage.getItem('theme') === 'dark') {
    toggleTheme();
  }
  
  // Add event listener to theme toggle button
  const themeToggleButton = document.querySelector('#theme-toggle');
  themeToggleButton.addEventListener('click', toggleTheme);
  
  // Save theme to local storage when toggled
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  });
  