function CreateQuestion({handleInputChange,addQuestion,ques}){
    return (
        <div>
        <label htmlFor="question">Question</label><br />
        <textarea name="que" id="question"  rows="3" required="required" placeholder="question here" value={ques.que} onChange={handleInputChange}></textarea><br />
        
        <label htmlFor="a">a.</label>
        <textarea name="a" id="a"  rows="3" required="required" value={ques.a} onChange={handleInputChange}></textarea><br />
        
        <label htmlFor="b">b.</label>
        <textarea name="b" id="b"  rows="3" required="required" value={ques.b} onChange={handleInputChange}></textarea><br />
        
        <label htmlFor="c">c.</label>
        <textarea name="c" id="c"  rows="3" required="required" value={ques.c} onChange={handleInputChange}></textarea><br />
        
        <label htmlFor="d">d.</label>
        <textarea name="d" id="d"  rows="3" required="required" value={ques.d} onChange={handleInputChange}></textarea><br />
        
        <label htmlFor="ans">Answer</label><br />
        <input name="ans" id="ans"  rows="3" required="required" value={ques.ans} onChange={handleInputChange}></input>

        <button onClick={addQuestion}>Add</button>
     </div>);

}

export default CreateQuestion;