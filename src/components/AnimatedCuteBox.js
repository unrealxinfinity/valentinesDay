import Box0 from '../assets/giftbox0.png';
import Box1 from '../assets/giftbox1.png';
import Box2 from '../assets/giftbox2.png';
import Box3 from '../assets/giftbox3.png';
import { useState,useEffect,useRef} from 'react';
const timePerFrame = 1000/4 //ms
export default function AnimatedCuteBox({animated=null,setAnimated=null}){
    const [currSprite,setCurrSprite] = useState(0);
    const intervalEvent = useRef(null);
    const sprites = [Box0,Box1,Box2,Box3]

   
    const animateBox = () => {
        intervalEvent.current = setInterval(() => {
          setCurrSprite((prevSprite) => {
            return prevSprite + 1;
          });
        }, timePerFrame);
      };
      
      useEffect(()=>{
        if (currSprite >= sprites.length - 1) {
            clearInterval(intervalEvent.current);
            setAnimated(true);
          }
      },[currSprite])
      useEffect(() => {
        animateBox();
        return () => {
          if (intervalEvent.current) {
            clearInterval(intervalEvent.current);
          }
        };
      }, []);

    return <img src={sprites[currSprite]} alt="A gift box" />
}