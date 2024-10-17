import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountDown] = useState(5);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            navigate("/home");
        }, 5000);

        return () => clearInterval(countdownInterval);

    }, [navigate]);

    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Redirecting to home in {countdown} seconds...</p>
        </div>
    );
}

export default ErrorPage