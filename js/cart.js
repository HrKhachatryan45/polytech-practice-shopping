window.addEventListener('DOMContentLoaded',() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || [])

    const cartContainer = document.getElementById('cart')

    cartItems.forEach(element => {

        const div =  document.createElement('div')
        div.innerHTML = ''
        div.className = 'cart-item'
        div.innerHTML = `<img src='../${element.image}' />
        <section>
            <h1>${element.title}</h1>
            <h3><span class='${element.color}'></span>${element.color}</h3>
        </section>
        <div>
        <i id='removeIcon' class="fa-solid fa-trash-can"></i>
          <section>
            <button>+</button>
            <input type='number' value='1'/>
             <button>-</button>
          </section>
          <h1>${element.price}$</h1>
        </div>
        `
        cartContainer.appendChild(div)
    });


})