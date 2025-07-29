import React from 'react'
import notFoundImage from '../../assets/notfound.jpg'; // Correct - This is a default import for an asset
export default function NotFound() {
  return (
    <div>
      <h className="text-danger">NotFound Page 404</h><br/>
      <h4>يلا يالا بلا خالو بلا مالو</h4>
      <img src={notFoundImage} alt="" className='w-100'/>
    </div>
  )
}
