import React from 'react'

const Song = ({currentSong}) => {
  return (
    <div className='song-container mt-10 space-y-3 min-h-[60vh] flex flex-col items-center justify-center'>
        <img src={currentSong.cover} alt="song" className='rounded-full md:w-[30%] w-[80%]' />
        <h3 className="text-4xl font-bold text-orange-400">{currentSong.name}</h3>
        <h3 className="text-xl text-orange-400">{currentSong.artist}</h3>
    </div>
  )
}

export default Song