import React, { createContext, useRef, useEffect,useContext} from 'react';

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
    }
  }, []);

  return (
    <CanvasContext.Provider value={[canvasRef, contextRef]}>
      <canvas ref={canvasRef} id='canvas' />
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => useContext(CanvasContext);