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
  description:{
    type: String,
    required: true 
  },
  resultLink:{
    type: String,
  },
  slug:{
    type: String,
  },
  dates: [importantDateSchema] ,
  fees: [feeSchema],
  
  ageLimits: [extraInfoSchema],

  importantLinks: [importantLinksSchema]

})


const JobResult = mongoose.model('JobResult' , jobResultSchema)

module.exports = JobResult