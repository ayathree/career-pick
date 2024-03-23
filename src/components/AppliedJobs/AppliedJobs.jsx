import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs]= useState([]);
    const[displayedJobs, setDisplayedJobs]= useState([])
    useEffect(()=>{
        const storedJobs = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = [];
            for(const id of storedJobs ){
                const job = jobs.find(job => job.id=== id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayedJobs(jobsApplied)
        }
    },[jobs])

    const handleFilter =filter=>{
        if (filter ==='all') {
            setDisplayedJobs(appliedJobs)

            
        }
        else if (filter ==='remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayedJobs(remoteJobs);
            
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite');
            setDisplayedJobs(onsiteJobs);
            
        }
    }
    return (
        <div>
            <h2 className="text-2xl">Applied jobs: {appliedJobs.length}</h2>
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleFilter('all')}><a>All</a></li>
    <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
    <li onClick={()=>handleFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>
            <ul>
                {
                    displayedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;