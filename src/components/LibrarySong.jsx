import React from 'react'
import { playAudio } from '../util';

const LibrarySong = ({song,songs,setCurrent,setSongs,id,audioRef,isPlaying}) => {

    const setSongHandler=()=>{
        setCurrent(song);
        audioRef.current.play();
        
        // active state

        const newSongs = songs.map(song=>{
            if(song.id===id){
                return {...song,active:true}
            }else{
                return {...song,active:false}
            }
        })

                setSongs(newSongs);
    // }

        // check is Playing
        playAudio(isPlaying,audioRef)

    }

  return (
    <div onClick={setSongHandler} className={`hover:bg-amber-200 cursor-pointer library-song flex items-center py-4 px-8 ${song.active ? 'bg-pink-900' : ''} `}>
        <img src={song.cover} alt="song" className=' w-[30%] ' />
        <div className="flex flex-col pl-8">
        <h3 className="text-lg font-bold text-gray-400">{song.name}</h3>
        <h3 className="text-xl font-light text-teal-400">{song.artist}</h3>

        </div>
    </div>
  )
}

export default LibrarySong