import { ChangeEvent, useEffect, useState } from 'react'
import { jobList } from '../../constants'
import Jobs from '../Jobs/Jobs'
import { Job } from '../../utils/types'
import { JobService } from '../../services'

type Props = {}

const JobList = (props: Props) => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    //hook with an empty dependency array [ ] to trigger the API call only once during the initial component render
    useEffect(() => {
        setLoading(true);
        JobService.getJobs()
            .then((data) => {
                setJobs(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredJobs = jobList.filter(job => job.job_title.toLowerCase().includes(e.target.value.toLowerCase()))
        setJobs(filteredJobs)
    }

   /* const apply = (isbn: string) => {
        const filteredBooks = bookList.filter(book => book.isbn !== isbn)
        setBooks(filteredBooks)
    }
    */

    return (
        <>
            <h2 className="m-2">Find a book...</h2>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder='Search for a book...'
                    ></input>
                </div>
            </div>
            {
                // Loading data
                loading &&
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                // Handle errors
                error &&
                <div className="row">
                    <div className="col-12 col-md-3 m-3">
                        <div className="alert alert-danger" role="alert">
                            <h4 className="alert-heading">Unable to render data!</h4>
                            <p>{error?.response?.data?.message || error?.message}</p>
                            <hr />
                            <p className="mb-0">
                                Something went wrong, please try again.
                            </p>
                        </div>
                    </div>
                </div>
            }

            
           
           
        </>
    )
}

export default JobList