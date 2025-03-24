import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div
        className='flex flex-1 flex-col'
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-oral-red "> Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam deleniti molestias mollitia totam ea.</p>
        <p className='mt-6 lg:mx-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, error!</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="View Details" />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
