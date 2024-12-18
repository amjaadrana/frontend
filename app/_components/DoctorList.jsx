'use client'

import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/db'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function DoctorList({heading="Popular doctor"}) {
  
  const [doctorList, setdoctorList] = useState([])

  useEffect(()=>{
    const getDoctorList=()=>{
      GlobalApi.getDoctor().then((res)=>{
         console.log(res.data.data)
        setdoctorList(res.data.data)
      })
    }
    getDoctorList()
  },[])  

  // const getDoctorList=async()=>{
  //   try {
  //     const res=await GlobalApi.getDoctor();
  //     setdoctorList(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="mt-10 px-8 ">
       <h2 className="flex text-2xl font-bold tracking-wide mt-10 ml-6 lg:ml-2">{heading}</h2>
       <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
         {doctorList.length > 0 ? doctorList.map((Doctor, index) => (
          <div
            className="border-[2px] rounded-lg p-4 cursor-pointer hover:border-primary
           hover:shadow-sm hover:scale-105 transition-all ease-in-out bg-gray-50"
            key={index}
          >
            <Image
              src={Doctor.image?.url}
              alt="Doctor Image"
              width={500}
              height={200}
              className="h-[200px] w-full object-cover rounded-md"
            />

            <div className="mt-3 items-baseline flex flex-col ">
              <h2 className="text-[14px] font-bold bg-blue-100 text-primary rounded-full px-2">
                {Doctor.categories?.Name}
              </h2>
              <h2 className="font-bold ">{Doctor.Name}</h2>
              <h2 className="text-primary text-sm">
                {Doctor.Year_of_Experience}
              </h2>
              <h2 className="text-gray-500 text-sm">
                {Doctor.Address}
              </h2>

              <Button
                className="p-2 px-3 mt-2
             border-[1px] border-white roundecd-full w-full text-sm
             hover:bg-red-400 hover:text-white "
              >
                Appointment
              </Button>
            </div>
          </div>
        ))
        
        :
         [1, 2 , 3, 4, 5, 6, 7, 8].map((item, index) => (
          <div className="h-[250px] bg-slate-200 w-[250px] rounded-md animate-pulse"></div>
        ))}
      </div>
    </div>
  )
}

export default DoctorList