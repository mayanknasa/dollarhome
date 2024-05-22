document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Link clicked!');
      });
    });
  });
  