import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveStoredJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const{id}=useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id ===idInt);
    console.log(job)
    console.log(id,jobs)

    const handleToast = ()=>{

        saveStoredJobApplication(idInt)
        toast("You have apply successfully!");
    }


    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here : {job.job_title}</h2>
            <h2>Job Details of: {job.company_name} </h2>

                </div>
                <div className="border">
                    <h2 className="text-2xl">
                        Side things

                    </h2>
                    <button onClick={handleToast} className="btn btn-primary w-full">Apply</button>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;