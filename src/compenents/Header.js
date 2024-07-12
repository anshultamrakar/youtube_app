import React from 'react'
import Hamburgermenu from '../assets/icons/icons8-menu-26.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid gap-4 m-4 grid-cols-12 shadow-md'>
      <div className='flex gap-2 col-span-2 h-16 mx-2'>
       <img onClick={() => toggleMenuHandler()} className='h-9 my-4 cursor-pointer' alt = "menu" src = {Hamburgermenu}/>
      <a></a> <img alt = "logo" src = "data:image/png;base64,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"/>
      </div>
      <div className='col-span-8 flex justify-center items-center '>
        <input className='px-5 rounded-full align-center w-96 h-9 border-solid border-2 border-slate-500 my-2 ' type = "text" placeholder='Search'/>
        <button><img className='h-9' src = "https://img.icons8.com/ios/50/search--v1.png"/></button>
      </div>
      <div className='col-span-2 my-2'>
        <img className='w-12' alt = "user" src ="data:image/png;base64,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"/>
      </div>
    </div>
  )
}

export default Header