import React from 'react'
import { TbTriangleFilled } from "react-icons/tb";

export const CustomButton = ({ text, btnColor, hoverColor, activeTextColor }) => {
  return (
    <button className={`rounded-full py-3 px-4 text-sm font-semibold focus:outline-none text-white hover:text-slate-100   ${btnColor ? btnColor : 'bg-blue-600'} hover:${hoverColor ? hoverColor : 'bg-blue-500 '}  active:${activeTextColor ? activeTextColor : 'text-blue-100'} `} >
      {text}
    </button >
  )
}


export const TransaprentButton = ({ text }) => {
  return (
    <button className={`border rounded-full px-4 py-2 text-sm text-slate-700 hover:text-slate-900 active:bg-slate-100 active:text-slate-600 flex justify-center items-center gap-3`} >
      <TbTriangleFilled className='transform rotate-90 text-blue-600 h-3 w-3' />{text}
    </button >
  )
}

