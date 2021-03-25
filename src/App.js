import React,{useState} from 'react'
import  useFetchJobs from './useFetchJobs'
import {Container} from 'react-bootstrap'
import Job from './job'
import SearchForm from './SearchForm'




function App() {
  const [params, setParms] = useState({})
  const [page, setPage] = useState(1)
  const {jobs,loading,error }=useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParms(prevPrams =>{
      return {...prevPrams,[param]: value}
    })  
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Jobs For You</h1>
      
      <SearchForm
       params={params} onParamChange={handleParamChange}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job}/>
      })}
        
    </Container>
  )
}

export default App;
