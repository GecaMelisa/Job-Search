import { Link, json, useParams } from "react-router-dom"
import Jobs from "../components/Jobs"

type Props = {}

const JobPage = (props: Props) => {
   {/* const { job_title } = useParams()
    const job = Jobs.find(j. => j.job_title === job_title)

    if (!jobs) {
        return (
            <p>The requested job does not exist.</p>
        )
    }

    */
    return (
        <div className="col-12 col-md-3 m-3">
            <Link className="btn btn-info mb-2" to="/" >Back to Jobs</Link>
           
        </div>
    )
    }
}

export default  JobPage