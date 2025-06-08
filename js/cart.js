

const getCartElements = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || [])

    const cartContainer = document.getElementById('cart')
    cartContainer.innerHTML = ''

    cartItems.forEach(element => {

        const div =  document.createElement('div')
        div.className = 'cart-item'
        div.innerHTML = `<div id='hello'>
            <img src='../${element.image}' />
            <section>
                <h1>${element.title}</h1>
                <h3><span class='${element.color}'></span>${element.color}</h3>
            </section>
        </div>
        <div>
        <i id='removeIcon' onclick='handleRemoveItem(${element.id})' class="fa-solid fa-trash-can"></i>
          <section>
            <button>-</button>
            <input type='number' value='1'/>
             <button>+</button>
          </section>
          <h1>${element.price}$</h1>
        </div>
        `
        cartContainer.appendChild(div)
    });

}
window.addEventListener('DOMContentLoaded',getCartElements)


const handleRemoveItem = (id) => {
  let cart = JSON.parse(localStorage.getItem('cart') || []);
  cart = cart.filter((productS) => productS.id != id)
  localStorage.setItem('cart',JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-changed'))
}  

window.addEventListener('cart-changed',() => {
    getCartElements()
})
