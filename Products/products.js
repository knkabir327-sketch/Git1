const products = document.getElementById("products");
let product = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    product = data;
    console.log(products);
    products.innerHTML = product
      .map((item) => {
        return `
          <section class="card">
            <div class="image">
              <img src="${item.image}" alt="${item.title}" />
            </div>
            <div class="content">
              <div class="title">${item.title}</div>
              <div class="price">₹ ${item.price}</div>
              <div class="category">${item.category}</div>
            </div>
          </section>
        `;
      })
      .join("");
  })
  .catch((error) => console.log("Failed", error));