import React from 'react'
import './jobs.css'
import { useState, useEffect } from 'react'

type Props = {}

const Jobs = (props: Props) => {
  const [jobs, setJobs] = useState([
    {
      job_title: "job",
      job_status: "active",
      company_name: "company"
    },
    {
      job_title: "job",
      job_status: "active",
      company_name: "company"
    },
    {
      job_title: "job",
      job_status: "active",
      company_name: "company"
    },
    {
      job_title: "job",
      job_status: "active",
      company_name: "company"
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