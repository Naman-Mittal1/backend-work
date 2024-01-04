  const express = require('express');
  const router = express.Router();
  const JobResult = require('../models/jobResult.js');
  const jobAdmitCard = require('../models/jobAdmitCard.js');
  const jobSyllabus = require('../models/jobSyllabus.js');
  const jobLatestJob = require('../models/jobLatestJob.js');
  const jobAnswerKey = require('../models/jobAnswerKey.js');
  const jobOthers = require('../models/jobOthers.js');


  /* */

  router.get('/jobResult', async (req, res) => {
    try {
      const results = await JobResult.find({}, 'jobShortName slug');
      
      const jobs = results.map(job => ({
        jobName: job.jobShortName,
        slug: job.slug
      }));


      res.json(jobs);


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/jobResult/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      console.log(slug)
      console.log("Hello")

      const jobDetails = await JobResult.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      // Handle specific Mongoose errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobresult/add', async (req, res) => {
    try {
      const jobResult = new JobResult({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      jobResult.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // router.get('/jobresult/add', async (req, res) => {
  //   res.send("Hello")
  // });


  /* */

  router.get('/jobAdmitCard', async (req, res) => {
    try {
      const admitCard = await jobAdmitCard.find({}, 'jobShortName slug');
      
      const jobNames = admitCard.map(admitCard => ({
        jobName: admitCard.jobShortName,
        slug: admitCard.slug
      }));
            
      res.json(jobNames);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/jobAdmitCard/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      // console.log(slug)
      // console.log("Hello")

      const jobDetails = await jobAdmitCard.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      // Handle specific Mongoose errors
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobAdmitCard/add', async (req, res) => {
    try {
      const jobAdmitCards = new jobAdmitCard({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      jobAdmitCards.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  /* */

  router.get('/jobSyllabus', async (req, res) => {
    try {
      const syllabus = await jobSyllabus.find({}, 'jobShortName slug');
      
      const jobNames = syllabus.map(syllabus => ({
        jobName: syllabus.jobShortName,
        slug: syllabus.slug
      }));
      
      res.json(jobNames);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  router.get('/jobSyllabus/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      const jobDetails = await jobSyllabus.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobSyllabus/add', async (req, res) => {
    try {
      const jobSyllabuses = new jobSyllabus({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      jobSyllabuses.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  /* */

  router.get('/jobLatestJob', async (req, res) => {
    try {
      const latestJob = await jobLatestJob.find({}, 'jobShortName slug');
      
      const jobNames = latestJob.map(latestJob => ({
        jobName: latestJob.jobShortName,
        slug: latestJob.slug
      }));
      
      res.json(jobNames);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/jobLatestJob/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      const jobDetails = await jobLatestJob.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobLatestJob/add', async (req, res) => {
    try {
      const jobLatestJobs = new jobLatestJob({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      jobLatestJobs.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  /* */

  router.get('/jobAnswerKey', async (req, res) => {
    try {
      const answerKey = await jobAnswerKey.find({}, 'jobShortName slug');
      
      const jobNames = answerKey.map(answerKey => ({
        jobName: answerKey.jobShortName,
        slug: answerKey.slug
      }));
      
      res.json(jobNames);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/jobAnswerKey/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      const jobDetails = await jobAnswerKey.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobAnswerKey/add', async (req, res) => {
    try {
      const answerkey = new jobAnswerKey({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      answerkey.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  /* */

  router.get('/jobOthers', async (req, res) => {
    try {
      const others = await jobOthers.find({}, 'jobShortName slug');
      
      const jobNames = others.map(others => ({
        jobName: others.jobShortName,
        slug: others.slug
      }));
      
      res.json(jobNames);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/jobOthers/details/:slug', async (req, res) => {
    try {
      const { slug } = req.params;

      if (!slug) {
        return res.status(400).json({ error: 'Invalid slug' });
      }

      const jobDetails = await jobOthers.findOne({ slug });

      if (!jobDetails) {
        return res.status(404).json({ error: 'Job details not found' });
      }

      res.json(jobDetails);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/jobOthers/add', async (req, res) => {
    try {
      const others = new jobOthers({
        jobName: req.body.jobName,
        jobShortName: req.body.jobShortName,
        description: req.body.description,
        resultLink: req.body.resultLink,
        slug: req.body.slug,
        dates: req.body.dates,
        fees: req.body.fees,
        ageLimits: req.body.ageLimits,
        importantLinks: req.body.importantLinks
      });
    
      // Save to MongoDB
      others.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  module.exports = router;