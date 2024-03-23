import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Error Occurred</h2>
            <Link to={'/'}><button className="btn btn-primary">Go back Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;