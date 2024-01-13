import NavBar from '../components/NavBar'
import Search from '../components/Search'
import JobList from '../components/JobList/JobList'
import JobListAxios from '../components/JobList/JobListAxios'


type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <NavBar />
      <Search />
      <JobList/>
      <JobListAxios />
    </>
  )
}

export default Home