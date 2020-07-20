import React from 'react';

const ThemeContext = React.createContext('red');



function Toolbar(){
    return (
        <ThemeButton />
    )
}

class ThemeButton extends React.Component{
    static contextType = ThemeContext;
    render(){
        console.log(this.context)
        return(
            
            <div style={{width:'100px',height:'100px',background:`${this.context}`}}>

            </div>
        )
    }
}

class MyContext extends React.Component{
    render(){
        return (
        <ThemeContext.Provider value={'green'}>
            <Toolbar />
        </ThemeContext.Provider>
        )
        
    }
}
export default MyContext;