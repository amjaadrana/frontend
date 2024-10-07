'use client'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LInk from 'next/link'


function Hero() {
  

  return (
    <>
      <section className="mb-10">
        <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-80 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Doctors"
                src="/team_of_doctors.jpeg"
                width={400}
                height={800}
                className=" inset-0 h-83 w-full object-cover sm:rounded-lg"
              />
            </div>
            {/* <image src='/vector.png'/> */}

            <div className="">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find & Book <span className="text-primary">Appointment</span>{' '}
                with your Fav <span className="text-primary">Doctors</span>{' '}
              </h2>

              <p className="mt-4 text-gray-600">
                find the best doctor for your treatment we serve you the best
                doctors for your health on low prices
              </p>
              <LInk href="/search/docotor">
                <Button className="mt-8">Explore Now</Button>
              </LInk>
              
              
              {/* <Button  
              className="mt-8">Explore Now</Button> */}
              
            </div>
          </div>
        </div>
      </section>
      {/* <div className="text-center">
        <div className="bg-[url('/bg.jpeg')] h-[972px]"></div>
        <h3 className="text-3xl text-red-950">Explore</h3>
      </div> */}
    </>
  )
}

export default Hero