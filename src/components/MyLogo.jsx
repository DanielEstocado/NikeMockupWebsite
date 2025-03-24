import React from 'react'

const MyLogo = ({ 
  className = "",
  borderColor = "stroke-gray-700",
  dColor = "fill-gray-700",
  eColor = "fill-gray-700",
}) => {
  return (
   <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 100 100"
   preserveAspectRatio="none" 
   className={`${className}  w-auto`}
 >
   <g>
   <path
        d="M82.88,6.12H17.12c-6.6,0-12,5.4-12,12v65.75c0,6.6,5.4,12,12,12h65.75c6.6,0,12-5.4,12-12V18.12 C94.88,11.52,89.48,6.12,82.88,6.12z"
        className={`stroke-current stroke-[2.5] fill-none ${borderColor}`}
      />
   </g>
   <g>
      <path
        d="M43.95,84.99v-5.76c-2.9,4-7,6.34-12.13,6.34c-10.49,0-18.53-11.13-18.53-25.38c0-14.15,8.48-25.76,18.98-25.76 c5.21,0,9,2.83,11.68,6.34V16.67h5.21v68.32H43.95z M43.95,50.24c-1.27-4.59-5.13-9.56-11.68-9.56c-7.44,0-13.77,8.59-13.77,19.52 c0,11.03,5.95,19.13,13.32,19.13c6.33,0,10.57-4.78,12.13-9.76V50.24z"
        className={`fill-current ${dColor}`}
      />
      <path
        d="M51.46,16.67H85.1v6.25H56.67v24.4h22.92v6.25H56.67v25.18h28.5v6.25H51.46V16.67z"
        className={`fill-current ${eColor}`}
      />
   </g>
 </svg>
  )
}

export default MyLogo
