
export default function TextBox({States=null,dispatch=null,Macros=null}){
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
                <div className="zcool-kuaile-regular boxText" key={'text3'}>
                    <p>
                       {"好吧，你赢了。"}
                    </p>
                    <p>
                        {"小盒子，打开来！"}
                    </p>
                </div>
            default:
                return (
                    <></>
                );
        }
    }
    return determineText(States);
}