import Box0 from '../assets/giftbox0.png';
import { useState,useRef} from 'react';
import AnimatedCuteBox from './AnimatedCuteBox';
import Explosion from './Explosion';
import Roses from './Roses';
import CustomMusic from './Music';
export default function CuteBox ({States=null,dispatch=null,Actions=null,Macros=null}){
    const [animated,setAnimated] = useState(false)
    const AnimatedCuteBoxRef = useRef(null);
    const clickHandler = ()=>{
        dispatch({type:Actions.changeState})
    }
    const determineBoxStateElem = ()=>{
        switch(States.state){
            case 0:
                return (
                    <div className="box" onClick={clickHandler}>
                        <img src={Box0} key={'box'} alt='A gift box'/>
                    </div>
                );
            case 1:
                return (
                    <div className="box bigger" key={'boxbigger'} onClick={clickHandler}>
                        <img src={Box0} alt='A gift box'/>
                    </div>
                )
            case 2:
                return (
                    <div className="box bigger" key={'boxbigger'}>
                        <AnimatedCuteBox animated={animated} setAnimated={setAnimated } anchorRef={AnimatedCuteBoxRef} />
                        <Explosion explode={animated} anchorRef={AnimatedCuteBoxRef} />
                        <Roses animate={animated}/>
                        <CustomMusic animate={animated}/>
                    </div>
                )
            default:
                <></>
        }
    }

    return determineBoxStateElem(States)
}