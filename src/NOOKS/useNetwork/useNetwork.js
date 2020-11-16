import {useEffect, useState} from "react";

export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(window.navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === "function"){
            onChange(window.navigator.onLine);  // const handleNetworkChange = (online)
        }
        setStatus(window.navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);

    return status;
}