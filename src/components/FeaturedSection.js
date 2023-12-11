import React from 'react'

const FeaturedSection = () => {
  return (
    <section className='text-center'>
      <p className='font-semibold'>
        Trusted by these six companies so far
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-8 gap-y-8">
        {
          Array.from({ length: 6 }).map((_, i) => {
            return (
              <div className='mx-auto'>
                <img src='https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg' alt='featured-img' className='h-42 w-30' />
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default FeaturedSection