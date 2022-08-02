import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Chart from "react-apexcharts";
import Plot from "react-plotly.js";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
//placeholder for set of objective values
const objectiveValues = [
  { val: 0, text: "Makespan" },
  { val: 1, text: "Total tardiness" },
  { val: 2, text: "Penalties" },
  { val: 3, text: "Major setup S1" },
  { val: 4, text: "Major setup S2" },
];

function EvaluationView(props) {
  const [valueAmount, setValueAmount] = React.useState(true);
  const [chosenValues, setChosenValues] = React.useState([]);
  const [data, setData] = useState([{}]);
  const [data2, setData2] = useState([{}]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChosenValues(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const receiveValues = () => {
    //get inputs from
    if (chosenValues.length < 2 || chosenValues.length > 3) {
      setValueAmount(false);
      return;
    }
    if (chosenValues.length === 2) {
      let temp = "2d";
      for (var i = 0; i < chosenValues.length; i++) {
        temp += "/";
        temp += chosenValues[i];
      }
      setData2('undefined')
      fetch(temp)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    if (chosenValues.length === 3) {
      let temp = "3d";
      for (var j = 0; j < chosenValues.length; j++) {
        temp += "/";
        temp += chosenValues[j];
      }
      setData('undefined')
      fetch(temp)
        .then((res) => res.json())
        .then((data2) => {
          setData2(data2);
        });
    }
    setValueAmount(true);
  };
  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <FormControl fullWidth>
          <InputLabel id="choose-objective-Values">objective Values</InputLabel>
          <Select
            labelId="choose-objective-Values-label"
            id="choose-objective-Values"
            multiple
            value={chosenValues}
            onChange={handleChange}
            input={<OutlinedInput label="objectiveValues" />}
            MenuProps={MenuProps}
          >
            {objectiveValues.map((objectiveValue) => (
              <MenuItem key={objectiveValue.val} value={objectiveValue.val}>
                {objectiveValue.text}
              </MenuItem>
            ))}
          </Select>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={receiveValues}
          >
            Submit
          </Button>
          {!valueAmount && (
            <Alert severity="error">
              Error: Check between 2 and 3 values for visualisation!
            </Alert>
          )}
        </FormControl>
      </Container>
      <FormControl fullWidth>
      {
        // Check if data has already been fetched from the backend.
        typeof data.options === "undefined" ? (
          <p>Loading Chart...</p>
        ) : (
          <Chart
            options={data.options}
            series={data.series}
            type="scatter"
            height={350}
          />
        )
      }
      {
        // Check if data has already been fetched from the backend.
        typeof data2[0].marker === "undefined" ? (
          <p>Loading Chart...</p>
        ) : (
          <Plot data={data2} layout={{ width: 500, height: 500 }} />
        )
      }
      </FormControl>
    </React.Fragment>
  );
}

export default EvaluationView;
