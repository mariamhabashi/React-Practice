import React from 'react'

export default function Child({product , deleteProduct ,updateProduct ,index}) {
    // console.log(product);
    // let { userAge, userName } = props;

    let {id,category,price,code,onSale}=product
  return (
      // <h1>Child</h1>
      <div className="col-md-3">
        <div className="item bg-secondary text-white p-3 rounded-2 position-relative">
          <h1 className="h4">Name: {code}</h1>
          <h3>Category: {category}</h3>
          <h3>Price: {price}</h3>
          <button className="btn btn-danger w-100" onClick={() => deleteProduct(id)}>Delete <i className="fa fa-trash"></i></button>
          <button className="btn btn-warning w-100 mt-2" onClick={() => updateProduct(index)}>Update <i className="fa fa-edit"></i></button>
          {onSale == true ? (
          <div className="bg-danger position-absolute top-0 end-0">Sale</div>) : null}
        </div>  
      </div>
  )
}
