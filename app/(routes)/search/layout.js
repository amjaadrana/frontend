'use client'
import React from 'react'
import Category from './_components/Category'
import { useParams } from 'next/navigation'

function layout({ children }) {
  
  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        
    {/* category */}

        <Category />
      </div>
      <div className='col-span-3'>
        
        {children}
      </div>
    </div>
  )
}

export default layout
