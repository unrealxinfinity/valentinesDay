import { useEffect,useRef, useState } from "react";

function isScreenMaxWidth(maxWidth) {
    return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
  }
export default function Particle({ animate = false, setAnimateParticles = null, position = null, direction = null, canvas = null, context = null, anchorPoint = null, delay = 0, image = null }) {
  let speed = 100;
  let gravity = 9;
  let particleRef = useRef(null);

  if(isScreenMaxWidth(600)){
    speed = 35;
    gravity = 5;
  }
  else if(isScreenMaxWidth(400)){
    speed = 20;
    gravity = 2;
  }
  const [initPos, setInitPos] = useState(null);
  const [pos, setPos] = useState(position);
  const [time, setTime] = useState(null);

  function calculateNewPosition(t) {
    const newPos = {
      x: initPos.x + direction.x * speed * t ,
      y: initPos.y + direction.y * speed * t + 0.5 * gravity * t * t
    };
    return newPos;
  }

  // Initialize time
  useEffect(() => {
    setTime(Date.now());
    setInitPos(position);
  }, []);

  // Handle animation
  useEffect(() => {
    if (animate) {
      particleRef.current.style.display = "block";
      const interval = setInterval(() => {
        const deltaTime = (Date.now() - time) / 1000;
        const newPos = calculateNewPosition(deltaTime);
        setPos(newPos);
      }, 1000 / 30);
      if (pos.y > window.innerHeight) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [animate, time]);
  

  return (
    <div className="particles" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} ref={particleRef}>
      <img src={image} alt="me and my gf" />
    </div>
  );
}