import { Link } from "react-router-dom";


const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite ,location,job_type,salary}=job
    return (
        
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="w-[500px] h-[300px]" src={logo} alt="Shoes" /></figure>
  <div className="card-body justify-center">
    <h2 className="card-title justify-center">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py2 font-bold border rounded border-black mr-4">{remote_or_onsite}</button>
        <button className="px-5 py2 font-bold border rounded border-black mr-4">{location}</button>
    </div>
    <div className="card-actions justify-center ">
     <Link to={`/job/${id}`}> <button className="btn btn-primary ">Apply Now</button></Link>
    </div>
  </div>
</div>
        
    );
};

export default Job;