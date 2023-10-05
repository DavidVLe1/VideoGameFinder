import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PlatformList() {
    const [platforms, setPlatforms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/platform')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else if (res.status >= 500) {
                    return res
                        .json()
                        .then(error =>
                            Promise.reject(new Error(error.message))
                        );
                } else {
                    // All other errors
                    return Promise.reject(
                        new Error(`Unexpected status code ${res.status}`)
                    );
                }
            })
            .then(data => {
                setPlatforms(data);
            })
            .catch(error => {
                // console.error(error); // Log for debugging
                navigate('/error', { state: { error } });
            });
    }, []); // This happens every time the component is mounted
    console.log(platforms);
    return (
        <>
            <label htmlFor="platform" className="form-label">
                Platforms
            </label>
            <select
                // multiple
                name="platforms"
                id="platforms"
                className="form-select">
                <option value='' disabled>
                    [Select Platforms]
                </option>
                {platforms.map(platform => (
                    <option value={platform.platformId} key={platform.platformId}>
                        {platform.platformName}
                    </option>
                ))}
            </select>
        </>
    );
}
