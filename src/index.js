import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Example from './test';
import MyContext from './context';
import Counter from './redux/Counter';
import { createStore } from 'redux'
// const reducer = (state=0,action) => {
//   switch (action.type){
//       case 'add':
//           return state+1;
//       case 'minus':
//           return state-1;
//       default:
//           return state;
//   }
// }

// const store = createStore(reducer);


function tick(){
  const element = (
    <div>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
      <MyContext/>
      <Example />
      {/* <Counter
            value={store.getState()}
            onIncrement={()=>store.dispatch({type:'add'})}
            onDecrement={()=>store.dispatch({type:'minus'})}
        />, */}
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick,1000)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
