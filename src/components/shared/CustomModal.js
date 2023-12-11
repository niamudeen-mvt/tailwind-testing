import React from 'react'
import { menuItems } from '../../utils/menu-items'



const CustomModal = ({ showModal }) => {
  return (
    <div className={`bg-slate-300/50 ${showModal ? 'block' : 'hidden'} fixed inset-0 `}>
      <div className='absolute inset-x-4  mt-[120px] flex rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100'>
        <nav className='w-full'>
          <div className='flex flex-col gap-y-4'>
            {
              menuItems.map(({ id, path }) => {
                return (
                  <p href={path} className='capitalize'>
                    {id}
                  </p>
                )
              })}
            <hr className='' />
            <p>Signin</p>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default CustomModal