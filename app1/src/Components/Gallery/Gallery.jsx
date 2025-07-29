import React from 'react'
import { Link ,Outlet } from 'react-router-dom';
export default function Gallery() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
            <ul className='list-unstyled'>
              <li><Link className='text-dark text-decoration-none' to='web'>Web</Link></li>
              <li><Link className='text-dark text-decoration-none' to='mobile'>Mobile</Link></li>        
              <li><Link className='text-dark text-decoration-none' to='ux'>UX</Link></li>
            </ul>
        </div>
        <div className="col-md-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}
