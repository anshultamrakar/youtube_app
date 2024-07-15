import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonArray = ["All" , "Shorts" , " Videos" , "Watched" , "Recently Uploaded" , "Live" , "Javascript" , "Thriller" , "Startup company" , "Array" , "Skills" , "SRK" , "Vlogs"  ]
  return (
    <div className='flex gap-8'>
      {buttonArray.map(buttons => (
        <Button  btns = {buttons}/>
      ))}
    </div>
  )
}

export default ButtonList