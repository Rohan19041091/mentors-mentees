import mongoose from "mongoose";

const mentorSchema= new mongoose.Schema({
    name:String,
    email:{ type: String, unique: true },
    phoneNo:{ type: Number, unique: true },
    password:String,
    startTime:String,
      
    endTime:String,

    despcription:String,
    domain:String,
    experience:String,
    linkdin:String

})
const Mentor=new mongoose.model("mentor",mentorSchema)
export default Mentor