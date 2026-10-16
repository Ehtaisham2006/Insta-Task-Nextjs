import React from 'react'

const Stories = ({ path }) => {
  return (
    // Outer container jiske paas 'group' class hai
    <div className='group relative cursor-pointer'>
      {/* 
        Container jo aik full circle banayega 
        'bg-gradient-to-tr' wali ring ab direct image ko surround kare gi 
        'overflow-hidden' ensure karega ke image circle se bahar na nikle
      */}
      <div className='w-16 h-16 rounded-full overflow-hidden transition-transform duration-200 group-hover:scale-105 border-2 border-neutral-800'>
        {/* 
          Normal img tag use kiya hai taake image local loading fast ho 
          'object-cover' ensures image container ko puri tarah cover kare aur aspect ratio maintain rahe
        */}
        <img 
          src={path} 
          alt="User Story" 
          className='w-full h-full rounded-full object-cover' 
        />
      </div>
    </div>
  )
}

export default Stories