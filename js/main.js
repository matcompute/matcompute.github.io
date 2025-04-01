// Initialize AOS animations
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  
  // Check for saved theme preference
  if (localStorage.getItem('color-theme') === 'dark' || 
      (!('color-theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const html = document.documentElement;
    
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      icon.classList.replace('fa-sun', 'fa-moon');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    } else {
      html.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      icon.classList.replace('fa-moon', 'fa-sun');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
  });
  
  // Any other JavaScript functionality can go here
});
