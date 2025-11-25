const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must Provide a Name"],
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false
    }
},{ 
  timestamps: true, 
  versionKey: false 
}
);

module.exports = mongoose.model("Tasks",TaskSchema)