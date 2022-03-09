fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    let data1 = "";
    completeData.map((values) => {
      data1 += `<div class="product-card">
        <div class="product-image">
            <img
                src=${values.image}>
        </div>
        <div class="product-info">
            <h5>${values.title}</h5>
            <h6>${values.price}</h6>
            <p class="desc">${values.description}</p>
            <p class="category">${values.category}</p>
        </div>
    </div>`;
    });
    document.getElementById("products").innerHTML = data1;
  });
