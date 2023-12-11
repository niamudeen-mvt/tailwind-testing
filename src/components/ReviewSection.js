import React from 'react'
import CustomContainer from './layout/Container'

const ReviewSection = () => {
  return (
    <section className='bg-slate-50 py-32'>
      <CustomContainer>
        <div >
          <h2 className='text-3xl tracking-tight text-slate-900 sm:text-4xl font-medium mb-4 text-center'>Loved by businesses worldwide.</h2>
          <p className='text-lg tracking-tight text-slate-700 max-w-2xl mx-auto text-center'>Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    mt-8 gap-6">
            {
              Array.from({ length: 6 }).map((_, i) => {
                return (
                  <figure className='border bg-white  p-6 rounded-2xl flex justify-between flex-col gap-4 shadow-xl shadow-slate-900/10 min-h-[250px]'>
                    <p className='text-lg tracking-tight text-slate-900'>
                      TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.
                    </p>
                    <hr />
                    <figcaption className='flex justify-between'>
                      <div>
                        <p className='font-semibold'>Sheryl Berge</p>
                        <p className='text-slate-500 text-sm mt-2'>CEO at Lynch LLC</p>
                      </div>
                      <div>
                        <img src='https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75' alt='customer-img' className='rounded-full h-14 w-14' />
                      </div>
                    </figcaption>
                  </figure>
                )
              })
            }
          </div>
        </div>
      </CustomContainer>
    </section>
  )
}

export default ReviewSection