import { useEffect, useState } from 'react';
import './time.css'

const Time = () => {
    const [count,setCount]=useState(0);
    function ujju(value){
        if(value=="" || isNaN(value) || Math.floor(Number(value))<=0){
            setCount(0);
        }
        else{
            setCount(value);
        }
    }
    useEffect(()=>{
        if(count !==0 && count !==""){
            var update=setInterval(()=>{
                setCount(count-1);
            },1000)
        }

        return ()=>{
            clearInterval(update);
        }
    },[count])
    return (
        <div className="container">
            <div className="mainContent">
                <div className="item">Enter time here:<input className="item1" onChange={(e)=>ujju(e.target.value)}/>!</div>
                <div className="item show">{count}</div>
            </div>
            
        </div>
    );
};

export default Time;