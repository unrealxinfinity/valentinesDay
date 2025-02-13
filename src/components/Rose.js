import { useEffect, useState, useRef } from "react";

const interval = 1000 / 60;

export default function Rose({ animate = null, position = null, delay = null, image = null }) {
    let intervalEvent = useRef(null);
    let timeoutEvent = useRef(null);
    const initialPosRef = useRef(position);
    const initialTimeRef = useRef(Date.now());
    const [pos, setPos] = useState(position);
    let roseRef = useRef(null);
    const gravity = 0.0005;
    const speed = 0;

    function getNewPos(t) {
        const newpos = {
            x: initialPosRef.current.x,
            y: initialPosRef.current.y + speed * t + 0.5 * gravity * t * t // 0 initial velocity, only gravity accel
        };
        return newpos;
    }

    useEffect(() => {
        if (animate) {
            timeoutEvent.current = setTimeout(() => {
                initialTimeRef.current = Date.now();
                intervalEvent.current = setInterval(() => {
                    const t = Date.now() - initialTimeRef.current;
                    const newPos = getNewPos(t);
                    setPos(newPos);
                }, interval);
            }, delay);
        }
        return () => {
            clearInterval(intervalEvent.current);
            clearTimeout(timeoutEvent.current);
        };
    }, [animate, delay]);
    return (
        <div className="roses" style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} ref={roseRef}>
            <img src={image} alt="a rose" />
        </div>
    );
}