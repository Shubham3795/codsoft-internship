const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fristName:{
        type:String,
        required:true,
        maxLength:15,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
    },
    AttemptedQuiz:[{
        quizId:{
            type:String,
        },
        quizStats:[{
            totalQues:{
                type:Number,
            },
            Correct:{
                type:Number,
            },
            unAttempted:{
                type:Number,
            },
            score:{
                type:Number,
            },
        }]
    }]

})

const User = mongoose.model("User",userSchema);
export default User;