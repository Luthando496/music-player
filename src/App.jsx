import { useState,useRef } from 'react'
import Library from './components/Library'
import Nav from './components/Nav'
import Player from './components/Player'
import Song from './components/Song'
import data from './data'




function App() {
  const [songs,setSongs]= useState(data())
  const [current,setCurrent]= useState(songs[0])
  const [isPlaying,setIsPlay]= useState(false)
  const [libraryStatus,setLibrary]= useState(false)
  const audioRef = useRef(null)
  const [songInfo,setInfo]=useState({
    currentTime:0,
    duration:0,
  })


  const timeUpdateHandler=(e)=>{
    // console.log(e.target)
    setInfo({
      ...songInfo,
      currentTime:e.target.currentTime,
      duration:e.target.duration
    })

  }

  const songEndHandler=async()=>{
    let currentIndex = songs.findIndex(song=> song.id === current.id)
     await setCurrent(songs[(currentIndex + 1) % songs.length])
      if(isPlaying) audioRef.current.play();
  }


  return (
    <div className="bg-black h-screen">
      <Nav libraryStatus={libraryStatus} setLibrary={setLibrary} />
      <Song currentSong={current} />
      <Player setSongs={setSongs} setCurrent={setCurrent} songs={songs} audioRef={audioRef} songInfo={songInfo} setInfo={setInfo} isPlaying={isPlaying} setIsPlay={setIsPlay} currentSong={current} />
      <Library  libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrent={setCurrent} songs={songs} />
      <audio  onTimeUpdate={timeUpdateHandler} ref={audioRef} src={current.audio} onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler}></audio>
    </div>
  )
}

export default App
