import React,{useEffect} from 'react'
import {AiFillPlayCircle,AiFillLeftSquare,AiFillRightCircle,AiFillPauseCircle} from 'react-icons/ai'
import { playAudio } from '../util'

const Player = ({currentSong,setCurrent,songs,setIsPlay,isPlaying,songInfo,setInfo,audioRef,setSongs}) => {

 

  const playSongHandler=()=>{
    if(isPlaying){
    audioRef.current.pause()
    setIsPlay(!isPlaying)
  }else{
    audioRef.current.play()
    
    setIsPlay(!isPlaying)
  }
}

 

  const getTime =(time)=>{
      return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) 
      )
  }
  

  const dragHandler=(e)=>{
    audioRef.current.currentTime=e.target.value
    setInfo({
      ...songInfo,
      currentTime:e.target.value,
    })
  }

  const skipTrack =(direction)=>{
    let currentIndex = songs.findIndex(song=> song.id === currentSong.id)
    if(direction === 'skip-forward'){
      setCurrent(songs[(currentIndex + 1) % songs.length])
  }

  if(direction === 'skip-back'){
    if((currentIndex - 1) % songs.length === -1){
      setCurrent(songs[songs.length -1])
      playAudio(isPlaying,audioRef)
      return;
    }
    setCurrent(songs[(currentIndex - 1) % songs.length])
  }
  playAudio(isPlaying,audioRef)
    
}

useEffect(()=>{
  const newSongs = songs.map(song=>{
    if(song.id=== currentSong.id){
        return {...song,active:true}
    }else{
        return {...song,active:false}
    }
})

        setSongs(newSongs);

},[currentSong])
 

  return (
    <div className='player min-h-[20vh] flex flex-col items-center justify-between'>
        <div className="time-control w-[50%]  flex">
        <p className='p-4'>{getTime(songInfo.currentTime)}</p>
        <input  onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" name="" id="" className='w-full py-4' />
        <p className='p-4'>{songInfo.duration ? getTime(songInfo.duration) :'0:0'}</p>
    </div>
    <div className="play-control flex justify-between items-center p-4 w-[35%]">
        <AiFillLeftSquare size={60} onClick={()=>skipTrack('skip-back')} className='cursor-pointer' />
       {isPlaying ? <AiFillPauseCircle fill='purple' size={60} onClick={playSongHandler}  className='cursor-pointer' /> : <AiFillPlayCircle size={60} onClick={playSongHandler}  className='cursor-pointer' />}
        <AiFillRightCircle onClick={()=>skipTrack('skip-forward')}  size={60}  className='cursor-pointer' />
    </div>
    
    </div>
  )
}

export default Player