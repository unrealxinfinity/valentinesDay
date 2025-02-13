import { useEffect, useState } from "react";
import { useCanvas } from "./hooks/CanvasContext";
import Particle from "./Particle";
import Particle1 from '../assets/explosionParticles/particle1.jpg';
import Particle2 from "../assets/explosionParticles/particle2.jpg";
import Particle3 from "../assets/explosionParticles/particle3.jpg";
import Particle4 from "../assets/explosionParticles/particle4.jpg";
import Particle5 from "../assets/explosionParticles/particle5.jpg";
import Particle6 from "../assets/explosionParticles/particle6.jpg";
import Particle7 from "../assets/explosionParticles/particle7.jpg";
import Particle8 from "../assets/explosionParticles/particle8.jpg";
import Particle9 from "../assets/explosionParticles/particle9.jpg";
import Particle10 from "../assets/explosionParticles/particle10.jpg";
import Particle11 from "../assets/explosionParticles/particle11.jpg";

export default function Explosion({explode=false,anchorRef=null}){
    const numParticles=8;
    const baseRangeX = [-5,5];
    const baseRangeY = [-1,2];
    const availableAngleRange =[Math.PI/6,Math.PI-Math.PI/6]   ;
    const maxDelay = 5000 //ms
    const particleImages = [Particle1,Particle2,Particle3,Particle4,Particle5,Particle6,Particle7,Particle8,Particle9,Particle10,Particle11]
    const [preloadedImages, setPreloadedImages] = useState([]);

    const [canvasRef,contextRef] =useCanvas();
    const [particles, setParticles] = useState([]);
    const [animateParticles,setAnimateParticles] = useState(false);
    function getPositionOfAnchor(){
        const rect = anchorRef.current.getBoundingClientRect();
        const center = {
            x:(window.innerWidth-(rect.left+rect.right))/2,
            y:(rect.top - rect.bottom)/2,
        }
        return center
    }
    function randRange(min,max){
        return Math.random() * (max - min) + min
    }

    //initialize explosion
    useEffect(()=>{

        const loadImages = async () => {
            const loadedImages = await Promise.all(particleImages.map(src => {
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
        if(explode && preloadedImages.length>0){
            const particles = [];
            for (let i=0;i<numParticles;i++){
                const posOffset = {
                    x:randRange(baseRangeX[0],baseRangeX[1]),
                    y:randRange(baseRangeY[0],baseRangeY[1])
                }
                const center = getPositionOfAnchor();
                const pos = {
                    x:center.x+posOffset.x,
                    y:center.y+posOffset.y
                }
                const angle = randRange(availableAngleRange[0],availableAngleRange[1])
                const direction = {
                    x:Math.cos(angle),
                    y:-Math.sin(angle)
                }
                const delay = randRange(0,maxDelay)
                particles.push({
                    position: pos,
                    direction: direction,
                    delay: delay,
                    image: preloadedImages[i],
                    anchorPoint: center
                });        
            }
            setParticles(particles)
            setAnimateParticles(true)
        }
        
    },[explode,preloadedImages])
    
    return (
        <div>
            {particles.map((particle, index) => (
                <Particle
                key={'particle'+index}
                animate={animateParticles}
                setAnimateParticles={setAnimateParticles}
                position={particle.position}
                direction={particle.direction}
                canvas={canvasRef}
                context={contextRef}
                anchorPoint={particle.anchorPoint}
                delay={particle.delay}
                image={particle.image.src}
                />
          ))}
        </div>
        
    )
}
