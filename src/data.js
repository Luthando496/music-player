import { v4 as uuidv4 } from 'uuid';

const ChillHop=()=>{
    return[
        {
            name:"Touch My Blood",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/01 Touch My Blood.mp3',
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            artist:"AKA Forbes",
            active:true,
        },
        {
            name:"Beyonce",
            artist:"AKA Forbes",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/03 Beyonce.mp3',
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            active:false,
        },
        {
            name:"Sweet Fire",
            artist:"AKA Forbes",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/07 Sweet Fire.mp3',
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            active:false,
        },
        {
            name:"The World Is Yours",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/12 The World Is Yours.mp3',
            artist:"AKA Forbes",
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            active:false,
        },
        {
            name:"Me and You",
            artist:"AKA Forbes",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/13 Me and You.mp3',
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            active:false,
        },
        {
            name:"Caiphus Song",
            artist:"AKA Forbes",
            cover:"https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2018/05/08200228/aka-touch-my-blood-album-zip-yomzansi-12.jpg",
            audio:'./music/08 Caiphus Song.mp3',
            id:uuidv4(),
            color:['#205950','#2ab3bf','#ddff'],
            active:false,
        },
    ]
}


export default ChillHop;