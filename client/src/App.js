import React, {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import Plot from "react-plotly.js";

function App() {
    // UseState that will contain the JSON from backend.
    const [data, setData] = useState([{}])
    const [data2, setData2] = useState([{}])

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

    useEffect(() => {
        fetch("/3d/0/1/2").then(
            res => res.json()
        ).then(
            data2 => {
                setData2(data2)
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
            {// Check if data has already been fetched from the backend.
            (typeof data2 === 'undefined') ? (
                <p>Loading Chart...</p>
            ) : (
                <Plot data={data2} />
            )}
        </React.Fragment>
    )
}

export default App
