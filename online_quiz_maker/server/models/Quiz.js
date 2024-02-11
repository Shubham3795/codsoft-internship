const {Schema,model, SchemaTypes} = require("mongoose");
const quizSchema = new Schema({
    topic:{
        type:String,
        required:true,
    },
    createdAt:{
        type:SchemaTypes.ObjectId,
        ref:"User",
        required:true,
    },
    createdBy:{
        type:String,
        required:true,
    },
    questions:[{
        que: {
            type:String,
            required:true,
        },
        a: {
            type:String,
            required:true,
        }, 
        b: {
            type:String,
            required:true,
        }, 
        c: {
            type:String,
            required:true,
        }, 
        d: {
            type:String,
            required:true,
        }, 
        ans: {
            type:String,
            required:true,
            maxLength:1,
        }
    }]
});

const Quiz = model("Quiz",quizSchema);
export default Quiz;