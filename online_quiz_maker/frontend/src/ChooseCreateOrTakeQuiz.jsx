import { useNavigate } from 'react-router-dom';
import './ChooseCreateOrTakeQuiz.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ChooseCreateOrTakeQuiz(){

    const navigate= useNavigate();
    const create=()=>{
        navigate("/create-quiz");
    }
    const take=()=>{
        navigate("/take-quiz");
    }

    return (
        <div className='baseDiv'>
            <div className='text-center heading'>WELCOME SHUBHAM <p>make you choose and let's get started</p></div>
            <div className='wrapping'>
                {/* <div className='choice' onClick={create}>Create Quiz</div>
                <div className='choice' onClick={take}>Take quiz</div> */}
                <div className="card text-center mb-3" style={{width: '18rem',display:'inline-block'}}>
                    <div className="card-body">
                        <h5 className="card-title">Take a Quiz</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick={take}>Take</button>
                    </div>
                </div>
                <div className="card text-center mb-3" style={{width: '18rem',display:'inline-block'}}>
                    <div className="card-body">
                        <h5 className="card-title">Create a Quiz</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-primary" onClick={create}>Create</button>
                    </div>
                </div>

            </div>
            go to dashboard
        </div>
    );
}

export default ChooseCreateOrTakeQuiz;