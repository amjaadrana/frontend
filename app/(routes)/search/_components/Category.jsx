'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

function Category() {
  const [categoryList, setcategoryList] = useState([])
  const params = useParams()
  useEffect(() => {
    getCategoryList()
    // console.log(params)
  }, [])

  const getCategoryList = () => {
    GlobalApi.searchCategory().then((res) => {
      // console.log(res.data.data)

      setcategoryList(res.data.data)
    })
  }

  return (
        <div className='h-screen mt-5 fixed flex flex-col'>
          <Command >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="overflow-visible">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {categoryList&&categoryList.map((category ,index) => (

          <CommandItem>
            <Link
            href={'/search/' + category.attributes?.Name}
            key={index}
            className={`flex p-2 gap-4 items-center
            text-blue-600 rounded-md cursor-pointer w-full
            ${params.cname == category.attributes.Name && 'bg-blue-100'}
            
            `}>

              <Image src={category.attributes?.Icon?.data?.attributes?.url} width={40} height={40}/>

              <label>
            {category.attributes?.Name}

              </label>

            </Link>
            </CommandItem>

          ))

          }

        </CommandGroup>
        <CommandSeparator />

      </CommandList>
    </Command>
        </div>

    
  )
}

export default Category
