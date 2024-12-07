'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Key, Search } from 'lucide-react'
import GlobalApi from '../_utils/db'
import Image from 'next/image'
import Link from 'next/link'

function SearchCategory() {
  const [categoryList, setcategoryList] = useState([])

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = () => {
    GlobalApi.searchCategory().then((res) => {
      setcategoryList(res.data.data)
    })
  }

  return (
    <div className="text-center flex flex-col ">
      <h2 className="text-4xl font-bold tracking-wide lg:mt-10">
        Search <span className="text-primary"> Doctor</span>
      </h2>
      <h2 className="text-gray-500 text-xl ">
        Search your favourite <span className="text-primary"> Doctor</span> and
        Book <span className="text-primary"> Appointment</span>
      </h2>
      <div className="flex justify-center">
        <div className="flex mt-8 max-w-sm space-x-2">
          <Input type="email" placeholder="Searching ..." />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      <div className="px-8">
        <h2 className="flex px-4 text-2xl font-bold tracking-wide mt-10 lg:ml-6 ">Categories</h2>
        <div className="grid grid-cols-3 mt-2 gap-4 md:grid-cols-6 
        lg:grid-cols-10 lg:ml-6 px-2">
          {
          categoryList.length > 0
            ? 
            categoryList.map((c) => (
              <Link
                key={c.id}               
                href={'/search/' + c?.Name}
                className="flex flex-col h-36 w-32  border-[2px]
          rounded-lg p-2 cursor-pointer hover:border-primary
            hover:shadow-sm hover:scale-105 transition-all
            ease-in-out bg-blue-50 "
              >
                <Image
                  src={c?.Icon?.url || '/placeholder-image.jpg'}
                  width={100}
                  height={100}
                  alt={c.attributes?.Name || 'Category Icon'}
                  className="object-contain h-20 w-20 mx-auto"
                />
                <label className="font-bold mt-2 text-center">
                  {c?.Name}
                </label>
              </Link>
            ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="h-[100px] bg-slate-200 w-[100px] rounded-md animate-pulse"></div>
            ))}
        
        
            </div>
      </div>
    </div>
  )
}

export default SearchCategory
