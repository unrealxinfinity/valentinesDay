
import Music from "../assets/heni.mp3"
import {useEffect,useRef} from "react";
export default function CustomMusic({animated = false}){
    const audioRef = useRef(null);
    useEffect(()=>{
        if(animated){
            audioRef.current.play();
            audioRef.current.volume = 0.5;
        }
    },[animated])
    return <audio ref={audioRef} src={Music} autoPlay loop/>
}