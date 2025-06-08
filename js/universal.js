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

const handleQuerySearch = (event) => {
  event.preventDefault()
  const value = document.getElementById('someID').value
    window.location.href = 'products.html?searchQuery=' + value
}    

    const updatePin = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart') || [])
        console.log(cartItems);
            
        document.getElementsByClassName('quantity')[0].innerHTML = cartItems.length
    }

      window.addEventListener('load',updatePin)

      window.addEventListener('cart-updated',updatePin)
      window.addEventListener('cart-changed',updatePin)
