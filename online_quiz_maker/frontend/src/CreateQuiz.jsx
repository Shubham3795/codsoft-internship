import { useState } from "react";
import CreateQuestion from "./CreateQuestion";
import EditQuestion from "./EditQuestion";

function CreateQuiz() {
    const [ques, setQues] = useState({ que: "", a: "", b: "", c: "", d: "", ans: "" })
    const [quizQues, setQuizQues] = useState([]);
    const [index, setIndex] = useState(0);
    const [isEditOn, setEdit] = useState(false);

    const handleInputChange = (e) => {
        // debugger
        const { name, value } = e.target;

        setQues((preValue) => ({
            ...preValue, [name]: value,
        }));

    }

    const deleteQuestion = (e) => {
        // debugger
        const questionNumber = parseInt(e.target.value, 10);
        const newArr = quizQues.filter((item) => quizQues.indexOf(item) !== questionNumber);
        setQuizQues(newArr);
        console.log(e.target.value);
    }

    // const editQuestion=(e)=>{
    //     setEdit(true)
    //     const questionNumber = parseInt(e.target.value, 10);
    //     const newArr=quizQues.filter((item)=>item.qNo===questionNumber);
    //     setQues(newArr);
    // }

    const editQuestion = (e) => {

        const indexNo = parseInt(e.target.value, 10);
        setIndex(indexNo);
        setQues(quizQues[indexNo])
        setEdit(true);
    };
    const saveQuestion = () => {
        // debugger
        const updatedQuiz = quizQues.map((ele) => ((quizQues.indexOf(ele) === index) ? ques : ele))
        setQuizQues(updatedQuiz)
        setEdit(false)
        setQues({ que: "", a: "", b: "", c: "", d: "", ans: "" });
    }

    // const deleteQuestion = (e) => {

    //     const questionNumber = parseInt(e.target.value, 10);

    //     // Use the callback form of setQuizQues to ensure you have the latest state
    //     setQuizQues((prevQuizQues) => {
    //         debugger;
    //         const newArr = prevQuizQues.filter((item) => item.qNo !== questionNumber);
    //         console.log(newArr);
    //         return newArr;
    //     });

    //     console.log(e.target.value);
    // };

    const addQuestion = () => {

        // console.log(ques)

        setQuizQues((preValue) => (
            [...preValue, ques]
        ));
        setQues({ que: "", a: "", b: "", c: "", d: "", ans: "" });
    }

    return (<>
        <div>
            { isEditOn ? <EditQuestion handleInputChange={handleInputChange} 
                        saveQuestion={saveQuestion} ques={ques}></EditQuestion> 
                        :
                        <CreateQuestion handleInputChange={handleInputChange} 
                        addQuestion={addQuestion} ques={ques}></CreateQuestion>
            }
            </div>
        {quizQues.map(e => <div>{e.que}<br />{e.a}<br />{e.b}<br />{e.c}<br />
            {e.d}<br />{e.ans}<br />
            <button onClick={editQuestion} value={quizQues.indexOf(e)}>edit</button>
            <button onClick={deleteQuestion} value={quizQues.indexOf(e)}>delete</button>
        </div>)}
        {/* onClick={deleteQuestion(e.qNo)} */}

    </>);
}

export default CreateQuiz;