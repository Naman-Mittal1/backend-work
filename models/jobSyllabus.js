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

const jobSyllabusSchema = new mongoose.Schema({
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

// ,{timestamps: true}

const JobSyllabus = mongoose.model('JobSyllabus' , jobSyllabusSchema)

module.exports = JobSyllabus