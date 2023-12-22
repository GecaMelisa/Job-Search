import React from 'react'
import './jobs.css'
import { useState, useEffect } from 'react'

type Props = {}

const Jobs = (props: Props) => {
  const [jobs, setJobs] = useState([
    {
      job_title: "Frontend Developer",
      job_status: "ACTIVE",
      company_name: "IBU"
    },
    {
      job_title: "Project Manager",
      job_status: "ACTIVE",
      company_name: "Mistral"
    },
    {
      job_title: "Full-Stack Developer",
      job_status: "ACTIVE",
      company_name: "Deloitte"
    },
    {
      job_title: "Graphic Designer",
      job_status: "ACTIVE",
      company_name: "Catwalk"
    },
  ])

  useEffect(() => {
    
  }, [ ,jobs])

  return (
    <div className='jobs-container'>
      {
        jobs.map((item, index) => {
          return (
            <div className='job'>
              <span className='job-title'>{item.job_title}</span>
              <span className='job-status'>{item.job_status}</span>
              <span className='company-name'>{item.company_name}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Jobs