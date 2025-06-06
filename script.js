
const data = [
  {
    "id": 1,
    "title": "Red Adidas Sports Shoes",
    "price": 100,
    "image": "images/adidas_red.jpg",
    "category": "shoes",
    "color": "red",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 2,
    "title": "Green Nike Running Shoes",
    "price": 120,
    "image": "images/nike_green.jpg",
    "category": "shoes",
    "color": "green",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 3,
    "title": "Yellow Sport Sneakers",
    "price": 110,
    "image": "images/yellow_sneaker.jpg",
    "category": "shoes",
    "color": "yellow",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 4,
    "title": "Black Leather Boots",
    "price": 150,
    "image": "images/black_leather.jpg",
    "category": "shoes",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 5,
    "title": "White Casual Sneakers",
    "price": 90,
    "image": "images/white_handbag.jpg",
    "category": "shoes",
    "color": "white",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 6,
    "title": "Purple Evening Dress",
    "price": 200,
    "image": "images/purple_evening.jpg",
    "category": "clothes",
    "color": "purple",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 7,
    "title": "Red Formal Dress",
    "price": 140,
    "image": "images/red_dress.jpg",
    "category": "clothes",
    "color": "red",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 8,
    "title": "Green Casual Shirt",
    "price": 85,
    "image": "images/green_shoes.jpg",
    "category": "clothes",
    "color": "green",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 9,
    "title": "Yellow Summer Dress",
    "price": 95,
    "image": "images/yellow_summer.jpg",
    "category": "clothes",
    "color": "yellow",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 10,
    "title": "Black Leather Jacket",
    "price": 150,
    "image": "images/black_jacket.jpg",
    "category": "clothes",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 11,
    "title": "Black Ray-Ban Sunglasses",
    "price": 150,
    "image": "images/black_sunglasses.jpg",
    "category": "glasses",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 12,
    "title": "White Classic Glasses",
    "price": 70,
    "image": "images/white_glasses.jpg",
    "category": "glasses",
    "color": "white",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 13,
    "title": "Black Aviator Sunglasses",
    "price": 65,
    "image": "images/black_aviator.jpg",
    "category": "glasses",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 14,
    "title": "Black Formal Glasses",
    "price": 70,
    "image": "images/black_formal.png",
    "category": "glasses",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 15,
    "title": "Purple Fashion Glasses",
    "price": 75,
    "image": "images/purple_fashion_glasses.jpg",
    "category": "glasses",
    "color": "purple",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 16,
    "title": "Yellow Leather Purse",
    "price": 80,
    "image": "images/yellow_purse.jpg",
    "category": "purses",
    "color": "yellow",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 17,
    "title": "Purple Tote Purse",
    "price": 75,
    "image": "images/purple_purse.jpg",
    "category": "purses",
    "color": "purple",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 18,
    "title": "White Handbag",
    "price": 80,
    "image": "images/white_handbag.jpg",
    "category": "purses",
    "color": "white",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 19,
    "title": "Red Clutch Purse",
    "price": 90,
    "image": "images/red_purse.jpg",
    "category": "purses",
    "color": "red",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 20,
    "title": "Black Evening Purse",
    "price": 100,
    "image": "images/black_purse.jpg",
    "category": "purses",
    "color": "black",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 21,
    "title": "Red Running Shoes",
    "price": 105,
    "image": "images/red_shoes.jpg",
    "category": "shoes",
    "color": "red",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 22,
    "title": "Green Hiking Shoes",
    "price": 120,
    "image": "images/green_shoes.jpg",
    "category": "shoes",
    "color": "green",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 23,
    "title": "Yellow Casual Shoes",
    "price": 95,
    "image": "images/yellow_shoes.jpg",
    "category": "shoes",
    "color": "yellow",
    "availability": "in stock",
    "added": false
  },
  {
    "id": 24,
    "title": "Black Sneakers",
    "price": 110,
    "image": "images/black_sneaker.jpg",
    "category": "shoes",
    "color": "black",
    "availability": "in stock",
    "added": false
  }
]

const handleRemoveItem = (product) => {} // ay iran karas sarqes vor local storageic jnji 


const handleAddItem = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product) // stanum enq localStorage-ic avelacnum taza apranqy
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
}

const isAdded = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // nayi localStorage-um pahum enq mer data sranov datan stanum enq 
    return cart.some(item => item.id === id); // u stugum te ka mer apranqy dra mej te che
}


const getProducts = () => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 
        data.forEach((product,index) => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <section>
                    <h2>${product.title}</h2>
                    <p>$${product.price}</p>
                </section>
                <button class='${isAdded(product.id)?'added':''} btn' >${isAdded(product.id)?'Remove From Cart':'Add to Cart'}</button>
            `;
            productsContainer.appendChild(productElement);
            
            if(isAdded(product.id)){
                document.getElementsByClassName('btn')[index].addEventListener('click',() => handleRemoveItem(product)) 
            }else{
                document.getElementsByClassName('btn')[index].addEventListener('click',() => handleAddItem(product)) 
            }

        })
}

document.addEventListener('DOMContentLoaded',getProducts ) // es nshanakuman DOMContentLoaded vor katarvi henc vor ejy bernvela

window.addEventListener('cart-updated',getProducts);
