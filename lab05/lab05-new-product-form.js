"use strict";

//New Product Form
document.getElementById("btn-add-product").addEventListener("click", () => {
    let number = "Product Number: " + document.getElementById("input-product-number").value + "\n";
    let name = "Name: " + document.getElementById("input-name").value + "\n";
    let price = "Unit Price: " + document.getElementById("input-unit-price").value + "\n";
    let quantity = "Quantity in stock: " + document.getElementById("input-quantity").value + "\n";
    let supplier = "Supplier: " + document.getElementById("select-supplier").value + "\n";
    let date = "Date supplied: " + document.getElementById("input-date").value;
    
    alert(number + name + price + quantity + supplier + date);
});