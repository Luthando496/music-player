import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({songs,setSongs,setCurrent,audioRef,isPlaying,libraryStatus}) => {
  console.log(libraryStatus)
  // ${libraryStatus ? 'translate-x-0 opacity-100':''}
  return (
    <div className={`bg-white shadow-xl shadow-red-700 fixed top-0 opacity-0 left-0 w-[20rem] h-full overflow-scroll translate-x-[-100%]   duration-500 ${libraryStatus ?'translate-x-[0%] opacity-100':''}`}>
        <h2 className="text-3xl text-gray-900">Library</h2>
        <div className="group-songs">
        {songs.map(song => (<LibrarySong setCurrent={setCurrent} key={song.id} song={song} setSongs={setSongs} isPlaying={isPlaying} id={song.id} audioRef={audioRef} songs={songs} />))}
        </div>
    </div>
  )
}

export default Library