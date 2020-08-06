"use strict";

let products = [
  {
    name: "Ikat Bowls (Set of 3)",
    category: "Kitchenware",
    description:
      "Set of 3 handmade glazed earthenware bowls featuring a bold ikat print.",
    price: 48,
    src: "product_images/bowls.jpg",
  },
  {
    name: "Rainbow Whisk",
    category: "Kitchenware",
    description: "Matte silicone rainbow whisk with a stainless steel handle.",
    price: 22,
    src: "product_images/whisk.jpg",
  },
  {
    name: "Chartreuse Tea Kettle",
    category: "Kitchenware",
    description:
      "Tea kettle with smooth glossy enamel finish and black bamboo handle.",
    price: 60,
    src: "product_images/kettle.jpg",
  },
  {
    name: "Le Creuset Saucepan",
    category: "Kitchenware",
    description:
      "Cast iron sauce pan coated in chip resistant red enamel and nonstick interior.",
    price: 190,
    src: "product_images/pan.jpg",
  },
  {
    name: "Clay Vase",
    category: "Home goods",
    description: "Classic bottle vase hand sculpted with natural clay.",
    price: 30,
    src: "product_images/pitcher.jpg",
  },
  {
    name: "Panda Plant",
    category: "Home goods",
    description:
      "Artificial Panda Plant succulent with a white stoneware planter.",
    price: 50,
    src: "product_images/plant.jpg",
  },
  {
    name: "Circle Mirror",
    category: "Furniture",
    description: "Circular glass mirror framed in carved suar wood.",
    price: 140,
    src: "product_images/mirror.jpg",
  },
  {
    name: "Bedding Set",
    category: "Home goods",
    description:
      "Collection of fine cotton bedding featuring mixed graphic pillows and a linen duvet.",
    price: 200,
    src: "product_images/bed.jpg",
  },
  {
    name: "Whatever Print with frame",
    category: "Home goods",
    description: "Matted bold graphic 8x10 print inside a black wooden frame.",
    price: 60,
    src: "product_images/photograph.jpg",
  },
  {
    name: "Dining Room Table Set",
    category: "Furniture",
    description: "Sleek bamboo dinette set with two dining chairs.",
    price: 260,
    src: "product_images/tableSet.jpg",
  },
  {
    name: "Pink Accent Chair",
    category: "Furniture",
    description:
      "Accent chair upholstered in pink wool-like fibers with tufted back.",
    price: 180,
    src: "product_images/pinkChair.jpg",
  },
  {
    name: "Wood Block Coffee Table",
    category: "Furniture",
    description: "Solid reclaimed wood coffee table with a natural finish.",
    price: 450,
    src: "product_images/coffeeTable.jpg",
  },
];

let productContainer = document.querySelector(".product-container");

const createProductCard = () => {
  productContainer.innerHTML = "";
  products.forEach((product, index) => {
    let card = document.createElement("div");
    card.classList.add("product-card");
    let productImage = document.createElement("img");
    productImage.classList.add("image");
    productImage.setAttribute("src", product.src);
    let productName = document.createElement("h2");
    productName.classList.add("product", "name");
    productName.innerText = product.name;
    let productDescription = document.createElement("p");
    productDescription.classList.add("product", "desc", "info");
    productDescription.innerText = product.description;
    let productPrice = document.createElement("p");
    productPrice.classList.add("product", "price", "info");
    productPrice.innerText = product.price;
    let productCategory = document.createElement("p");
    productCategory.classList.add("product", "category", "info");
    productCategory.innerText = product.category;
    let addCartButton = document.createElement("button");
    addCartButton.classList.add("add-cart");
    addCartButton.innerText = "Add to cart";
    addCartButton.setAttribute("data-index", index);
    card.append(
      productImage,
      productName,
      productCategory,
      productDescription,
      productPrice,
      addCartButton
    );
    productContainer.append(card);
  });
};

createProductCard();

console.log("hi");
