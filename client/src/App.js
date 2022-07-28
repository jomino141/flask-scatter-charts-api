import React, {useState, useEffect} from 'react'
import Chart from "react-apexcharts";

function App() {
    // UseState that will contain the JSON from backend.
    const [data, setData] = useState([{}])

    // Fetch JSON from API.
    useEffect(() => {
        fetch("/2d/0/1").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
            }
        )
    }, [])

    return(
        <React.Fragment>
            {// Check if data has already been fetched from the backend.
            (typeof data.options === 'undefined') ? (
                <p>Loading Chart...</p>
            ) : (
                <Chart options={data.options} series={data.series} type="scatter" height={350} />
            )}
        </React.Fragment>
    )
}

export default App
