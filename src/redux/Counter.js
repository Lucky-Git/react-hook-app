import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


function Counter({value,onIncrement,onDecrement}){
    return (
        <div>
            当前数值为：{value}
            <button onClick={onIncrement}>+</button>     
            <button onClick={onDecrement}>-</button>     
        </div>
    )
}
const reducer = (state=0,action) => {
    switch (action.type){
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        default:
            return state;
    }
  }
  
  const store = createStore(reducer);


const render=()=>{
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={()=>store.dispatch({type:'add'})}
            onDecrement={()=>store.dispatch({type:'minus'})}
        />,
        document.getElementById('root1')
    )
}
render();
store.subscribe(render);
