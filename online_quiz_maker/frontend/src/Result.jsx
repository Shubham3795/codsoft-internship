import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Result(){
    const location=useLocation();
    const data=location.state&&location.state.array;
    const [score,setScore]=useState(0);
    const [correct,setCorrect]=useState(0);
    const [unattempted,setUnattemped]=useState(0);
    const [wrong,setWrong]=useState(0);

    useEffect(()=>{
        data.map((d)=>{
            if(d.givenAns===""){
                setUnattemped((pre)=>pre+1);
            }else if(d.ans===d.givenAns){
                setScore((pre1)=>pre1+1);
                setCorrect((pre2)=>pre2+1);
            }else{
                setWrong((pre3)=>pre3+1);
            }
        })
    },[])
    return (
        <div>
        <div>{data.map((d)=>
        <div>{d.Q}
            <div>{d.opt.a}<br />{d.opt.b}<br />{d.opt.c}
            </div>
            <div>{`Answer : ${d.ans}`}</div>
        </div>
                  
        )}</div>
        {`score=${score}`}{`correct=${correct}`}{`wrong=${wrong}`}{`unattempted=${unattempted}`}
        </div>
    );
}

export default Result;