const mongoose = require('mongoose')

const importantDateSchema = new mongoose.Schema({
  title: String,
  date: String  
});

const feeSchema = new mongoose.Schema({
  category: String,
  amount: String  
});

const extraInfoSchema = new mongoose.Schema({ 
 extraInfo: String
});

const importantLinksSchema = new mongoose.Schema({
  linkName: String,
  link: String
});

const jobResultSchema = new mongoose.Schema({
  jobName: {
    type: String,
    required: true
  },
  jobShortName: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description:{
    type: String,
    required: true 
  },
  slug:{
    type: String,
  },
  dates: [importantDateSchema] ,
  fees: [feeSchema],
  
  ageLimits: [extraInfoSchema],

  importantLinks: [importantLinksSchema],
  tags: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

})


const JobResult = mongoose.model('JobResult' , jobResultSchema)

module.exports = JobResult