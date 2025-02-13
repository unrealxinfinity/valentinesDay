
import '../style/App.css';
import Cinnamonroll from '../assets/cinnamonroll.mp4';
import { useReducer } from 'react';
import TextBox from './TextBox.js'
import CuteBox from './CuteBox.js';
import { useCanvas,CanvasProvider } from './hooks/CanvasContext.js';
const Macros={
  
}
const Actions = {
  changeState:'changeState'
}
const InitialStates = {
  state:0
}

function reducer(states,action){
  switch(action.type){
    case Actions.changeState:
      return {state: states.state+1}
    default:
      return {state: states.state};
  }
}
function Main() {
  const [state,dispatch]=useReducer(reducer,InitialStates);
  
  return (
    <div id="main">
      <CanvasProvider>
        <video autoPlay loop muted src={Cinnamonroll} className='background'/>
        <TextBox States={state} dispatch={dispatch} Macros={Macros}/>
        <CuteBox States={state} dispatch={dispatch} Actions={Actions} Macros={Macros}/>
      </CanvasProvider>
    </div>
  );
}

export default Main;
