import React from 'react'
import CustomContainer from './Container'
import { menuItems } from '../../utils/menu-items'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import { FaGithub } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className='bg-slate-50'>
      <CustomContainer>
        <div className='flex items-center flex-col gap-8 py-16'>

          <a href='/' className='flex items-center gap-x-3'>
            <FaCircleHalfStroke className='text-blue-600 h-10 w-10' />
            <p className='text-lg'>Tax<span className='text-blue-600 font-bold'>Pal</span></p>
          </a>

          <nav className='hidden md:block'>
            <ul className='flex justify-between items-center gap-x-6'>
              {
                menuItems.map(({ id, path }) => {
                  return (
                    <li href={path} className='rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 capitalize cursor-pointer'>
                      {id}
                    </li>
                  )
                })}
            </ul>
          </nav>

        </div>

        <div className='border-t border-slate-400/10  flex justify-between py-10'>
          <p className='text-sm text-slate-500'>
            Copyright © 2023 TaxPal. All rights reserved.
          </p>
          <div className='flex gap-x-4'>
            <FaTwitter className='h-6 w-6 fill-slate-500' />
            <FaGithub className='h-6 w-6 fill-slate-500' />
          </div>
        </div>
      </CustomContainer>
    </footer>
  )
}

export default Footer