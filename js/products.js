// open with Live-Server

const handleRemoveItem = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart') || []);
  cart = cart.filter((productS) => productS.id != product.id)
  localStorage.setItem('cart',JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
}  


const handleAddItem = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product) 
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated')); // new thing i didnt know

    // logic for qanak ban
    //  const exists = cart.find((item) => item.id === product.id)
    // if (!exists) {
    //   cart.push({...product,qunatity:1}) 
    // localStorage.setItem('cart', JSON.stringify(cart));
    // window.dispatchEvent(new Event('cart-updated')); // new thing i didnt know
    // }else{
    //  let newCart = cart.map((prev) => prev.id === product.id ? {...prev,qunatity:prev.qunatity + 1} : prev)
    //      localStorage.setItem('cart', JSON.stringify(newCart));
    // window.dispatchEvent(new Event('cart-updated')); // new thing i didnt know
    // }
}

const isAdded = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    return cart.some(item => item.id === id); 
}


const filterObject = {
  color:'all',
  category:'all',
  availability:'all',
  priceFrom:'',
  priceTo:'',
  searchQuery:''
}



// Apply Filter to products
const applyFilters =async () => {

  const response = await fetch('../data/db.json')
const data = await response.json()
  console.log(data);
  

 return data.filter((product) => {
      const matchesColor = filterObject.color === 'all' || product.color === filterObject.color;
      const matchesCategory = filterObject.category === 'all' || product.category === filterObject.category;
      const matchesAvailability = filterObject.availability === 'all' || product.availability === filterObject.availability;
      const matchesPrice = (filterObject.priceFrom === '' && filterObject.priceTo === '') || product.price >= filterObject.priceFrom && product.price <= filterObject.priceTo;      
      const matchesName = filterObject.searchQuery === '' || product.title.toLowerCase().includes(filterObject.searchQuery.toLowerCase())
      return matchesColor && matchesCategory && matchesAvailability && matchesPrice && matchesName;
  })
}


  const pageSize = 12
  let currentPage = 1


const getProducts =async () => {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 
    const filteredData = await applyFilters()

    const paginatedData = paginate(filteredData,pageSize,currentPage)
    
        paginatedData.forEach((product,index) => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="../${product.image}" alt="${product.title}">
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
        renderPagination(filteredData.length)
}

document.addEventListener('DOMContentLoaded',getProducts ) // es nshanakuman DOMContentLoaded vor katarvi henc vor ejy bernvela

window.addEventListener('cart-updated',getProducts);


const handleSearch = (value) => {
  filterObject.searchQuery = value
}
const handleChooseCategory = (category) => {
    filterObject.category = category.toLowerCase()
    for (let i = 0; i < 5; i++) {
      const el =  document.getElementsByClassName('categoryLi')[i]
       el.setAttribute('id',filterObject.category === el.innerHTML.toLowerCase() ? 'active': '')
    }
}
const handleChooseColor = (color) => {
    filterObject.color = color.toLowerCase()
    for (let i = 0; i < 7; i++) {
      const el =  document.getElementsByClassName('colorLi')[i]
      let htmlColor = el.innerHTML.replace(/<[^>]*>/g, "").trim().toLowerCase()
       el.setAttribute('id',filterObject.color === htmlColor ? 'activeColor': '')
    }
} 

const handleChooseAva = (availability) => {
  filterObject.availability = availability;
  for (let i = 0; i < 3; i++) {
      const el =  document.getElementsByClassName('avaLi')[i]
      let htmlAva = el.innerHTML.replace(/<[^>]*>/g, "").trim().toLowerCase()
       el.setAttribute('id',filterObject.availability === htmlAva ? 'activeColor': '')
    }
}

const handleChangePrice = (direction,value) => {
    if (direction == 'to') {
      filterObject.priceTo = value
    }else{
      filterObject.priceFrom = value
    }
}

const filterProducts = () => {
  getProducts()
}


const paginate = (array,pageSize,pageNumber) => {
  return array.slice((pageNumber - 1) * pageSize , pageSize * pageNumber)
}

const renderPagination = (totalItems) => {


  const totalPages = Math.ceil(totalItems / pageSize);
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

       const btn = document.createElement('button');
           if (currentPage === 1) {
            btn.setAttribute('disabled',true)
      }
    btn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
    btn.addEventListener('click', () => {
      currentPage -= 1;
      getProducts(); // re-render products
      window.scrollTo(0,0)
    });
    paginationContainer.appendChild(btn);
    

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
  
    btn.textContent = i;
    btn.className = (i === currentPage) ? 'activeBtn' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      getProducts(); // re-render products
      window.scrollTo(0,0)
    });
    paginationContainer.appendChild(btn);
  }
   const btn2 = document.createElement('button');
   if (currentPage === totalPages) {
       btn2.setAttribute('disabled',true)
    }
    btn2.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    btn2.addEventListener('click', () => {
      currentPage += 1;
      getProducts(); // re-render products
      window.scrollTo(0,0)
    });
    paginationContainer.appendChild(btn2);
        const pageNumbersContainer = document.getElementById('pageNumber')

    pageNumbersContainer.innerText = ''
    pageNumbersContainer.innerText = currentPage + ' of ' + totalPages
};

window.addEventListener('load',() => {
  const num = JSON.parse(localStorage.getItem('one'))
    const url = new URL(window.location)
    const query = url.searchParams.get('searchQuery')
  if (!num && query) {

    filterObject.searchQuery = query
    localStorage.setItem('one',JSON.stringify({name:"mario"}))
    document.getElementsByClassName('search-box')[0].value = query
    getProducts()
     url.searchParams.delete('searchQuery');
    window.history.replaceState({}, '', url.pathname);
  }else{
    localStorage.removeItem('one')
    document.getElementsByClassName('search-box')[0].value = ''
    getProducts()
  }
 
})

