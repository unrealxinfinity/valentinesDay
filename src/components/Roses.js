import { useEffect , useState} from "react";
import RoseImg from "../assets/rose.png"
import Rose from "./Rose";
import HeartImg from "../assets/heart.png";
export default function Roses({animate=null}){
    const [preloadedImages,setPreloadedImages] = useState([]);
    const [finalRoses,setRoses] = useState([]);
    const numRoses = 52.0;
    const baseRangeX = [-window.innerWidth/2,window.innerWidth];
    const baseRangeY = [-window.innerHeight,0];
    function randRange(min,max){
        return Math.random() * (max - min) + min
    }
   
        
    useEffect(()=>{
        const roses = []
        for(let i = 0;i<numRoses;i++){
            const img = Math.random()>0.3?RoseImg:HeartImg;
            roses.push(img);
        }
        const loadImages = async () => {
            const loadedImages = await Promise.all(roses.map(src => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve(img);
                });
            }));
            setPreloadedImages(loadedImages);
        };
        loadImages();
    },[])
    useEffect(()=>{
        if(animate && preloadedImages.length>0){
            const roses = []
            for (let i=0 ;i<numRoses;i++){
                const pos={
                    x:randRange(baseRangeX[0],baseRangeX[1]),
                    y:randRange(baseRangeY[0],baseRangeY[1])
                }
                const delay = randRange(0,5000)
                const image = preloadedImages[i].src;
                roses.push({
                    position: pos,
                    delay: delay,
                    image: image
                })
            }
            setRoses(roses)
        }
    },[animate,preloadedImages])

    return finalRoses.map((rose,index)=>{
        return <Rose key={'rose'+ index} animate={animate} position={rose.position} delay={rose.delay} image={rose.image}/>
    })
}