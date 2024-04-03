import React from 'react'

function Header() {
  return (
    <div>
        <div className='bg-white-100 border-b-2 border-black-900'>
            <ul className='flex justify-between'>
                <div>
                    <li className='text-sky-800 font-bold font-black text-4xl m-3'>Ola<span className='text-green-600'>Pool</span></li>
                </div>
                <div className='flex'>
                    <li className='text-lg mr-20 mt-4'>
                        Message
                    </li>
                    <li className='mr-5 mt-5 border-black'>
                        <input type="text" className='font-bold  border-2 border-black' placeholder='mayan' />
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Header