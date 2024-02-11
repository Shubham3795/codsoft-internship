import { useState} from 'react';
import './TakeQuiz.css';
import { useNavigate } from 'react-router-dom';

function TakeQuiz(){

    const quizWhole=[{QN0:1,Q:"2+4=?",opt:{a:"6",b:"4",c:"8",d:""},ans:"a",givenAns:"", visited:true},
        {QN0:2, Q:"4+4=?",opt:{a:"60",b:"40",c:"8"},ans:"c",givenAns:"", visited:false},
        {QN0:3, Q:"56+4=?",opt:{a:"60",b:"40",c:"8"},ans:"a",givenAns:"", visited:false}];

    let [index,setIndex]=useState(0);
    const [quiz,setQuiz] = useState(quizWhole);
    const navigate=useNavigate();
    
    let [visited,setVisited]=useState(1);
    let [answered,setAnswered]=useState(0);

    const next = (e) => {
        // debugger
        if (quiz[index+1].visited === false) {
            const updatedQuiz = quiz.map((ques) =>
            ques.QN0 === +e.target.value+1 ? { ...ques, visited:true } : ques
          );
      
          setQuiz(updatedQuiz);
          setVisited((prevVisited) => prevVisited + 1);
        }else{}
        setIndex((prevIndex) => prevIndex + 1);
        // console.log(index);
      };
      
    const pre=()=>{
        // console.log(index);
        setIndex((e)=>e-1);
        // console.log(index);
    }
    
    const givenAnswer=(e)=>{
        // debugger
        const indexValue=parseInt(e.target.name,10);
        if(quiz[indexValue].givenAns===""){
            setAnswered((n)=>n+1);
        }
        const updatedQuiz = quiz.map((ques) =>
        quiz.indexOf(ques) === indexValue ? { ...ques, givenAns:e.target.value } : ques
        );
        setQuiz(updatedQuiz);
    }

    const clearChoice=(e)=>{
        // debugger
        const indexValue=parseInt(e.target.name,10);
        const updatedQuiz = quiz.map((ques) =>
        quiz.indexOf(ques) === indexValue ? { ...ques, givenAns:"" } : ques
        );
        setQuiz(updatedQuiz);
        setAnswered((n)=>n-1);
    }

    const goToQues=(e)=>{
        // debugger
        if (quiz[+e.target.value].visited === false) {
            const updatedQuiz = quiz.map((ques) =>
            ques.QN0 === +e.target.value+1 ? { ...ques, visited:true } : ques
          );
      
          setQuiz(updatedQuiz);
          setVisited((prevVisited) => prevVisited + 1);
        }
        setIndex(+e.target.value);
    }

    const submit=()=>{
        if(window.confirm("You are trying to SUBMIT the quiz. \n Are you sure")===true){
            navigate('/result',{state:{array:quiz}})
        }else{

        }
    }


    return (
        <>
            <div >
                <div className='indicator'>Answered={answered}</div>
                <div className='indicator'>visited={visited}</div>
                <div className='indicator'>unvisited={quizWhole.length - visited}</div>
            </div>
            <div className='quesSelector'>
                {quiz.map((i) => <button
                    className='individualQue'
                    // style={{
                    //     backgroundColor: (i.givenAns !== "" || i.visited) ? 'white' : 'green'
                    // }}
                    style={{
                        backgroundColor: (() => {
                          if (i.givenAns !== "") {
                            return 'green'; // Condition 1
                          } else if (i.visited) {
                            return 'lightblue'; // Condition 2
                          } else {
                            return 'white'; // Default condition
                          }
                        })()
                      }}
                      
                    value={quiz.indexOf(i)}
                    onClick={goToQues}>
                    {quiz.indexOf(i) + 1}
                </button>)}
            </div>
            <div>
                <button onClick={submit}>submit</button>
            </div>
            <div>
                 <ol>{quiz.at(index).QN0}.{quiz.at(index).Q}

                    {Object.entries(quiz.at(index).opt).map(([k, v]) => <div>
                        <input type="radio" id={`${k}_${quiz.at(index).QN0}`} checked={quiz.at(index).givenAns===k} name={index} onChange={givenAnswer} value={k}></input>
                        <label htmlFor={`${k}_${quiz.at(index).QN0}`} >{v}</label></div>)}
                </ol>
            </div>
            <div>
                <button 
                    disabled={index === 0}
                    onClick={pre}>pre</button>

                <button 
                    disabled={quiz.at(index).givenAns===""}
                    onClick={clearChoice}
                    name={index}>clear</button>

                <button 
                    disabled={index === quiz.length-1}
                    value={quiz.at(index).QN0}
                    onClick={next}>next</button>
            </div>
        </>
    );
}

export default TakeQuiz;