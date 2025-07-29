import React from "react";
import { useState } from "react";
import Child from "./../Child/Child";

export default function Parent() {
  // const [age, setage] = useState(20)
  // const [UserName, setUserName] = useState("Ali")
  const [products, setproducts] = useState([
    { id: 1, code: "Samsung", price: 100, onSale: false, category: "Mobile" },
    { id: 2, code: "LG", price: 200, onSale: true, category: "Mobile" },
    { id: 3, code: "Huawei", price: 300, onSale: false, category: "Mobile" },
    { id: 4, code: "Apple", price: 400, onSale: true, category: "Mobile" },
    { id: 5, code: "Dell", price: 500, onSale: false, category: "Laptop" },
    { id: 6, code: "HP", price: 600, onSale: true, category: "Laptop" },
    { id: 7, code: "Lenovo", price: 700, onSale: false, category: "Laptop" },
    { id: 8, code: "Asus", price: 800, onSale: true, category: "Laptop" },
  ]);

  function deleteProduct(id) {
    // let myProduct =[...products] shallow copy
    //let myProduct = JSON.parse(JSON.stringify(products))deep copy
    let myProduct = structuredClone(products); //takecopy 1
    let newProducts = myProduct.filter(function (product) {
      return product.id !== id;
    }); //2
    setproducts(newProducts); //3
  }

  function updateProduct(index) {
    let myProduct = structuredClone(products);
    myProduct[index].price += 1000; //edit
    setproducts(myProduct); //update
  }

  return (
    <>
      <div>Parent Component</div>
      <div className="container">
        <div className="row g-3">
          {/* <Child product={products[0]}></Child> */}
          {products.map((currentproduct, i) => (
            <Child
              key={currentproduct.id}
              index={i}
              product={currentproduct}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
}
