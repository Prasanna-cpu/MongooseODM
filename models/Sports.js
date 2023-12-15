import mongoose, { Mongoose } from "mongoose";


const SportsSchema=new mongoose.Schema({
  Name: { type: String, required: true,trim:true},
  Age: {type:String,required:true,min:18,max:40},
  Sports:{type:String,required:true,trim:true},
  Country: { type: String, trim: true },
  Worth:{
    type:mongoose.Decimal128,
    validate: v=>v>=10
  },
  achievement:{type:Array},
  isAboveThirty:{type:Boolean},
  comments:[
    {value:{type:String},published:{type:Date,default:Date.now}}
  ]
});


//Creating Model
const SportsModel=mongoose.Model('Sports',SportsSchema)
