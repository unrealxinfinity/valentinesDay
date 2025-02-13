
import { useEffect,useRef, useState} from "react";
const timeOut=2000 //ms
export default function TextBox({States=null,dispatch=null,Macros=null}){
    let timeOutRef = useRef(null);
    const [isTimedOut,setIsTimedOut] = useState(false);
    useEffect(()=>{
        if(States.state === 2){
            
        timeOutRef = setTimeout(()=>{
            setIsTimedOut(true)
        },timeOut)
        return ()=>{
            clearTimeout(timeOutRef.current);
        }
        }
    },[States.state])
    const determineText =(States)=>{
        switch(States.state){
            case 0:
                return (
                    <div className="zcool-kuaile-regular boxText">
                        <p >{"这盒子看起来挺神秘的，好奇不，想要打开吗？"}</p>
                    </div>
                );
            case 1:
                return (
                    <div className="zcool-kuaile-regular boxText" key={'text2'}>
                        <p >{"你真的确定要打开吗？"}</p>
                        <p> {"这不是潘多拉盒子吗，看起来挺可爱的，搞不好是病毒。。。"} </p>
                    </div>
                );
            case 2:
                return  (
                    <div className="zcool-kuaile-regular boxText" key={'text3'} >
                        {!isTimedOut?<p>
                            {"好吧，你赢了。"}
                        </p>:null}
                        {!isTimedOut?<p>
                            {"小盒子，打开来！"}
                        </p>:null}
                        {isTimedOut
                        ?<p>
                            {"情人节快乐宝宝!"}
                        </p>:null}
                    </div>
                )
            default:
                return (
                    <></>
                );
        }
    }
    return determineText(States);
}