import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our 
        <span className='text-oral-red'> Customers </span>
        Say?
      </h3>
      <p className='info-text m-auto text-center mt-4 max-w-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi fugit odio quod ex quam, nobis iure saepe earum magnam molestiae.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}{...review}
          />
        ))}
        </div>
    </section>
  )
}

export default CustomerReviews
