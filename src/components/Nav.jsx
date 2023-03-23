import React from 'react'
import {BiMusic} from 'react-icons/bi'

const Nav = ({libraryStatus,setLibrary}) => {
  return (
    <div>
        <nav className='min-h=[10vh] flex justify-around items-center pt-4'>
            <h1 className='text-xl text-rose-700 font-extrabold ml-10'>Musica</h1>
            <button onClick={()=> setLibrary(!libraryStatus)} className='bg-transparent cursor-pointer hover:bg-yellow-400 p-2 duration-500 border-2 border-solid text-2xl text-emerald-400 font-bold border-orange-400 flex items-center'>Library <BiMusic /></button>
            
        </nav>
    </div>
  )
}

export default Nav