'use client'
import React, { useEffect, useState } from 'react'
import DoctorsByCategory from '@/app/(routes)/search/_components/DoctorsByCategory'
import GlobalApi from '@/app/_utils/db'


function Search({params}) {
const [doctorList,setdoctorList]=useState([])

    useEffect(() => {
        // console.log(params.cname)
        getDoctors()
    },[])

    const getDoctors=()=>{
      GlobalApi.getDoctorByCategory(params.cname).then((res)=>{
        // console.log(res.data.data)
        setdoctorList(res.data.data)
      })


    }
  return (
    <div>
      <DoctorsByCategory  heading={params.cname}
      doctorList={doctorList}/>
    </div>
  )
}

export default Search