window.addEventListener('load', () => {
  const links = document.querySelectorAll('.link');
  links.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
      link.setAttribute('id', 'activeLink');
    } else {
      link.removeAttribute('id');
    }
  });
});
