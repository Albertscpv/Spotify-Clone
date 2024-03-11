import {Pause, Play} from '../components/Player'
import { usePlayerStore } from '@/store/playerStore'


export function CardPlayButton ({id, size ='small'}){

    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic} = usePlayerStore(state => state )



const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    const handleClick = () =>{
        setCurrentMusic({
            playlist: {
            id
            }
        })
        setIsPlaying(!isPlaying)
    }

const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id 

return(
    <button onClick={handleClick}
    className='card-play-button rounded-full bg-green-500 p-4  hover:scale-10 transition hover:bg-green-400 '>
    {isPlayingPlayList ? <Pause/> : <Play/>}
    </button>
)



}


